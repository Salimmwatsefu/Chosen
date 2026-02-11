import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const options = [
  {
    id: 'MUSIC',
    title: "A Quiet Melody",
    desc: "Lost in your own world.",
    icon: "🎵",
    color: "from-blue-900/40 to-purple-900/40"
  },
  {
    id: 'HEELS',
    title: "The Spotlight",
    desc: "All eyes on you.",
    icon: "✨",
    color: "from-amber-900/40 to-yellow-900/40"
  },
  {
    id: 'DRESS',
    title: "Moonlight Dance",
    desc: "Elegance in motion.",
    icon: "🌙",
    color: "from-rose-900/40 to-pink-900/40"
  }
];

export default function ExperienceSection({ next, setGiftChoice }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    setGiftChoice(id); // THIS SAVES HER CHOICE TO THE APP
    
    // Wait for animation before going next
    setTimeout(() => {
        next();
    }, 2500);
  };

  return (
    <Section>
      <div className="w-full max-w-lg text-center relative min-h-[400px] flex flex-col justify-center">
        {/* Question fades out when selected */}
        <motion.h2 
          className="text-2xl md:text-3xl font-romantic text-white/90 mb-8 italic"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: selected ? 0 : 1, y: selected ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Close your eyes. <br/>
          Where does your heart take you?
        </motion.h2>

        <div className="grid gap-4 w-full px-4">
          {options.map((opt, index) => {
            const isSelected = selected === opt.id;
            const isOther = selected && !isSelected;

            return (
              <motion.button
                key={opt.id}
                onClick={() => !selected && handleSelect(opt.id)}
                disabled={!!selected}
                // Animation Logic
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                    opacity: isOther ? 0 : 1, 
                    x: isOther ? -50 : 0,
                    scale: isSelected ? 1.1 : 1
                }}
                transition={{ delay: isSelected ? 0 : index * 0.1, duration: 0.5 }}
                
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r ${opt.color} p-6 text-left transition-all hover:border-white/30`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl filter drop-shadow-lg">
                    {opt.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-romantic text-rose-100">
                      {opt.title}
                    </h3>
                    <p className="text-sm text-white/60 font-light mt-1">
                      {opt.desc}
                    </p>
                  </div>
                </div>

                {/* Confirmation Text (Only shows when clicked) */}
                {isSelected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                    >
                        <p className="text-white font-romantic text-lg italic tracking-widest">
                            "A beautiful choice..."
                        </p>
                    </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}