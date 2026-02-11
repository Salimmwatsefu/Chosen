import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const lines = [
  "The right things feel easy.",
  "The right words feel honest.",
  "And the right person feels like peace.",
];

export default function ExperienceSection({ next }) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index < lines.length - 1) {
      setIndex(index + 1);
    } else {
      next();
    }
  }

  return (
    <Section>
      <motion.p
        key={index}
        className="text-2xl md:text-4xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {lines[index]}
      </motion.p>

      <motion.button
        onClick={handleNext}
        whileTap={{ scale: 0.97 }}
        className="mt-12 px-8 py-4 rounded-full border border-white/20 text-lg"
      >
        Continue
      </motion.button>
    </Section>
  );
}
