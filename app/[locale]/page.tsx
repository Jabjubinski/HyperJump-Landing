//sections
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/services/services";

//animations
import ScrollVelocity from "@/components/ScrollVelocity";

//intl
import { useTranslations } from "next-intl";
import StatusNotice from "@/components/StatusNotice";

export default function Home() {
  const scrollT = useTranslations("Marquee");
  const bugT = useTranslations("Bug");

  return (
    <div className="text-white overflow-x-hidden">
      <StatusNotice />

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
