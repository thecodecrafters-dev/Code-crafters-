import { motion } from "motion/react";
import { Laptop, Cpu, Globe, Search, Layout, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Ubiquitous Presence",
    desc: "Architecting seamless, fluid experiences that adapt flawlessly across the global device landscape.",
    delay: 0.1,
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Technical Excellence",
    desc: "Engineered for speed with optimized core vitals and next-gen infrastructure for peak SEO performance.",
    delay: 0.2,
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Immersive Interactions",
    desc: "Crafting sensory UI journeys that resonate with users and elevate brand perception through motion.",
    delay: 0.3,
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Algorithmic Advantage",
    desc: "Strategic search engine integration designed to dominate visibility and drive organic growth.",
    delay: 0.4,
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Scalable Architecture",
    desc: "Robust, future-proof codebases built with enterprise-grade standards and maintainability.",
    delay: 0.5,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Dynamic Strategy",
    desc: "A mobile-centric methodology focused on conversion and accessibility at the highest level.",
    delay: 0.6,
  },
];

const stats = [
  { label: "Quality Assurance", value: "100%" },
  { label: "Customer Satisfaction", value: "Elite" },
  { label: "Scalability", value: "Next-Gen" },
  { label: "Code Quality", value: "100%" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-3xl md:text-7xl font-display font-medium tracking-tight mb-8"
          >
            The new standard <br />
            <span className="opacity-40">for global brands.</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-white/40 max-w-2xl text-lg font-light leading-relaxed"
          >
            We combine high-level design with deep technical expertise to deliver 
            websites that don't just look better—they perform better.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
              }}
              className="flex flex-col gap-6"
            >
              <div className="text-white/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
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
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-white/5 pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
              }}
              className="flex flex-col"
            >
              <p className="text-4xl md:text-5xl font-display font-medium mb-2">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
