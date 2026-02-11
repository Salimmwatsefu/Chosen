import { useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

export default function RevealSection({ next }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3500);

    return () => clearTimeout(timer);
  }, [next]);

  return (
    <Section>
      <motion.p
        className="text-2xl md:text-4xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        And sometimes…
      </motion.p>

      <motion.p
        className="text-2xl md:text-4xl leading-relaxed mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        you simply know.
      </motion.p>
    </Section>
  );
}
