"use client";

import React from "react";
import { Link } from "@/app/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t border-stone-200/10 pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Top Section: Branding & Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 pb-24 relative z-10">
        {/* Brand Mission */}
        <div className="lg:w-1/3">
          <h2 className="font-(family-name:--font-instrument-serif) italic text-4xl text-white mb-6 uppercase">
            HYPERJUMP
          </h2>
          <p className="text-[#c0c0c0] text-sm leading-relaxed max-w-xs">
            {t("mission")}
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Column 1: Sitemap */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-[0.3em]">
              {t("sitemap")}
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[#c0c0c0]">
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                <Link href="/#work">{t("links.work")}</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                <Link href="/contact">{t("links.contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.3em]">
              {t("socials")}
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[#c0c0c0]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/hyperjumpweb/"
                className="hover:text-white transition-colors cursor-pointer w-fit"
              >
                Instagram
              </a>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-[0.3em]">
              {t("legal")}
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[#c0c0c0]">
              <a href="/" className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("links.privacy")}
              </a>
              <a href="/" className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("links.terms")}
              </a>
              <a href="/" className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("links.cookies")}
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Background Brand Text */}
      <div className="relative h-24 md:h-48 flex items-center justify-center select-none pointer-events-none">
        <h2 className="text-[15vw] font-(family-name:--font-instrument-serif) italic text-white/[0.03] leading-none translate-y-1/4">
          HYPERJUMP
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            System Online
          </span>
        </div>

        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-center md:text-right">
          &copy; {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
