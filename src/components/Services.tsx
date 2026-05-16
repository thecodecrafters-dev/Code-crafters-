import { motion } from "motion/react";
import { 
  Monitor, 
  Smartphone, 
  ShoppingBag, 
  Layers, 
  Palette, 
  RefreshCcw,
  Zap
} from "lucide-react";

const services = [
  {
    icon: <Monitor />,
    title: "Responsive Business Websites",
    desc: "Complete digital presence tailored for your enterprise growth.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Zap />,
    title: "High-Converting Landing Pages",
    desc: "Turn visitors into customers with conversion-focused design.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: <Layers />,
    title: "Portfolio & Personal Sites",
    desc: "Stand out with a creative and interactive personal brand.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <ShoppingBag />,
    title: "E-Commerce Development",
    desc: "Powerful Shopify and custom online stores built to scale.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: <Palette />,
    title: "UI/UX Design Systems",
    desc: "Cinematic interfaces and robust design systems.",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: <RefreshCcw />,
    title: "Website Redesign",
    desc: "Modernize your legacy site with fresh aesthetic and performance.",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative bg-black/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6"
        >
          <div className="max-w-2xl overflow-hidden">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] mb-6"
            >
              Capabilities
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="text-3xl md:text-7xl font-display font-medium leading-none tracking-tight"
            >
              Excellence in <br />
              Digital solutions.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
              }}
              whileHover={{ y: -5 }}
              className="group relative p-12 border-r border-b border-white/10 bg-white/[0.01] backdrop-blur-xl hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[80px] -z-0`} />
              
              {/* Corner accent light */}
              <div className="absolute top-0 right-0 w-[1px] h-0 group-hover:h-20 bg-gradient-to-b from-white/40 to-transparent transition-all duration-700" />
              <div className="absolute top-0 right-0 h-[1px] w-0 group-hover:w-20 bg-gradient-to-l from-white/40 to-transparent transition-all duration-700" />

              <div className="relative z-10">
                <div className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-500 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-white/30 group-hover:text-white/50 leading-relaxed font-light text-sm transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
