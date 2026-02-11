import { motion } from "framer-motion";
import Section from "./Section";

export default function IntroSection({ next }) {
  return (
    <Section>
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-6"
        >
          <span className="text-xs md:text-sm tracking-[0.4em] text-rose-300/60 uppercase">
            For my favorite person
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-romantic text-white italic leading-tight">
          Hi 
          <span className="relative inline-block ml-4 text-rose-200 glow-text">
            Gloria
            {/* Underline drawn animation */}
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-[1px] bg-rose-400/50"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            />
          </span>
        </h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-white/60 font-light max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          I wanted to make something special. <br/>
          Just for you.
        </motion.p>

        <motion.button
          onClick={next}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 px-8 py-3 rounded-full border border-rose-200/20 text-rose-100 text-sm uppercase tracking-widest hover:bg-rose-500/10 hover:border-rose-200/50 transition-all duration-500"
        >
          Open
        </motion.button>
      </div>
    </Section>
  );
}