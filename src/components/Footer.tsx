import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-6 relative border-t border-white/5 bg-[#030303] overflow-hidden">
      {/* Subtle footer glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/[0.03] rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          <div className="col-span-2">
            <motion.a 
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              href="#" 
              className="mb-8 block"
            >
              <Logo className="scale-110 origin-left" />
            </motion.a>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-white/30 max-w-sm text-lg leading-relaxed mb-8 font-light"
            >
              Crafting premium digital experiences for forward-thinking brands worldwide. 
              Efficiency, elegance, and technical excellence.
            </motion.p>
          </div>

          {[
            { title: "Connect", items: ["Twitter", "LinkedIn", "GitHub", "Instagram"] },
            { title: "Studio", items: ["Services", "Process", "Pricing", "Contact"] }
          ].map((column) => (
            <motion.div 
              key={column.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <h4 className="text-white/20 font-bold mb-8 uppercase text-[10px] tracking-[0.4em]">{column.title}</h4>
              <ul className="space-y-4">
                {column.items.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-white transition-all text-xs font-light tracking-wide hover:pl-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-green-500 font-bold">Systems Operational</span>
            </div>
          </div>

          <p className="text-white/20 text-[11px] tracking-[0.1em]">
            © {currentYear} Code Crafters Digital Agency. All rights reserved. 
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-light">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
