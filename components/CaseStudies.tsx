"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // More "premium" feel than MoveRight

const projects = [
  {
    id: "01",
    title: "Shop",
    category: "High-End eCommerce",
    year: "2026",
    image: "/websites/blacksugar.png", // Use strings for cleaner mapping
    description: "Increasing conversion by 40% through immersive storytelling.",
  },
  {
    id: "02",
    title: "Cafe Menu",
    category: "Culinary Experience",
    year: "2026",
    image: "/websites/la-crosta.png",
    description: "A digital dining room designed for high-intent reservations.",
  },
  // {
  //   id: "03",
  //   title: "The Challenge",
  //   category: "SaaS Product",
  //   year: "2026",
  //   image: "/websites/blacksugar.png",
  //   description: "Visualizing complex data into a seamless user journey.",
  // },
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Physics-based mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          {/* Left Side: Strategic Copy */}
          <div className="md:w-1/3 md:sticky md:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 block">
                Selected Work — 2026
              </span>
              <h2 className="text-6xl lg:text-7xl font-(family-name:--font-instrument-serif) italic leading-[0.9] mb-8">
                Digital <br /> Flagships
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed max-w-sm">
                We don’t just build websites; we create digital environments
                that convert casual visitors into brand advocates.
              </p>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 text-sm font-bold uppercase tracking-tighter"
                >
                  <span className="border-b-2 border-black pb-1 group-hover:pr-4 transition-all duration-300">
                    Start a Project
                  </span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive List */}
          <div
            className="md:w-2/3 flex flex-col relative"
            onMouseMove={handleMouseMove}
          >
            {projects.map((project, index) => (
              <Link
                href={`/work/${project.id}`}
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-12 border-b border-zinc-200 flex flex-col md:flex-row md:items-center justify-between transition-opacity duration-500"
                style={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
                }}
              >
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-8xl font-(family-name:--font-instrument-serif) italic leading-none">
                    {project.title}
                  </h3>
                  {/* Strategic snippet appearing on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    className="text-zinc-500 text-sm max-w-xs overflow-hidden mt-2 hidden md:block"
                  >
                    {project.description}
                  </motion.p>
                </div>

                <div className="mt-6 md:mt-0 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}

            {/* The "Money" Animation: The Floating Cursor Preview */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{ x, y, transform: "translate(-50%, -50%)" }}
                  className="hidden lg:block pointer-events-none absolute top-0 left-0 w-[350px] h-[450px] z-50"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-zinc-100">
                    <Image
                      src={projects[hoveredIndex].image}
                      fill
                      alt="Preview"
                      className="object-cover"
                    />
                    {/* Glassmorphism label on the image */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg">
                      <p className="text-white text-xs font-mono uppercase tracking-widest">
                        Case Study // {projects[hoveredIndex].year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
