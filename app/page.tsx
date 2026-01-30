"use client";

import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/services/services";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
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
            texts={[
              "LET'S WORK TOGETHER • START YOUR PROJECT • SAY HELLO • GET IN TOUCH •",
              "AVAILABLE FOR NEW PROJECTS • 2026 OPENINGS • HIRE US •",
            ]}
          />
        </div>

        <section id="services" className="w-full px-6 md:px-12 lg:px-24 mb-32">
          <Services />
        </section>
      </main>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
