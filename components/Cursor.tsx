"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [cursorType, setCursorType] = useState("default");
  const [isMobile, setIsMobile] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window;
      setIsMobile(isTouch);
    };

    checkTouch();

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => {
      const hoverables = document.querySelectorAll("button, a, .project-card");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorType("hover"));
        el.addEventListener("mouseleave", () => setCursorType("default"));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleHover();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: cursorType === "hover" ? 4 : cursorType === "project" ? 6 : 1,
      }}
    >
      {cursorType === "project" && (
        <span className="text-[2px] font-bold uppercase tracking-tighter flex items-center justify-center h-full text-black">
          View
        </span>
      )}
    </motion.div>
  );
}
