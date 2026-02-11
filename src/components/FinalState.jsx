import { motion } from "framer-motion";
import Section from "./Section";

export default function FinalState() {
  return (
    <Section>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-2xl md:text-4xl">
          Good choice.
        </p>

        <p className="text-xl text-white/70 mt-6">
          I’m glad it’s you.
        </p>
      </motion.div>
    </Section>
  );
}
