import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Plus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "₹6,000",
    range: "– ₹10,000",
    desc: "Perfect for small businesses, shops, and individuals who want to establish a simple but professional online presence.",
    bestFor: "Local shops, freelancers, small services, individuals",
    features: [
      "Up to 3 pages (Home, About, Contact)",
      "Clean and modern design",
      "Mobile responsive — looks great on all devices",
      "WhatsApp button — customers contact you instantly",
      "Contact form — receive inquiries directly",
      "Google Maps integration — customers find you easily",
      "Basic SEO — shows up on Google search",
      "Free Hosting",
      "SSL Certificate — secure website (https)",
      "Delivery in 2–3 days",
    ],
    tagline: "A great starting point for any business going online for the first time.",
    recommended: false,
  },
  {
    name: "Business",
    price: "₹14,000",
    range: "– ₹18,000",
    desc: "Designed for growing businesses that need more than just a basic online presence — a complete digital identity that attracts and converts customers.",
    bestFor: "Restaurants, salons, clinics, coaching centers, local brands",
    features: [
      "Up to 6 pages",
      "Premium modern design",
      "Mobile responsive design",
      "WhatsApp order integration",
      "Google Business profile setup",
      "Photo gallery",
      "Appointment/order form",
      "Social media integration",
      "Basic SEO",
      "Free Hosting",
      "SSL Certificate — secure website (https)",
      "1 Year Free Domain",
      "1 month free support",
      "Delivery in 3–4 days",
    ],
    tagline: "Everything your growing business needs to stand out and succeed online.",
    recommended: true,
  },
  {
    name: "Premium",
    price: "₹25,000",
    range: "– ₹35,000",
    desc: "Built for businesses ready to sell online and scale. A fully loaded e-commerce store that runs your business digitally — 24 hours a day, 7 days a week.",
    bestFor: "Fashion brands, large restaurants, retail stores, businesses ready to sell online",
    features: [
      "Full e-commerce store",
      "Unlimited products",
      "Razorpay/UPI payment integration",
      "Order management dashboard",
      "Admin panel",
      "Mobile responsive design",
      "Advanced SEO",
      "Speed optimization",
      "Security monitoring",
      "Free Hosting",
      "SSL Certificate — secure website (https)",
      "1 Year Free Domain",
      "3 months free support",
      "Delivery in 5–6 days",
    ],
    tagline: "Your store. Your rules. Online and always open.",
    recommended: false,
  },
];

const smallPackages = [
  { name: "Premium Maintenance", price: "₹3,500", period: "/mo" },
  { name: "Logo & Identity Design", price: "₹2k", period: " Flat" },
];

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 px-6 relative bg-black/50 backdrop-blur-md border-b border-white/[0.03] overflow-hidden">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-32"
        >
          {plans.map((plan, i) => {
            const halfLength = Math.ceil(plan.features.length / 2);
            return (
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
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
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
                    className="mb-8"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                      {plan.recommended && (
                        <span className="px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest bg-white/10 text-white/95 border border-white/10">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-4">
                      Best for: <span className="text-white/60 font-medium font-sans normal-case">{plan.bestFor}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{plan.desc}</p>
                  </motion.div>

                  <motion.div 
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    className="flex items-baseline gap-1 mb-8 overflow-hidden group/price bg-white/[0.01]/30 border border-white/5 p-4 rounded-2xl"
                  >
                    <span className="text-4xl font-display font-medium tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-white/20 font-light text-xl tracking-tighter group-hover/price:translate-x-1 transition-transform duration-500">{plan.range}</span>
                  </motion.div>

                  <div className="flex flex-col gap-4 flex-grow justify-start">
                    {plan.features.slice(0, halfLength).map((feature, j) => (
                      <motion.div 
                        key={j} 
                        variants={{ hidden: { opacity: 0, x: -5 }, show: { opacity: 1, x: 0 } }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white/10 mt-0.5 group-hover/item:text-accent group-hover/item:scale-125 transition-all duration-300" />
                        </div>
                        <span className="text-sm text-white/40 font-light group-hover/item:text-white/70 transition-colors">{feature}</span>
                      </motion.div>
                    ))}

                    <motion.div
                      initial="collapsed"
                      animate={hoveredCard === i ? "open" : "collapsed"}
                      variants={{
                        open: { 
                          opacity: 1, 
                          height: "auto",
                          marginTop: 4,
                          transition: { 
                            height: { duration: 0.35, ease: "easeOut" },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }
                        },
                        collapsed: { 
                          opacity: 0, 
                          height: 0,
                          marginTop: 0,
                          transition: { 
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.15 }
                          }
                        }
                      }}
                      className="overflow-hidden flex flex-col gap-4"
                    >
                      {plan.features.slice(halfLength).map((feature, j) => (
                        <div 
                          key={j + halfLength} 
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white/10 mt-0.5 group-hover/item:text-accent group-hover/item:scale-125 transition-all duration-300" />
                          </div>
                          <span className="text-sm text-white/40 font-light group-hover/item:text-white/70 transition-colors">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    {hoveredCard !== i && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-[#06b6d4] font-bold uppercase tracking-wider pt-2 flex items-center gap-1.5 select-none animate-pulse"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Hover to reveal {plan.features.length - halfLength} more features</span>
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-white/35 font-light italic leading-relaxed">
                      "{plan.tagline}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
