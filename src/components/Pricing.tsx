import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "₹6,000",
    range: "- ₹10,000",
    desc: "Just getting started? Clean, professional, and built for a great first impression.",
    features: [
      "Up to 3 Pages",
      "Mobile Responsive Design",
      "WhatsApp Integration",
      "Contact Form & Google Maps",
      "Basic SEO Setup",
      "Delivery in 2–3 Days",
    ],
    recommended: false,
  },
  {
    name: "Business",
    price: "₹14,000",
    range: "- ₹18,000",
    desc: "Ready to grow? A powerful site to stay ahead of the competition.",
    features: [
      "Up to 6 Pages",
      "WhatsApp Order Integration",
      "Photo Gallery & Forms",
      "Social Media Integration",
      "1 Month Free Support",
      "Delivery in 3–4 Days",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    price: "₹25,000",
    range: "- ₹35,000",
    desc: "Fully loaded e-commerce store that works for you 24/7.",
    features: [
      "Full E-commerce Store",
      "Razorpay/UPI Integration",
      "Order Dashboard & Admin Panel",
      "Advanced SEO & Speed Optimization",
      "3 Months Free Support",
      "Delivery in 5–6 Days",
    ],
    recommended: false,
  },
];

const smallPackages = [
  { name: "Premium Maintenance", price: "₹3,500", period: "/mo" },
  { name: "Logo & Identity Design", price: "₹2k", period: " Flat" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic atmospheric glows */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] -z-10 animate-float" />
      <div className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -z-10 animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] mb-6"
          >
            Investment
          </motion.div>
          <h2 className="text-3xl md:text-7xl font-display font-medium tracking-tight mb-8">Strictly tailored <br /><span className="opacity-40">for your success.</span></h2>
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">No generic solutions. We build high-performance assets that scale with your ambitions.</p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 1, 
                    ease: [0.23, 1, 0.32, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.3
                  } 
                },
              }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative group flex flex-col p-[1px] bg-gradient-to-b from-white/10 via-white/[0.05] to-transparent rounded-[32px] transition-all duration-700 hover:from-white/20 hover:scale-[1.01] overflow-hidden",
                plan.recommended && "from-accent/30 hover:from-accent/50"
              )}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="bg-[#050505]/40 backdrop-blur-3xl p-8 md:p-12 rounded-[31px] flex flex-col h-full border border-white/5 group-hover:bg-white/[0.05] transition-all duration-700">
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{plan.desc}</p>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-baseline gap-1 mb-10 overflow-hidden group/price"
                >
                  <span className="text-5xl font-display font-medium tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-white/20 font-light text-2xl tracking-tighter group-hover/price:translate-x-1 transition-transform duration-500">{plan.range}</span>
                </motion.div>

                <div className="flex flex-col gap-5 flex-grow">
                  {plan.features.map((feature, j) => (
                    <motion.div 
                      key={j} 
                      variants={{ hidden: { opacity: 0, x: -5 }, show: { opacity: 1, x: 0 } }}
                      className="flex items-start gap-4 group/item"
                    >
                      <Check className="w-4 h-4 text-white/10 mt-0.5 group-hover/item:text-accent group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-sm text-white/40 font-light group-hover/item:text-white/70 transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Maintenance & Additional Services */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {smallPackages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
              }}
              className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl flex justify-between items-center group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">{pkg.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-medium tracking-tight">{pkg.price}</span>
                  <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{pkg.period}</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/10">
                <Check className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
