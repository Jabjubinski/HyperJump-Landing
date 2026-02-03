"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ContactCapsule() {
  const t = useTranslations("Capsule");
  const tc = useTranslations("Contact"); // Pulling from your Contact page keys
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[90]">
        <MagneticButton>
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white text-black rounded-full shadow-2xl transition-transform"
          >
            <MessageSquare size={24} fill="currentColor" />
          </motion.button>
        </MagneticButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full max-w-xl bg-[#0a0a0a] border-l border-white/10 p-8 md:p-16 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-start mb-20">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500">
                      {t("status")}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif italic text-white tracking-tighter">
                      {tc("title")}
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="group p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form className="space-y-12">
                  <div className="group relative">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 mb-2 block tracking-widest group-focus-within:text-emerald-500 transition-colors">
                      {tc("inputName")}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="group relative">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 mb-2 block tracking-widest group-focus-within:text-emerald-500 transition-colors">
                      {tc("inputEmail")}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="group relative">
                    <label className="font-mono text-[10px] uppercase text-zinc-500 mb-2 block tracking-widest group-focus-within:text-emerald-500 transition-colors">
                      {tc("inputMessage")}
                    </label>
                    <textarea
                      rows={1}
                      className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button className="group flex items-center gap-4 text-2xl font-serif italic text-white hover:text-emerald-500 transition-colors pt-4">
                    {tc("button")}
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </button>
                </form>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5">
                <div className="grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  <div>
                    <p className="mb-4 text-zinc-700">Email</p>
                    <a
                      href="mailto:hello@hyperjump.web"
                      className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4"
                    >
                      hello@hyperjump.web
                    </a>
                  </div>
                  <div>
                    <p className="mb-4 text-zinc-700">Social</p>
                    <a
                      href="#"
                      className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-4 tracking-tighter"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
