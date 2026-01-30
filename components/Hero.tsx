"use client";

import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";

import LightPillar from "./LightPillar";
// import Beams from "./Beams"; // Keep if needed for later
// import Ballpit from "./Ballpit"; // Keep if needed for later

const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Motion values for the magnetic button effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    x.set(dx * 0.35);
    y.set(dy * 0.35);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 1. Background Visuals (LightPillar) */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor=""
          bottomColor="white"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <div
        className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]"
        aria-hidden="true"
      />

      {/* 3. Hero Content Layer */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-6 h-dvh">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <h1 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300 mb-8 border border-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
            Digital Craftsmanship
          </h1>

          {/* Headline */}
          <p className="text-white text-5xl md:text-7xl lg:text-9xl leading-[0.85] tracking-tight font-bold">
            WEBSITES THAT BREATHE <br />
            <span className="text-2xl tracking-wide font-normal block mt-4">
              BUILDING DIGITAL PRODUCTS PEOPLE LOVE TO USE
            </span>
          </p>

          {/* Magnetic Button Container */}
          <Link
            href="/contact"
            className="relative mt-16 group inline-block"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
          >
            <motion.button
              ref={buttonRef}
              style={{
                x: springX,
                y: springY,
              }}
              className="relative z-10 px-8 py-4 bg-white text-[#191919] text-sm font-bold uppercase font-mono tracking-widest rounded-full transition-transform duration-300 active:scale-95 shadow-xl"
              aria-label="Make an inquiry"
            >
              Get in Touch
            </motion.button>

            {/* Visual "Pulse" glow effect behind the button on hover */}
            <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
