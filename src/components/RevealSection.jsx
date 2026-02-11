import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

export default function RevealSection({ next, giftChoice }) {
  const [index, setIndex] = useState(0);

  // 1. MUSIC JOURNEY
  const musicLines = [
    "I often find myself listening...",
    "Not just to the songs playing,",
    "But to the quiet moments in between.",
    "Because that’s where I find you.",
    "Every beat of my heart,",
    "Finds its perfect rhythm in yours.",
    "You are the melody I never want to stop singing.",
    "So I have a question..."
  ];

  // 2. HEELS JOURNEY
  const heelsLines = [
    "I often find myself watching...",
    "Not the crowd around us,",
    "But the light that seems to follow you.",
    "You don't just walk into a room,",
    "You change the entire atmosphere.",
    "Brighter than any star in the sky,",
    "You shine brighter than any spotlight ever could.",
    "So I have a question..."
  ];

  // 3. DRESS JOURNEY
  const dressLines = [
    "I often find myself wondering...",
    "How someone can be so timeless.",
    "Like the moon pulls the tide,",
    "You pull me closer without even trying.",
    "Grace isn't just something you wear,",
    "It is woven into your very soul.",
    "You are the elegance that makes my world beautiful.",
    "So I have a question..."
  ];

  // Map choices to lines
  const linesMap = {
    'MUSIC': musicLines,
    'HEELS': heelsLines,
    'DRESS': dressLines
  };

  // Fallback to Dress if something fails
  const lines = linesMap[giftChoice] || dressLines;

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