import React, { useEffect, useRef, useState } from "react";
import Matter, { Engine, Render, Runner, Composite, Body } from "matter-js";

interface TechStackItem {
  name: string;
  src: string;
}

const techStack: TechStackItem[] = [
  { name: "java", src: "/java.svg" },
  { name: "ex", src: "/expressjs.svg" },
  { name: "node", src: "/nextjs.svg" },
  { name: "docker", src: "/docker.svg" },
  { name: "c", src: "/c.svg" },
  { name: "python", src: "/python.svg" },
  { name: "html5", src: "/html.svg" },
  { name: "css", src: "/css.svg" },
  { name: "typescript", src: "/ts.svg" },
  { name: "javascript", src: "/js.svg" },
  { name: "git", src: "/git.svg" },
  { name: "react", src: "/react.svg" },
];

const TechStackCard: React.FC = () => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    const [inView, setInView] = useState(false);
    const [engine, setEngine] = useState<Engine | null>(null);
    const [render, setRender] = useState<Render | null>(null);
    const bodiesAdded = useRef(false);
    const boundariesRef = useRef<Matter.Body[]>([]); // Track boundary bodies

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
        Matter.Bodies.rectangle(
          -10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(
          containerWidth + 10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(
          containerWidth / 2,
          -10,
          containerWidth,
          20,
          { isStatic: true, render: { visible: false } }
        )
      ];
    };

    const boundaries = createBoundaries();
    boundariesRef.current = boundaries;

    const mouse = Matter.Mouse.create(canvasRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(newEngine, {
      mouse,
      constraint: { stiffness: 0.1, render: { visible: false } },
    });

    Matter.World.add(newEngine.world, [...boundaries, mouseConstraint]);

    setEngine(newEngine);
    setRender(newRender);
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
      render.canvas.style.width = newWidth + "px";   // Added line to fix stretching
      render.canvas.style.height = newHeight + "px";  // Added line to fix stretching

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: newWidth, y: newHeight },
      });

      // Remove old boundaries
      Composite.remove(engine.world, boundariesRef.current);

      // Create new boundaries
      const newBoundaries = [
        Matter.Bodies.rectangle(
          newWidth / 2,
          newHeight + 10,
          newWidth,
          20,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(
          -10,
          newHeight / 2,
          20,
          newHeight,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(
          newWidth + 10,
          newHeight / 2,
          20,
          newHeight,
          { isStatic: true, render: { visible: false } }
        ),
        Matter.Bodies.rectangle(
          newWidth / 2,
          -10,
          newWidth,
          20,
          { isStatic: true, render: { visible: false } }
        )
      ];

      // Add new boundaries to the world
      Composite.add(engine.world, newBoundaries);
      boundariesRef.current = newBoundaries;
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); // Initial call

    return () => window.removeEventListener("resize", updateDimensions);
  }, [render, engine]); // Add engine as dependency

  // When the card is in view, add logo bodies and start the simulation (only once)
  useEffect(() => {
    if (!engine || !render || !inView) return;
    if (bodiesAdded.current) return;
    bodiesAdded.current = true;

    const bodyWidth = 80;
    const bodyHeight = 80;
    const logoBodies = techStack.map((item, idx) => {
      // Tighter stacking: small horizontal offset and minimal vertical gap
      const x =
        (render.options.width as number) / 2 + Math.random() * 20 - 10; // ±10px horizontally
      const y = 50 + idx * 1.5; // vertical gap of 1.5px per logo
      return Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
        restitution: 0.5,
        friction: 0.1,
        density: 0.001,
        render: {
          sprite: {
            texture: item.src, // Ensure your SVG files are in /public
            xScale: bodyWidth / 128,
            yScale: bodyHeight / 128,
          },
        },
      });
    });

    Matter.World.add(engine.world, logoBodies);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
  }, [inView, engine, render]);

  return (
    <div ref={cardRef} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
      <h2
        className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
        style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
      >
        And here’s my tech stack...
      </h2>
      {/* Canvas container uses a ref for responsive sizing */}
      <div ref={containerRef} className="relative w-full h-[400px]">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  );
};

export default TechStackCard;
