"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const Contact = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    setPosition({ x: dx * 0.3, y: dy * 0.3 });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen  pt-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-stone-200 pb-6 mb-12">
          <span className="tracking-widest uppercase text-xs font-sans font-semibold">
            Get in Touch
          </span>
          <h1 className="tracking-tight text-5xl md:text-7xl  font-light mt-2">
            Contact
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[#c0c0c0] text-sm uppercase tracking-widest mb-4 font-semibold">
              Email
            </h2>
            <a
              href="mailto:hello@HYPERJUMP.com"
              className=" text-2xl font-light hover:text-stone-300 transition-colors"
            >
              hyperjump211@gmail.com
            </a>
          </div>
          <div>
            <h2 className="text-[#c0c0c0]  text-sm uppercase tracking-widest mb-4 font-semibold">
              Phone
            </h2>
            <span className=" text-2xl font-light hover:text-stone-300 transition-colors">
              +995 595 33 93 91
            </span>
          </div>

          <div>
            <h2 className="text-[#c0c0c0]  text-sm uppercase tracking-widest mb-4 font-semibold">
              Social
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.instagram.com/hyperjumpweb/"
                className=" text-2xl font-light hover:text-stone-300 transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className=" rounded-2xl p-8 md:p-12">
          <h2 className=" text-3xl font-light mb-8">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label className="text-[#c0c0c0]  text-sm uppercase tracking-widest mb-2 block">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-[#c0c0c0]/30 rounded-lg px-4 py-3  focus:outline-none focus:border-stone-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-[#c0c0c0]  text-sm uppercase tracking-widest mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full  border border-[#c0c0c0]/30 rounded-lg px-4 py-3  focus:outline-none focus:border-stone-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-[#c0c0c0]  text-sm uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full  border border-[#c0c0c0]/30 rounded-lg px-4 py-3  focus:outline-none focus:border-stone-500 transition-colors resize-none"
              />
            </div>

            <div onMouseMove={handleMouseMove} onMouseLeave={resetPosition}>
              <button
                ref={buttonRef}
                type="submit"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className="px-8 py-3 bg-white text-[#191919] rounded-2xl font-mono text-sm tracking-wide hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
