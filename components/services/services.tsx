"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const ServiceItem = ({
  id,
  item,
  index,
}: {
  id: string;
  item: any;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="border-b border-white/10 py-10 group cursor-pointer relative"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
            {item.title}
          </h3>
        </div>

        {/* Modern Arrow Indicator */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="hidden md:block text-3xl font-thin text-zinc-500"
        >
          +
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-12 pt-8 pb-4">
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-3 content-start">
                {item.f.map((feature: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 border border-zinc-800 rounded-full text-[10px] uppercase tracking-widest font-mono bg-zinc-900/50 hover:bg-white hover:text-black transition-colors"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Services() {
  const t = useTranslations("Services");

  // Convert the translation object keys into an array for mapping
  const serviceKeys = ["web", "brand", "ecommerce", "uiux"] as const;

  return (
    <section className="w-full py-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 border border-zinc-800 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 text-zinc-400">
            {t("badge")}
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-8">
            {t("title")}
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* CTA Box */}
        <div className="p-8 mx-auto bg-zinc-900/30 border border-zinc-800 rounded-2xl max-w-sm">
          <h4 className="text-lg mb-2">{t("ctaTitle")}</h4>
          <p className="text-sm text-zinc-500 mb-6">{t("ctaDesc")}</p>
          <Link href="/contact">
            <button className="w-full py-3 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </div>

      {/* Services List */}
      <div className="mt-12">
        {serviceKeys.map((key, index) => (
          <ServiceItem
            key={key}
            id={key}
            index={index}
            item={t.raw(`items.${key}`)}
          />
        ))}
      </div>
    </section>
  );
}
