"use client";

import { motion } from "framer-motion";

// Define the transition with 'as const' to satisfy TypeScript
const stairTransition = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1] as const,
};

export default function Stairs() {
  const nbOfColumns = 5;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] flex">
      {[...Array(nbOfColumns)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          transition={{
            ...stairTransition,
            delay: 0.05 * i,
          }}
          className="relative h-full w-full bg-zinc-900"
        />
      ))}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed inset-0 bg-zinc-950 pointer-events-none -z-10"
      />
    </div>
  );
}
