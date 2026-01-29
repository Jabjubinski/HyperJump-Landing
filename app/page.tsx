"use client";

import Hero from "@/components/Hero";

import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/services/services";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <div className="">
      <section
        id="hero"
        className="relative bg-[#121212] overflow-hidden mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]"
      >
        <section id="home">
          <Hero />
        </section>
      </section>

      <section id="work">
        <CaseStudies />
      </section>

      <ScrollVelocity
        className="h-30 hidden md:flex"
        numCopies={7}
        texts={[
          "LET'S WORK TOGETHER • START YOUR PROJECT • SAY HELLO • GET IN TOUCH •",
          "AVAILABLE FOR NEW PROJECTS • 2026 OPENINGS • HIRE US •",
        ]}
      />

      <section id="services">
        <Services />
      </section>
    </div>
  );
}
