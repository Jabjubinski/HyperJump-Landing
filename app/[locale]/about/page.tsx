"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function AboutLab() {
  const t = useTranslations("About");
  const constraintsRef = useRef(null);

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      {/* Background Grid - Adds to the 'Lab' feel */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />

      <div ref={constraintsRef} className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
        
        {/* Central Brand Statement */}
        <h2 className="absolute text-[15vw] font-bold text-white/3 pointer-events-none select-none tracking-tighter uppercase">
          Momentum
        </h2>

        {/* Draggable Logic Blocks */}
        <DraggableCard 
            constraintsRef={constraintsRef} 
            title="THE VISION" 
            text={t("p1")} 
            initialPos={{ x: -150, y: -100 }} 
        />
        <DraggableCard 
            constraintsRef={constraintsRef} 
            title="THE ENGINE" 
            text={t("p2")} 
            initialPos={{ x: 150, y: 120 }} 
        />
        
        {/* Sticky Label */}
        <div className="absolute bottom-10 left-10">
           <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-[0.4em]">
             Interactive Lab // Drag to Explore
           </p>
        </div>
      </div>
    </section>
  );
}

function DraggableCard({ constraintsRef, title, text, initialPos }: any) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      initial={initialPos}
      className="absolute p-8 w-80 md:w-96 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl cursor-grab shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{title}</span>
      </div>
      <p className="text-white text-lg font-light leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}