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
          { isStatic: true, render: { visible: false } 
        }),
        Matter.Bodies.rectangle(
          -10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true, render: { visible: false } 
        }),
        Matter.Bodies.rectangle(
          containerWidth + 10,
          containerHeight / 2,
          20,
          containerHeight,
          { isStatic: true, render: { visible: false } 
        }),
        Matter.Bodies.rectangle(
          containerWidth / 2,
          -10,
          containerWidth,
          20,
          { isStatic: true, render: { visible: false } 
        })
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
        damping: 0.4
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
    canvasRef.current.addEventListener('wheel', handleWheel, { passive: true });

    setEngine(newEngine);
    setRender(newRender);

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('wheel', handleWheel);
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
          { isStatic: true, render: { visible: false } 
        }),
        Matter.Bodies.rectangle(
          newWidth + 10,
          newHeight / 2,
          20,
          newHeight,
          { isStatic: true, render: { visible: false } 
        }),
        Matter.Bodies.rectangle(
          newWidth / 2,
          -10,
          newWidth,
          20,
          { isStatic: true, render: { visible: false } 
        })
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

    const bodyWidth = 80;
    const bodyHeight = 80;
    const logoBodies = techStack.map((item, idx) => {
      const x = (render.options.width as number) / 2 + Math.random() * 20 - 10;
      const y = 50 + idx * 1.5;
      
      // Create the logo body with adjusted physics properties
      const body = Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
        restitution: 0.3, // Reduce bounciness
        friction: 0.8,    // Increase friction
        density: 0.002,   // Slightly increase density
        frictionAir: 0.03, // Add air friction
        // Add force limits to prevent extreme movements
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: render.options.width as number, y: render.options.height as number }
          }
        },
        render: {
          sprite: {
            texture: item.src,
            xScale: bodyWidth / 128,
            yScale: bodyHeight / 128,
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
    Matter.Events.on(engine, 'afterUpdate', () => {
      logoBodies.forEach(body => {
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

        if (Math.abs(currentVelX) > maxVelocity || Math.abs(currentVelY) > maxVelocity) {
          Matter.Body.setVelocity(body, {
            x: Math.min(Math.abs(currentVelX), maxVelocity) * Math.sign(currentVelX),
            y: Math.min(Math.abs(currentVelY), maxVelocity) * Math.sign(currentVelY)
          });
        }

        // Limit angular velocity
        const maxAngularVelocity = 0.2;
        if (Math.abs(body.angularVelocity) > maxAngularVelocity) {
          Matter.Body.setAngularVelocity(body, maxAngularVelocity * Math.sign(body.angularVelocity));
        }
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup function
    return () => {
      Matter.Events.off(engine, 'afterUpdate');
      Runner.stop(runner);
      Render.stop(render);
    };
  }, [inView, engine, render]);

  return (
    <div ref={cardRef} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
      <h2
        className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
        style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
      >
        And here's my tech stack...
      </h2>
      <div ref={containerRef} className="relative w-full h-[400px]">
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full"
          style={{ touchAction: 'pan-y' }}
        />
      </div>
    </div>
  );
};

export default TechStackCard;