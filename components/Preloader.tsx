"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
    >
      <div className="relative w-full max-w-4xl px-10">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-auto font-bold italic tracking-tighter uppercase select-none"
        >
          {/* Base Layer: Hollow Outline */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="stroke-zinc-800 stroke-[1px] fill-transparent text-9xl"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            HyperJump
          </text>

          {/* Filling Layer: Only visible inside the text */}
          <mask id="textMask">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="fill-white text-9xl"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              HyperJump
            </text>
          </mask>

          <g mask="url(#textMask)">
            <motion.rect
              initial={{ height: "0%" }}
              animate={{ height: `${percent}%` }}
              transition={{ ease: "linear" }}
              x="0"
              y={200 - percent * 2} // Moves the rectangle up as it fills
              width="1000"
              height="200"
              className="fill-emerald-500"
            />
          </g>
        </svg>

        {/* Technical Footer */}
        <div className="mt-12 flex justify-between items-end w-full max-w-[800px] mx-auto font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase">
              Engine Status
            </span>
            <span className="text-emerald-500 text-xs">
              SPOOLING_MOMENTUM...
            </span>
          </div>
          <div className="text-right">
            <span className="text-5xl font-bold italic tabular-nums">
              {percent}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
