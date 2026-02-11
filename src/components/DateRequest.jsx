import { motion } from "framer-motion";
import Section from "./Section";

export default function DateRequest({ next, giftChoice }) {
  
  // Generate a secret code based on her choice
  // M = Music (Headphones), H = Heels, D = Dress
  const codeMap = {
    'MUSIC': 'M-01',
    'HEELS': 'H-02',
    'DRESS': 'D-03'
  };
  
  const reservationCode = `REF: ${codeMap[giftChoice] || 'G-00'}-14FEB`;

  return (
    <Section>
      <motion.div 
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="relative w-full max-w-sm bg-[#120508] border border-rose-900/30 p-8 rounded-xl shadow-2xl text-center"
      >
        {/* Gold Border Detail */}
        <div className="absolute inset-2 border border-rose-500/20 rounded-lg pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <p className="text-xs tracking-[0.3em] text-rose-300/50 uppercase">
            Official Invitation
          </p>

          <h3 className="text-3xl font-romantic italic text-rose-100">
            Dinner Date
          </h3>
          
          <div className="w-12 h-[1px] bg-rose-800/50 mx-auto my-4" />

          <div className="space-y-2">
            <p className="text-lg text-white font-light">
              February 14th
            </p>
            <p className="text-4xl font-romantic text-rose-400">
              8:00 PM
            </p>
          </div>

          <div className="pt-8 pb-4">
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-rose-900 to-rose-950 border border-rose-800/50 text-rose-100 rounded text-sm uppercase tracking-widest hover:border-rose-500/50 transition-all"
            >
              Accept Invitation
            </motion.button>
          </div>

          {/* SECRET CODE FOR YOU */}
          <div className="border-t border-white/5 pt-4 mt-4">
            <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">
              {reservationCode}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}