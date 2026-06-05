import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SmokeBackground } from "@/src/components/ui/spooky-smoke-animation";

export default function LiquidBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Global WebGL Smoke Background */}
      <div className="absolute inset-0 opacity-65 pointer-events-none">
        <SmokeBackground smokeColor="#3b82f6" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Primary Glows - More subtle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
        }}
      />

      {/* Grid Pattern Mesh - Extremely subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
    </div>
  );
}
