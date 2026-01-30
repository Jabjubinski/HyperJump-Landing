"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full  pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Top Section: Branding & Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 pb-24 relative z-10">
        {/* Brand Mission */}
        <div className="lg:w-1/3">
          <h2 className="font-(family-name:--font-instrument-serif) italic text-4xl text-white mb-6">
            HYPERJUMP
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Crafting digital flagships that bridge the gap between human
            intuition and technical excellence. Available for worldwide
            collaborations in 2026.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Column 1: Sitemap */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono text-zinc-600 tracking-[0.3em]">
              Sitemap
            </span>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {["Work", "Expertise", "Journal", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono text-zinc-600 tracking-[0.3em]">
              Socials
            </span>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {["Instagram", "Awwwards"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal (Hidden on small mobile if needed) */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono text-zinc-600 tracking-[0.3em]">
              Legal
            </span>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Background Brand Text (The "Aesthetic" Touch) */}
      <div className="relative h-24 md:h-48 flex items-center justify-center select-none pointer-events-none">
        <h2 className="text-[15vw] font-(family-name:--font-instrument-serif) italic text-white/[0.03] leading-none translate-y-1/4">
          HYPERJUMP Studio
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            System Operational — 2026
          </p>
        </div>

        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} HYPERJUMP Digital Products. Built
          for the web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
