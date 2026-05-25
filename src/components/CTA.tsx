import { motion } from "motion/react";
import { Sparkles, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 relative bg-black/40 backdrop-blur-md border-b border-white/[0.03] overflow-hidden group">
      {/* Background atmospheric light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10 group-hover:bg-accent/10 transition-colors duration-1000" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.98, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
           className="relative p-16 md:p-32 rounded-[40px] md:rounded-[60px] border border-white/5 overflow-hidden text-center bg-white/[0.01] backdrop-blur-3xl"
        >
          {/* Subtle Glow & Noise */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent -z-10" />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">Project Intake Open</span>
              <div className="w-12 h-[1px] bg-white/20" />
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-display font-medium mb-10 leading-none tracking-tighter">
              Let's create the <br />
              <span className="opacity-40 text-glow">extraordinary.</span>
            </h2>
            
            <p className="text-white/30 text-lg md:text-xl max-w-2xl mb-16 font-light leading-relaxed">
              We're currently accepting new projects for Q3 2026. 
              Limited slots available for high-tier partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 rounded-full bg-white text-black font-bold uppercase text-[10px] tracking-[0.25em] transition-all overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Inquire Now</span>
                <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 rounded-full border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.25em] hover:bg-white/5 hover:border-white/20 transition-all"
              >
                View Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
