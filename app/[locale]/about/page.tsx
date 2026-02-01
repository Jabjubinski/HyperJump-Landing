"use client";

import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="py-32">
      <div className="w-full px-6 py-20 lg:py-32 lg:px-12 pt-16.5 h-full gap-8 flex justify-center items-center flex-col text-center">
        <h1
          className="text-5xl italic border-b border-stone-200 pb-4"
          dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
        />

        <p className="text-xl tracking-wide w-full lg:w-1/2 leading-relaxed">
          <span className="text-5xl font-semibold">H</span>
          {t("p1").substring(1)}
        </p>

        <p className="text-xl tracking-wide w-full lg:w-1/2 leading-relaxed">
          {t("p2")}
        </p>

        <div className="mt-4 px-4 py-1 text-xs uppercase tracking-widest font-bold">
          {t("footer")}
        </div>
      </div>
    </div>
  );
};

export default About;
