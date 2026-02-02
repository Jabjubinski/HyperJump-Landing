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
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("Projects");

  // Project data using translation keys
  const projects = [
    {
      id: "verve",
      title: t("verveTitle"),
      category: t("verveCategory"),
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
      description: t("verveDesc"),
      url: "https://verve-eighteen.vercel.app/",
    },
    {
      id: "Cafe",
      title: "Cafe",
      category: "Restaurants",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: t("verveDesc"),
      url: "https://cafe-hyperjump.vercel.app/",
    },
  ];

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
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        {/* Left Side: Strategic Copy */}
        <div className="md:w-1/3 md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 block">
              {t("badge")}
            </span>
            <h2
              className="text-6xl lg:text-7xl font-(family-name:--font-instrument-serif) italic leading-[0.9] mb-8"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />
            <p className="text-[#c0c0c0] text-lg leading-relaxed max-w-sm">
              {t("description")}
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-tighter"
              >
                <span className="border-b-2 border-white pb-1 group-hover:pr-4 transition-all duration-300">
                  {t("cta")}
                </span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Project List */}
        <div
          className="w-full md:w-2/3 flex flex-col relative"
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={project.id}
              target="_blank"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative py-12 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between transition-opacity duration-500"
              style={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
              }}
            >
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-[10px] font-mono text-[#c0c0c0] uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-5xl md:text-8xl font-(family-name:--font-instrument-serif) italic leading-none text-white">
                  {project.title}
                </h3>
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
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500 text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}

          {/* Magnetic Image Preview */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ x, y, transform: "translate(-50%, -50%)" }}
                className="hidden lg:block pointer-events-none absolute top-0 left-0 w-80 h-100 z-50"
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
                  <Image
                    src={projects[hoveredIndex].image}
                    fill
                    alt="Preview"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-lg">
                    <p className="text-white text-[10px] font-mono uppercase tracking-widest">
                      {t("caseStudy")} // {projects[hoveredIndex].year}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
