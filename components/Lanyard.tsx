/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  type ThreeEvent,
} from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
  Text,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import { useSpring, animated, to } from "@react-spring/three";

import cardGLB from "@/public/card/card.glb";
import lanyard from "@/public/card/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 8,
  transparent = true,
}: LanyardProps) {
  return (
    <div id="connect" className="relative -top-16 z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ maxSpeed = 50, minSpeed = 0 }: BandProps) {
  // Refs for Rapier rigid bodies
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyard.src);
  // Improve texture quality:
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;

  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  // Declare textHover state before its usage
  const [textHover, setTextHover] = useState(false);

  // Animated text spring with underline opacity:
  const textSpring = useSpring({
    scale: textHover ? 1.1 : 1,
    color: textHover ? "black" : "#474646",
    underlineOpacity: textHover ? 1 : 0,
    config: { tension: 300, friction: 20 },
  });

  // Create a smoother pulse animation with easing
  const { pulse } = useSpring({
    from: { pulse: 1 },
    to: { pulse: 1.16 },
    loop: { reverse: true },
    config: { 
      duration: 2000,
      easing: (t) => t * t * (3 - 2 * t), // Custom easing function for smoother transition
      mass: 1,
      tension: 200,
      friction: 140
    },
  });
  const finalScale = to([textSpring.scale, pulse], (s, p) => s * p);

  // Cast animated(Text) to proper type
  const AnimatedText = animated(Text) as unknown as typeof Text;

  // Set up joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    document.body.style.cursor = hovered ? (dragged ? "grabbing" : "grab") : "auto";
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      // Increase resolution for smoother band:
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(64));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={"fixed" as RigidBodyProps["type"]} />
        <RigidBody ref={j1} position={[0.5, 0, 0]} {...segmentProps} type={"dynamic" as RigidBodyProps["type"]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={j2} position={[1, 0, 0]} {...segmentProps} type={"dynamic" as RigidBodyProps["type"]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={j3} position={[1.5, 0, 0]} {...segmentProps} type={"dynamic" as RigidBodyProps["type"]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          ref={card}
          position={[2, 0, 0]}
          {...segmentProps}
          type={dragged ? ("kinematicPosition" as RigidBodyProps["type"]) : ("dynamic" as RigidBodyProps["type"])}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={(e: ThreeEvent<PointerEvent>) => {
              hover(true);
              e.stopPropagation();
            }}
            onPointerOut={(e: ThreeEvent<PointerEvent>) => {
              hover(false);
              e.stopPropagation();
            }}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              drag(false);
              e.stopPropagation();
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
              e.stopPropagation();
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            {/* Underline animation - moved forward and adjusted */}
            <animated.mesh
              position={[-0.029, 0.338, 0]} // Moved forward in z-axis and adjusted y position
              scale-x={textSpring.underlineOpacity.to((o) => 0.8 + o * 0.3)}
            >
              <planeGeometry args={[0.4, 0.003]} /> // Adjusted width and thickness
              <animated.meshBasicMaterial
                color={textSpring.color as unknown as string}
                opacity={textSpring.underlineOpacity}
                transparent
                depthTest={false} // Ensures visibility
              />
            </animated.mesh>
            <AnimatedText
              position={[0, 0.37, 0.01]}
              scale={finalScale.to((s) => [0.045 * s, 0.045 * s, 0.045 * s]) as any}
              color={textSpring.color as unknown as string}
              anchorX="center"
              anchorY="middle"
              onClick={() => (window.location.href = "mailto:arqilasp@gmail.com")}
              onPointerOver={(e: ThreeEvent<PointerEvent>) => {
                setTextHover(true);
                document.body.style.cursor = "pointer";
                e.stopPropagation();
              }}
              onPointerOut={(e: ThreeEvent<PointerEvent>) => {
                setTextHover(false);
                document.body.style.cursor = "auto";
                e.stopPropagation();
              }}
            >
              LET'S CONNECT →
            </AnimatedText>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

export { Lanyard };
