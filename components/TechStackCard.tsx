import React, { useEffect, useRef, useState } from "react";
import Matter, { Engine, Render, Runner, Composite, Body } from "matter-js";

interface TechStackItem {
  name: string;
  src: string;
  width: number;
  height: number;
}

const techStack: TechStackItem[] = [
  { name: "java", src: "/java.svg", width: 76, height: 102 },
  { name: "Express.js", src: "/tech/rounded/expressjs.svg.svg", width: 122, height: 122 },
  { name: "Next.js", src: "/tech/rounded/nextjs.svg.svg", width: 128, height: 128 },
  { name: "docker", src: "/docker.svg", width: 100, height: 68 },
  { name: "c", src: "/c.svg", width: 111, height: 119 },
  { name: "python", src: "/tech/rounded/python.svg.svg", width: 99, height: 101 },
  { name: "html5", src: "/html.svg", width: 96, height: 107 },
  { name: "css", src: "/css.svg", width: 106, height: 112 },
  { name: "typescript", src: "/tech/rounded/ts.svg.svg", width: 100, height: 101 },
  { name: "javascript", src: "/tech/rounded/js.svg.svg", width: 110, height: 110 },
  { name: "git", src: "/tech/rounded/git.svg.svg", width: 100, height: 100 },
  { name: "react", src: "/react.svg", width: 101, height: 90 },
  { name: "Go", src: "/tech/rounded/go.svg.svg", width: 128, height: 128 },
  { name: "FastAPI", src: "/tech/rounded/fastapi.svg.svg", width: 128, height: 128 },
  { name: "Node.js", src: "/tech/nodejs.svg", width: 71, height: 80 },
  { name: "PostgreSQL", src: "/tech/rounded/postgresql.png.svg", width: 540, height: 557 },
  { name: "Supabase", src: "/tech/rounded/supabase.svg.svg", width: 109, height: 113 },
  { name: "MongoDB", src: "/tech/rounded/mongodb.svg.svg", width: 128, height: 128 },
  { name: "Redis", src: "/tech/rounded/redis.svg.svg", width: 128, height: 128 },
  { name: "Tailwind CSS", src: "/tech/rounded/tailwind.png.svg", width: 180, height: 180 },
  { name: "Ionic", src: "/tech/rounded/ionic.png.svg", width: 192, height: 192 },
  { name: "Capacitor", src: "/tech/rounded/capacitor.png.svg", width: 192, height: 192 },
  { name: "NativeWind", src: "/tech/rounded/nativewind.svg.svg", width: 24, height: 24 },
  { name: "Whisper", src: "/tech/rounded/openai-standard.png.svg", width: 640, height: 640 },
  { name: "TimeGPT", src: "/tech/rounded/timegpt.svg.svg", width: 373, height: 373 },
  { name: "Gemini", src: "/tech/rounded/gemini.png.svg", width: 512, height: 512 },
  { name: "Vercel AI SDK", src: "/tech/rounded/ai-sdk.svg.svg", width: 64, height: 64 },
  { name: "GitHub", src: "/tech/github.svg", width: 98, height: 96 },
  { name: "Cloudflare R2", src: "/tech/rounded/cloudflare.svg.svg", width: 128, height: 128 },
  { name: "Coolify", src: "/tech/rounded/coolify.png.svg", width: 512, height: 512 },
  { name: "Dokploy", src: "/tech/rounded/dokploy.svg.svg", width: 600, height: 600 },
  { name: "Greptile", src: "/tech/rounded/greptile.png.svg", width: 2048, height: 2048 },
  { name: "CodeRabbit", src: "/tech/rounded/coderabbit.png.svg", width: 180, height: 180 },
  { name: "Blacksmith", src: "/tech/rounded/blacksmith.png.svg", width: 256, height: 256 },
  { name: "Clerk", src: "/tech/rounded/clerk.png.svg", width: 256, height: 256 },
  { name: "Resend", src: "/tech/rounded/resend.png.svg", width: 180, height: 180 },
  { name: "Fonnte", src: "/tech/rounded/fonnte.png.svg", width: 300, height: 300 },
  { name: "Xendit", src: "/tech/rounded/xendit.png.svg", width: 256, height: 256 },
  { name: "Mayar", src: "/tech/rounded/mayar.png.svg", width: 362, height: 363 },
  { name: "Midtrans", src: "/tech/midtrans.svg", width: 28, height: 30 },
  { name: "IFTTT", src: "/tech/rounded/ifttt.svg.svg", width: 32, height: 32 },
];

const TechStackCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [inView, setInView] = useState(false);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [render, setRender] = useState<Render | null>(null);
  const bodiesAdded = useRef(false);
  const boundariesRef = useRef<Matter.Body[]>([]);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Initialize Matter.js engine and renderer
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const newEngine = Engine.create();
    const newRender = Render.create({
      canvas: canvasRef.current,
      engine: newEngine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: 3,
      },
    });

    // Create initial boundaries
    const createBoundaries = () => {
      return [
        Matter.Bodies.rectangle(
          containerWidth / 2,
          containerHeight + 10,
          containerWidth,
          20,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(-10, containerHeight / 2, 20, containerHeight, {
          isStatic: true,
          render: { visible: false },
        }),
        Matter.Bodies.rectangle(
          containerWidth + 10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(containerWidth / 2, -10, containerWidth, 20, {
          isStatic: true,
          render: { visible: false },
        }),
      ];
    };

    const boundaries = createBoundaries();
    boundariesRef.current = boundaries;

    const mouse = Matter.Mouse.create(canvasRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(newEngine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
        // Add damping to reduce wild movements
        damping: 0.4,
      },
    });

    // Adjust world bounds to be slightly larger than container
    Matter.World.add(newEngine.world, [...boundaries, mouseConstraint]);

    // Reduce gravity to make movements less extreme
    newEngine.gravity.y = 0.5;
    // Add air friction to dampen movement
    newEngine.world.gravity.scale = 0.001;

    // Add passive wheel event listener to allow scrolling
    const handleWheel = (e: WheelEvent) => {
      // Allow default scroll behavior
    };
    canvasRef.current.addEventListener("wheel", handleWheel, { passive: true });

    setEngine(newEngine);
    setRender(newRender);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    if (!render || !engine || !containerRef.current) return;

    const updateDimensions = () => {
      const newWidth = containerRef.current?.clientWidth || 600;
      const newHeight = containerRef.current?.clientHeight || 400;

      // Update render dimensions
      render.options.width = newWidth;
      render.options.height = newHeight;
      render.canvas.width = newWidth * 3;
      render.canvas.height = newHeight * 3;
      render.canvas.style.width = newWidth + "px";
      render.canvas.style.height = newHeight + "px";

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: newWidth, y: newHeight },
      });

      // Remove old boundaries
      Composite.remove(engine.world, boundariesRef.current);

      // Create new boundaries
      const newBoundaries = [
        Matter.Bodies.rectangle(newWidth / 2, newHeight + 10, newWidth, 20, {
          isStatic: true,
          render: { visible: false },
        }),
        Matter.Bodies.rectangle(-10, newHeight / 2, 20, newHeight, {
          isStatic: true,
          render: { visible: false },
        }),
        Matter.Bodies.rectangle(newWidth + 10, newHeight / 2, 20, newHeight, {
          isStatic: true,
          render: { visible: false },
        }),
        Matter.Bodies.rectangle(newWidth / 2, -10, newWidth, 20, {
          isStatic: true,
          render: { visible: false },
        }),
      ];

      // Add new boundaries to the world
      Composite.add(engine.world, newBoundaries);
      boundariesRef.current = newBoundaries;
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, [render, engine]);

  // When the card is in view, add logo bodies and start the simulation
  useEffect(() => {
    if (!engine || !render || !inView || bodiesAdded.current) return;
    bodiesAdded.current = true;

    const bodyWidth = Math.min(48, (render.options.width as number) / 8);
    const bodyHeight = bodyWidth;
    const logoBodies = techStack.map((item, idx) => {
      const spriteScale = Math.min(bodyWidth / item.width, bodyHeight / item.height);
      const x = (render.options.width as number) / 2 + Math.random() * 20 - 10;
      const y = 50 + idx * 1.5;

      // Create the logo body with adjusted physics properties
      const body = Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
        label: item.name,
        restitution: 0.3, // Reduce bounciness
        friction: 0.8, // Increase friction
        density: 0.002, // Slightly increase density
        frictionAir: 0.03, // Add air friction
        // Add force limits to prevent extreme movements
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: {
              x: render.options.width as number,
              y: render.options.height as number,
            },
          },
        },
        render: {
          sprite: {
            texture: item.src,
            xScale: spriteScale,
            yScale: spriteScale,
          },
        },
      });

      // Set initial velocity and angular velocity to be moderate
      Matter.Body.setVelocity(body, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(body, 0);

      return body;
    });

    Matter.World.add(engine.world, logoBodies);

    // Add a collision event listener to keep bodies in bounds
    Matter.Events.on(engine, "afterUpdate", () => {
      logoBodies.forEach((body) => {
        const x = body.position.x;
        const y = body.position.y;
        const containerWidth = render.options.width as number;
        const containerHeight = render.options.height as number;

        // Check if body is out of bounds and wrap it back
        if (x < 0) Matter.Body.setPosition(body, { x: containerWidth, y });
        if (x > containerWidth) Matter.Body.setPosition(body, { x: 0, y });
        if (y < 0) Matter.Body.setPosition(body, { x, y: containerHeight });
        if (y > containerHeight) Matter.Body.setPosition(body, { x, y: 0 });

        // Limit velocity if it gets too high
        const maxVelocity = 15;
        const currentVelX = body.velocity.x;
        const currentVelY = body.velocity.y;

        if (
          Math.abs(currentVelX) > maxVelocity ||
          Math.abs(currentVelY) > maxVelocity
        ) {
          Matter.Body.setVelocity(body, {
            x:
              Math.min(Math.abs(currentVelX), maxVelocity) *
              Math.sign(currentVelX),
            y:
              Math.min(Math.abs(currentVelY), maxVelocity) *
              Math.sign(currentVelY),
          });
        }

        // Limit angular velocity
        const maxAngularVelocity = 0.2;
        if (Math.abs(body.angularVelocity) > maxAngularVelocity) {
          Matter.Body.setAngularVelocity(
            body,
            maxAngularVelocity * Math.sign(body.angularVelocity)
          );
        }
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup function
    return () => {
      Matter.Events.off(engine, "afterUpdate");
      Runner.stop(runner);
      Render.stop(render);
    };
  }, [inView, engine, render]);

  return (
    <div
      ref={cardRef}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden"
    >
      {/* 3D Inner Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
      {/* Top Highlight */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>

      <h2
        className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter relative z-10"
        style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
      >
        And here's my tech stack...
      </h2>
      <div
        ref={containerRef}
        className="relative w-full h-[clamp(300px,20.833vw,400px)] relative z-10"
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ touchAction: "pan-y" }}
        />
      </div>
    </div>
  );
};

export default TechStackCard;
