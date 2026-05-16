import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ChevronDown, CheckCircle2, Star, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, rotate: rotate1, opacity }}
        className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] bg-white/[0.02] border border-white/5 rounded-[40px] blur-sm -z-0 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2, rotate: rotate2, opacity }}
        className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-white/[0.01] border border-white/5 rounded-full blur-md -z-0 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y1, scale: 1.2, opacity }}
        className="absolute top-[40%] right-[10%] w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl -z-0 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center z-10 mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-8"
          >
            <span>Bespoke Digital Agency</span>
          </motion.div>
          
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight leading-[0.9] text-white"
            >
              We craft <br />
              <span className="opacity-40">digital future.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold uppercase text-[10px] tracking-widest transition-all shadow-lg"
            >
              Inquire Now
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 text-white font-bold uppercase text-[10px] tracking-widest transition-all"
            >
              Our Services
            </motion.button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light"
          >
            High-performance web experiences strictly designed for industry leaders. 
            No compromises. Just excellence.
          </motion.p>

          <div className="mt-20 flex flex-col items-center gap-4 opacity-20">
             <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
