"use client";

import { motion } from "framer-motion";

const stairTransition = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1] as const,
};

export default function Stairs({ triggerKey }: { triggerKey: string }) {
  const columns = 5;

  return (
    <div className="fixed inset-0 z-200 pointer-events-none flex">
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={`${triggerKey}-${i}`}
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          transition={{
            ...stairTransition,
            delay: i * 0.05,
          }}
          className="h-full w-full bg-zinc-900"
        />
      ))}
    </div>
  );
}
