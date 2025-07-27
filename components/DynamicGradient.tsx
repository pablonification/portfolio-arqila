"use client";
import { useEffect, useState } from "react";

const DynamicGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Prevent division by zero if content is shorter than the viewport
      const maxScroll = scrollHeight - viewportHeight;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = scrollTop / maxScroll;
      setScrollProgress(progress);
    };

    // Add listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial calculation
    handleScroll();

    // Cleanup listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // --- NEW LOGIC ---
  // Instead of moving the div, we move the gradient's color stops.
  // This makes the gradient appear to "scroll up" with the page.
  const gradientShift = scrollProgress * 100;
  const fromColor = "#FFB7C3"; // Pink
  const toColor = "#BCF4F5";   // Blue

  // The start color begins at 0% and moves up to -100%.
  // The end color begins at 100% and moves up to 0%.
  const startPercent = 0 - gradientShift;
  const endPercent = 100 - gradientShift;

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `linear-gradient(to bottom, ${fromColor} ${startPercent}%, ${toColor} ${endPercent}%)`,
        // No transform or manual height is needed. The div perfectly covers the viewport.
      }}
    />
  );
};

export default DynamicGradient;