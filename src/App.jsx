import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AmbientBackground from "./components/AmbientBackground";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import RevealSection from "./components/RevealSection";
import ValentineQuestion from "./components/ValentineQuestion";
import DateRequest from "./components/DateRequest"; // Ensure this is imported
import FinalState from "./components/FinalState";

export default function App() {
  const [step, setStep] = useState(0);
  const [giftChoice, setGiftChoice] = useState(null); // This is the missing link!

  return (
    <div className="relative h-screen w-full overflow-hidden text-white selection:bg-rose-500/30">
      <AmbientBackground />

      <main className="relative z-10 h-full w-full font-romantic">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="h-full w-full"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
          >
            {step === 0 && <IntroSection next={() => setStep(1)} />}
            
            {/* PASS THE SETTER SO SHE CAN CHOOSE */}
            {step === 1 && (
              <ExperienceSection 
                next={() => setStep(2)} 
                setGiftChoice={setGiftChoice} 
              />
            )}
            
            {/* PASS THE CHOICE SO IT KNOWS WHAT POEM TO PLAY */}
            {step === 2 && (
              <RevealSection 
                next={() => setStep(3)} 
                giftChoice={giftChoice} 
              />
            )}
            
            {step === 3 && <ValentineQuestion next={() => setStep(4)} />}
            
            {/* PASS THE CHOICE FOR THE SECRET CODE */}
            {step === 4 && (
              <DateRequest 
                next={() => setStep(5)} 
                giftChoice={giftChoice} 
              />
            )}
            
            {step === 5 && <FinalState />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}