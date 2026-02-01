"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");

  const servicesData = [
    { number: "01", key: "web" },
    { number: "02", key: "brand" },
    { number: "03", key: "ecommerce" },
    { number: "04", key: "uiux" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-b border-stone-800 pb-6 mb-12">
          <span className="text-stone-500 tracking-widest uppercase text-xs font-sans font-semibold">
            {t("badge")}
          </span>
          <h1 className="tracking-tight text-5xl md:text-7xl text-white font-light mt-2">
            {t("title")}
          </h1>
        </div>

        <div className="mb-16">
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border-b border-stone-800 pb-12 last:border-none group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <span className="text-stone-500 text-sm font-mono mb-4 block">
                    {service.number}
                  </span>
                  <h2 className="text-white text-4xl md:text-5xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {t(`items.${service.key}.title`)}
                  </h2>
                </div>

                <div className="md:w-2/3">
                  <p className="text-white text-lg leading-relaxed mb-6">
                    {t(`items.${service.key}.desc`)}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {t
                      .raw(`items.${service.key}.f`)
                      .map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-[#c0c0c0]"
                        >
                          <span className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-[#131313] rounded-2xl p-12 text-center border border-white/5">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-[#c0c0c0] mb-8 max-w-xl mx-auto">{t("ctaDesc")}</p>
          <Link href="/contact">
            <button className="px-8 py-3 text-[#191919] bg-white rounded-2xl text-sm tracking-wide hover:scale-105 transition-all duration-200">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
