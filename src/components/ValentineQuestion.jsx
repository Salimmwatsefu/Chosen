import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Section from "./Section";

export default function ValentineQuestion({ next }) {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [noBtnText, setNoBtnText] = useState("No");
  const noBtnRef = useRef(null);

  // Taunts when she tries to click No
  const taunts = [
    "Nice try!", 
    "Too slow!", 
    "Nope!", 
    "Catch me!", 
    "Really?", 
    "Try again :P"
  ];

  function handleYes() {
    // 1. CONFETTI EXPLOSION
    const duration = 3000;
    const end = Date.now() + duration;
    
    // Heart Burst
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFC0CB', '#FF69B4', '#FFD700'], 
      shapes: ['heart'],
      scalar: 2 
    });

    // Glitter Rain
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC0CB', '#FFD700'],
        ticks: 300, 
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC0CB', '#FFD700'],
        ticks: 300, 
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // 2. DELAY NEXT STEP
    setTimeout(() => {
        next();
    }, 2000);
  }

  // The Runaway Logic
  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Random X between -100 and 100
    const y = Math.random() * 200 - 100; // Random Y between -100 and 100
    
    setNoBtnPosition({ x, y });
    setNoBtnText(taunts[Math.floor(Math.random() * taunts.length)]);
  };

  return (
    <Section>
      <motion.div 
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm tracking-widest text-rose-300/70 uppercase mb-8">
          The Important Question
        </p>

        <h2 className="text-4xl md:text-6xl font-romantic text-white leading-tight mb-12">
          Will you be my Valentine, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200 animate-pulse italic">
            Bambi?
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative h-32">
          {/* YES BUTTON */}
          <motion.button
            onClick={handleYes}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 105, 180, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-xl font-romantic font-bold shadow-2xl transition-all z-20 hover:from-rose-400 hover:to-pink-500"
          >
            Yes, I will! ❤️
          </motion.button>

          {/* NO BUTTON (RUNAWAY) */}
          <motion.button
            ref={noBtnRef}
            onMouseEnter={moveNoButton} // Desktop: Runs when mouse gets close
            onTouchStart={moveNoButton} // Mobile: Runs instant finger touches screen
            onClick={moveNoButton}      // Fallback
            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-10 py-4 bg-white/10 text-white/50 rounded-full text-lg font-romantic border border-white/10 hover:bg-white/20 transition-colors z-10"
          >
            {noBtnText}
          </motion.button>
        </div>
      </motion.div>
    </Section>
  );
}