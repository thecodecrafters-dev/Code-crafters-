import { motion } from "motion/react";
import Logo from "./Logo";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative"
      >
        <Logo className="scale-[1.5] md:scale-[2]" />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[2px] bg-white/5 blur-sm pointer-events-none"
        />
      </motion.div>
      
      <div className="mt-24 w-48 h-[2px] bg-white/[0.03] relative overflow-hidden rounded-full shadow-[0_0_12px_rgba(255,255,255,0.15)]">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 1.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 0.3
          }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold mt-12"
      >
        Initializing Studio
      </motion.p>
    </motion.div>
  );
}
