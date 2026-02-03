"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  value: string;
  className?: string;
}

export default function ScrollHighlight({ value, className }: Props) {
  const element = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p ref={element} className={`flex flex-wrap leading-tight ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative mr-3 lg:mr-5">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
