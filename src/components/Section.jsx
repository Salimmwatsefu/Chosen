import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6 overflow-hidden relative">
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center relative z-20"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(5px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}