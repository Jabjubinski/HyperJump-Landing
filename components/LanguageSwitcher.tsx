"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../app/i18n/routing";
import { motion } from "framer-motion";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { id: "ka", label: "GEO" },
    { id: "en", label: "ENG" },
  ] as const;

  const handleSwitch = (newLocale: "en" | "ka") => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`flex gap-4 mr-6 ${isPending ? "opacity-70" : "opacity-100"} transition-opacity`}
    >
      {locales.map((l) => (
        <button
          key={l.id}
          disabled={isPending}
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
