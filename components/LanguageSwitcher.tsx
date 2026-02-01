"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../app/i18n/routing";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { id: "en", label: "EN" },
    { id: "ka", label: "GEO" },
  ];

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-4 mr-6">
      {locales.map((l) => (
        <button
          key={l.id}
          onClick={() => handleSwitch(l.id)}
          className={`relative text-[10px] md:text-xs font-mono tracking-widest transition-colors duration-300 ${
            locale === l.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {l.label}
          {locale === l.id && (
            <motion.div
              layoutId="activeLocale"
              className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
