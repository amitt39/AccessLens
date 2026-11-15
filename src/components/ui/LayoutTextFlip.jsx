("use client");
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export default function LayoutTextFlip({
  text = "Make Your Website",
  words = ["Accessible.", "Inclusive.", "Usable."],
  duration = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
      <motion.span
        layoutId="subtext"
        className="text-5xl font-bold tracking-tight text-[#14201a] drop-shadow-lg md:text-7xl"
      >
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative inline-block overflow-hidden rounded-md border border-transparent bg-[#14201a] px-4 py-2 font-sans text-5xl font-bold tracking-tight text-white shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-7xl"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
}
