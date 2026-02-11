import { motion } from "framer-motion";

export default function AmbientBackground({ step }) {
  const gradients = [
    "radial-gradient(circle at 20% 20%, #1a1a24, #0f0f14)",
    "radial-gradient(circle at 30% 30%, #2a1f35, #0f0f14)",
    "radial-gradient(circle at 50% 50%, #3a2448, #0f0f14)",
    "radial-gradient(circle at 50% 50%, #5a2d6f, #0f0f14)",
    "radial-gradient(circle at 50% 50%, #7a3f94, #0f0f14)",
  ];

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: gradients[step],
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
