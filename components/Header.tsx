"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Circle, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
  };

  const resetPosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-[100]">
        <Link
          href="/"
          className={clsx(
            "group flex text-xl md:text-2xl font-(family-name:--font-instrument-serif) italic transition-colors duration-500",
            isOpen ? "text-white" : "text-zinc-200",
          )}
        >
          {"HyperJump".split("").map((char, i) => (
            <span
              key={i}
              className="relative group-hover:-translate-y-1 transition-transform duration-300"
            >
              {char}
            </span>
          ))}
        </Link>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetPosition}
          className="relative"
        >
          <motion.button
            ref={buttonRef}
            style={{ x: springX, y: springY }}
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "relative z-[110] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all duration-500 backdrop-blur-md border",
              isOpen
                ? "bg-white border-white text-black rotate-90"
                : "bg-white/10 border-white/20 text-white",
            )}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* <Circle size={18} fill="currentColor" /> */}
                    <Menu size={18} fill="currentColor" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
            className="fixed inset-0 h-dvh bg-[#0a0a0a] z-[90] flex flex-col md:flex-row overflow-hidden"
          >
            <div className="order-2 md:order-1 flex w-full md:w-1/3 border-t md:border-t-0 md:border-r border-white/5 flex-col justify-end p-8 md:p-20">
              <div className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] space-y-4">
                <div className="flex justify-between md:block md:space-y-4">
                  <p>Based in Tbilisi</p>
                  <p>Available for 2026</p>
                </div>
                <div className="pt-4 md:pt-8">
                  <p className="mb-2 text-zinc-400">Socials</p>
                  <ul className="flex gap-4 md:block md:space-y-1 lowercase">
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Instagram
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      LinkedIn
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 w-full md:w-2/3 flex items-center justify-center md:justify-start p-8 md:pl-20 h-full">
              <ul className="flex flex-col gap-2 md:gap-4">
                {navLinks.map((link, idx) => {
                  const nameLower = link.name.toLowerCase();
                  const isPageRoute = ["about", "contact"].includes(nameLower);
                  const finalHref = isPageRoute
                    ? link.href
                    : nameLower === "home"
                      ? "/"
                      : `/#${nameLower}`;

                  return (
                    <motion.li
                      key={link.name}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2 + idx * 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      <Link
                        href={finalHref}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-4 md:gap-6 text-5xl sm:text-7xl md:text-8xl text-white font-(family-name:--font-instrument-serif) italic hover:translate-x-2 md:hover:translate-x-0 md:hover:pl-8 transition-all duration-500"
                      >
                        <span className="text-[10px] md:text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 -bottom-1 md:-bottom-2 w-0 h-0.5 md:h-1 bg-white group-hover:w-full transition-all duration-500" />
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
