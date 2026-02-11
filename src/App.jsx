import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AmbientBackground from "./components/AmbientBackground";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import RevealSection from "./components/RevealSection";
import ValentineQuestion from "./components/ValentineQuestion";
import FinalState from "./components/FinalState";

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AmbientBackground step={step} />

      <main className="relative z-10 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            {step === 0 && <IntroSection next={() => setStep(1)} />}
            {step === 1 && <ExperienceSection next={() => setStep(2)} />}
            {step === 2 && <RevealSection next={() => setStep(3)} />}
            {step === 3 && <ValentineQuestion next={() => setStep(4)} />}
            {step === 4 && <FinalState />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
