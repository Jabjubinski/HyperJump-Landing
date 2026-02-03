"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [cursorType, setCursorType] = useState("default");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => {
      const hoverables = document.querySelectorAll("button, a, .project-card");

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (el.classList.contains("project-card")) setCursorType("project");
          else setCursorType("hover");
        });
        el.addEventListener("mouseleave", () => setCursorType("default"));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleHover();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
