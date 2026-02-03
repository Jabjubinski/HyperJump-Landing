"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
      >
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-serif italic text-white">
              Transmission
            </h2>
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              Direct_Channel_Active
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <X size={20} className="text-zinc-500" />
          </button>
        </div>

        <form className="space-y-6 relative z-10">
          <div className="space-y-1">
            <label className="font-mono text-[9px] uppercase text-zinc-500 ml-1">
              Identity
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-[9px] uppercase text-zinc-500 ml-1">
              Frequency
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-[9px] uppercase text-zinc-500 ml-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Brief your project..."
              className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            />
          </div>

          <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-lg transition-all active:scale-[0.98]">
            Send_Signal
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
