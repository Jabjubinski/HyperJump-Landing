"use client";

import { useEffect, useState } from "react";
//sections
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/services/services";

//animations
import ScrollVelocity from "@/components/ScrollVelocity";

//intl
import { useTranslations } from "next-intl";

export default function Home() {
  const scrollT = useTranslations("Marquee");
  const bugT = useTranslations("Bug");
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem("construction-notice");
    if (!hasSeenNotice) {
      setShowNotice(true);
    }
  }, []);

  const closeNotice = () => {
    setShowNotice(false);
    sessionStorage.setItem("construction-notice", "true");
  };

  return (
    <div className="text-white overflow-x-hidden">
      {showNotice && (
        <div className="fixed bottom-8 left-8 z-100 max-w-sm">
          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl flex flex-col gap-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                System Status
              </span>
            </div>
            <p className="text-sm font-medium leading-tight">{bugT("text")}</p>
            <button
              onClick={closeNotice}
              className="text-[10px] uppercase tracking-widest font-black border-t border-black/10 pt-4 text-left hover:opacity-50 transition-opacity"
            >
              [ {bugT("accept")} ]
            </button>
          </div>
        </div>
      )}

      <section id="home" className="relative h-dvh w-full">
        <Hero />
      </section>

      <main className="flex flex-col gap-y-32 md:gap-y-64">
        <section id="work" className="w-full pt-32 px-6 md:px-12 lg:px-24">
          <CaseStudies />
        </section>

        <div className="w-screen">
          <ScrollVelocity
            className="font-black tracking-tighter"
            numCopies={7}
            texts={[scrollT("workTogether"), scrollT("availability")]}
          />
        </div>

        <section id="services" className=" w-full px-6 md:px-12 lg:px-24 mb-32">
          <Services />
        </section>
      </main>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
