import { motion } from "framer-motion";
import Section from "./Section";

export default function IntroSection({ next }) {
  return (
    <Section>
      <motion.p
        className="text-2xl md:text-5xl font-light leading-relaxed"
      >
        Some things don’t need to be rushed.
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-white/70 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Some things are worth choosing carefully.
      </motion.p>

      <motion.button
        onClick={next}
        whileTap={{ scale: 0.97 }}
        className="mt-12 px-8 py-4 rounded-full border border-white/20 active:border-white/40 text-lg"
      >
        Start
      </motion.button>
    </Section>
  );
}
