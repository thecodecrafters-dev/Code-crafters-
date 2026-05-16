import React from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      className={`flex items-center gap-2 md:gap-4 ${className}`}
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0.8, rotate: -10 },
          show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
        }}
        className="relative group"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        >
          {/* Main Ring - Minimal & Precise */}
          <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/40 transition-colors duration-700" />
          
          {/* Inner Accent Ring - Subtle Pulse */}
          <div className="absolute inset-[4px] md:inset-[6px] border border-white/5 rounded-full" />
          
          {/* CC Emblem - High-end Geometric Minimalist */}
          <div className="relative flex items-center justify-center translate-x-[0.5px]">
            <span className="text-[18px] md:text-[22px] font-display font-medium tracking-[-0.15em] text-white leading-none">
              C
            </span>
            <span className="text-[17px] md:text-[21px] font-display font-extralight tracking-[-0.15em] text-white/20 -ml-[4px] md:-ml-[5px] leading-none">
              C
            </span>
          </div>

          {/* Premium Ambient Glow */}
          <div className="absolute inset-2 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
        
        {/* Detail Dot */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 0.6, transition: { delay: 0.5 } }
          }}
          className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full" 
        />
      </motion.div>
      
      <div className="flex flex-col select-none">
        <div className="flex items-center overflow-hidden">
          <motion.span 
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-[14px] md:text-[18px] font-display font-medium tracking-[0.1em] text-white uppercase leading-none"
          >
            Code
          </motion.span>
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              show: { scaleX: 1, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="w-1.5 md:w-3 h-[1px] bg-white/20 mx-1.5 md:mx-3 origin-left" 
          />
          <motion.span 
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-[14px] md:text-[18px] font-display font-extralight tracking-[0.25em] text-white/40 uppercase leading-none"
          >
            Crafters
          </motion.span>
        </div>
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -10 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }
          }}
          className="hidden sm:flex items-center gap-2 mt-1.5"
        >
          <div className="h-[0.5px] flex-1 bg-white/10" />
          <span className="text-[7px] uppercase tracking-[0.6em] text-white/20 font-bold">Digital Agency</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
