'use client';

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  // Add a subtle offset based on the mouse position
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <div className="relative min-h-[100dvh] overflow-hidden">
        {/* Background iridescence effect */}
        <div className="fixed inset-0 -z-10 animate-fade-in">
          <Iridescence
            color={[0.95, 0.72, 0.76]}
            speed={0.3}
            amplitude={0.1}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4 py-16">
          <h1 
            className="font-['Rubik_80s_Fade'] text-center mb-6 leading-none tracking-tight text-white mix-blend-difference
                     opacity-0 animate-fade-in-up"
            style={{ 
              fontSize: "clamp(4rem, 10vw, 12rem)",
              animationDelay: "0.3s",
              animationFillMode: "forwards"
            }}
          >
            Coming Soon
          </h1>
          
          <p 
            className="max-w-2xl text-center mb-8 leading-tight tracking-tighter text-white/90 font-medium mix-blend-difference
                     opacity-0 animate-fade-in-up"
            style={{ 
              fontSize: "clamp(1rem, 1.5vw, 2rem)",
              animationDelay: "0.5s",
              animationFillMode: "forwards"
            }}
          >
            This page is currently under construction. Check back soon for something amazing!
          </p>

          <Link 
            href="/"
            className="relative group overflow-hidden
                     px-8 py-4 rounded-xl 
                     text-white/90 font-medium tracking-tighter
                     transition-all duration-300
                     backdrop-blur-md
                     border border-white/20
                     shadow-[0_0_1rem_0_rgba(0,0,0,0.1)]
                     hover:shadow-[0_0_2rem_0_rgba(0,0,0,0.1)]
                     hover:border-white/40
                     text-lg
                     bg-gradient-to-r from-white/20 to-white/10
                     opacity-0 animate-fade-in-up"
            style={{ 
              animationDelay: "0.7s",
              animationFillMode: "forwards"
            }}
          >
            <span className="relative z-10">← Back to Home</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </Link>
        </div>
      </div>
    </>
  );
}

interface IridescenceProps {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
}: IridescenceProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    
    // Create renderer with alpha and antialias
    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let program: Program;

    function resize() {
      const { width, height } = ctn.getBoundingClientRect();
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        ];
      }
    }

    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: color },
        uResolution: {
          value: [
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ]
        },
        uMouse: { value: [mousePos.current.x, mousePos.current.y] },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId: number;

    function update(t: number) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    // Set canvas style
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    
    ctn.appendChild(gl.canvas);
    animateId = requestAnimationFrame(update);

    function handleMouseMove(e: MouseEvent) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    if (mouseReact) {
      ctn.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (mouseReact) {
        ctn.removeEventListener("mousemove", handleMouseMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return (
    <div
      ref={ctnDom}
      className="w-full h-full"
    />
  );
}