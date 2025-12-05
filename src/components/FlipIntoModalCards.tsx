"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlipIntoModalCards() {
  const [selected, setSelected] = useState<number | null>(null);

  const cards = [
    { value: "12", label: "PENDING", bg: "bg-violet-700" },
    { value: "12", label: "BOOKING", bg: "bg-green-700" },
    { value: "8/9", label: "UNITS", bg: "bg-neutral-700" },
    { value: "3", label: "PROBLEMS", bg: "bg-orange-700" },
  ];

  return (
    <>
      <div className="grid grid-cols-6 gap-5 perspective-[2000px]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`}
            className={`aspect-square p-5 rounded-xl text-white flex flex-col justify-between cursor-pointer ${card.bg}`}
            onClick={() => setSelected(i)}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-4xl">{card.value}</div>
            <div>{card.label}</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Morphing card -> modal */}
            <motion.div
              layoutId={`card-${selected}`}
              className="fixed z-50 top-1/2 left-1/2 w-[80vw] max-w-lg h-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white text-black p-8 shadow-xl flex flex-col"
              style={{
                transformStyle: "preserve-3d",
              }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-2xl font-semibold mb-4">
                {cards[selected].label}
              </h1>

              <div className="text-neutral-600 flex-1">
                This is your modal content.  
                You can put anything here.
              </div>

              <button
                className="mt-6 bg-black text-white px-4 py-2 rounded-lg"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
