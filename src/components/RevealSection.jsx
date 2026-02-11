import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

export default function RevealSection({ next, giftChoice }) {
  const [index, setIndex] = useState(0);

  // The story chapters. 
  // We mix specific lines based on her choice with general deep romance.
  const genericLines = [
    "I often find myself wondering...",
    "How did I get so lucky?",
    "Every moment with you feels like a favorite song,",
    "Playing softly on repeat.",
    "You are my peace in the chaos.",
    "And my excitement in the quiet.",
  ];

  // Specific ending lines based on her "Vibe Choice"
  const closingLines = {
    'MUSIC': "You are the melody I never want to stop singing.",
    'HEELS': "You shine brighter than any spotlight ever could.",
    'DRESS': "You are the elegance that makes my world beautiful."
  };

  const lines = [
    ...genericLines,
    closingLines[giftChoice] || closingLines['DRESS'], // The personalized line
    "So I have a question..." // The transition
  ];

  const handleNext = () => {
    if (index < lines.length - 1) {
      setIndex(index + 1);
    } else {
      next();
    }
  };

  return (
    <Section>
      <div className="h-64 flex flex-col items-center justify-center max-w-2xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-2xl md:text-4xl font-romantic text-rose-100 leading-relaxed italic"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            {lines[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation Button */}
      <motion.button
        onClick={handleNext}
        className="mt-12 text-sm uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-2 cursor-pointer"
        whileTap={{ scale: 0.9 }}
      >
        {index < lines.length - 1 ? "Next" : "Ask Me"}
      </motion.button>
      
      {/* Progress Dots */}
      <div className="flex gap-2 mt-8">
        {lines.map((_, i) => (
          <div 
            key={i} 
            className={`w-1 h-1 rounded-full transition-all duration-500 ${i === index ? "bg-rose-400 w-3" : "bg-white/10"}`} 
          />
        ))}
      </div>
    </Section>
  );
}