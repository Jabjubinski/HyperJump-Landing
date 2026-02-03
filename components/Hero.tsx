"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LightPillar from "./LightPillar";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth < 768);

    let timeoutId: NodeJS.Timeout | undefined;
    const debouncedResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#0a0a0a] flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 opacity-40 md:opacity-60 pointer-events-none">
        <LightPillar
          topColor=""
          bottomColor="#ffffff"
          intensity={1}
          rotationSpeed={0.2}
          glowAmount={0.001}
          pillarWidth={isPhone ? 2 : 4}
          pillarHeight={0.5}
          noiseIntensity={0.4}
          pillarRotation={15}
          interactive={false}
          mixBlendMode="overlay"
          quality={isPhone ? "low" : "high"}
        />
      </div>

      <div className="absolute right-0 top-0 h-full w-[45%] bg-white/1 -skew-x-12 translate-x-20 border-l border-white/5 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-4 items-center">
          <div className="w-full md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start"
            >
              <span className="inline-block text-[9px] tracking-[0.4em] uppercase text-white/40 mb-4 py-1 px-3 border border-white/10 rounded-full backdrop-blur-md">
                {t("badge")}
              </span>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[7.5rem] font-bold leading-[0.9] uppercase hero-header tracking-tighter">
                {t("titleMain")}
              </h1>

              <p className="mt-4 text-sm md:text-base lg:text-lg text-zinc-400 max-w-md hero-sub font-light leading-relaxed">
                {t("titleSub")}
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/work"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3 text-black transition-all hover:bg-zinc-200"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest">
                    {t("cta")}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="md:hidden inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1"
                >
                  Connect
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:col-span-4 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <Link
                href="/contact"
                className="group relative flex h-36 w-36 lg:h-52 lg:w-52 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all hover:bg-white"
              >
                <div className="absolute inset-1.5 rounded-full border border-dashed border-white/20 group-hover:border-black/10 animate-[spin_40s_linear_infinite]" />

                <div className="text-center group-hover:text-black transition-colors duration-500">
                  <p className="text-[8px] uppercase tracking-[0.4em] font-bold mb-0.5 opacity-50">
                    Direct
                  </p>
                  <h2 className="text-lg lg:text-xl font-bold uppercase tracking-tighter">
                    Contact
                  </h2>
                </div>

                <div className="absolute -top-1 -right-1 h-6 w-6 border-t border-r border-white/20 group-hover:border-black/20" />
                <div className="absolute -bottom-1 -left-1 h-6 w-6 border-b border-l border-white/20 group-hover:border-black/20" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
    </section>
  );
};

export default Hero;
