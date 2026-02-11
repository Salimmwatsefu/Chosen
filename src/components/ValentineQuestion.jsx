import { motion } from "framer-motion";
import Section from "./Section";

export default function ValentineQuestion({ next }) {
  return (
    <Section>
      <motion.p
        className="text-3xl md:text-5xl font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Will you be my Valentine?
      </motion.p>

      <div className="mt-12 flex flex-col gap-4">
        <motion.button
          onClick={next}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-full bg-white text-black text-lg font-medium"
        >
          Yes
        </motion.button>

        <motion.button
          onClick={next}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-full border border-white/30 text-lg"
        >
          Yes 🤍
        </motion.button>
      </div>
    </Section>
  );
}
