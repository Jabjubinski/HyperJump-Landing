"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "@/utils/lenis";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./footer";
import Cursor from "./Cursor";
import ContactCapsule from "./ContactCapsule";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This matches the time it takes for our Preloader counter
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      {/* <Cursor /> */}

      <div className="noise-overlay" />
      <ContactCapsule />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
        <Footer />
      </motion.main>
    </ReactLenis>
  );
}
