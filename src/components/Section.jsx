import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-md mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
