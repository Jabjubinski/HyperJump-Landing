"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-dvh w-full flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Visual Hyperjump Effect (Blurred light streaks) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute top-1/2 left-1/4 w-[1px] h-64 bg-white blur-[2px]"
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1.5, opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
          className="absolute top-1/3 left-2/3 w-[1px] h-96 bg-white blur-[1px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Brand Header */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600 mb-12"
        >
          Hyperjump Agency // System 404
        </motion.span>

        {/* Big Error Display */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ letterSpacing: "0em", filter: "blur(10px)", opacity: 0 }}
            animate={{
              letterSpacing: "0.2em",
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[12rem] font-(family-name:--font-instrument-serif) italic text-white leading-none"
          >
            Missed.
          </motion.h1>
          {/* Subtle ghosting effect behind the text */}
          <h1 className="absolute inset-0 text-white/5 blur-xl select-none font-(family-name:--font-instrument-serif) italic text-8xl md:text-[12rem] leading-none translate-x-2">
            Missed.
          </h1>
        </div>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md text-center"
        >
          <p className="text-zinc-400 text-lg md:text-xl font-(family-name:--font-instrument-serif) italic mb-10">
            The coordinates you provided don&apos;t exist in our current galaxy.
            The jump was unsuccessful.
          </p>

          {/* Action Button */}
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 mx-auto px-8 py-4 bg-white text-#191919 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
            >
              <MoveLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Recalibrate Course
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Footer Meta */}
      <div className="absolute bottom-12 w-full flex justify-center px-12">
        <div className="flex gap-8 text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
          <span>Tbilisi, GE // 41.7151° N</span>
          <span className="hidden md:inline">Jump Status: Disconnected</span>
        </div>
      </div>
    </main>
  );
}
