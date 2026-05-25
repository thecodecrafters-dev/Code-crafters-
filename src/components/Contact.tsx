import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, CheckCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Capture form data immediately before any async delay
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Simulate a brief delay for professionalism
    await new Promise(resolve => setTimeout(resolve, 1500));

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const pkg = formData.get("package");
    const logo = formData.get("logo");
    const maintenance = formData.get("maintenance");
    const message = formData.get("message");
    
    const whatsappMessage = `*New Inquiry from Code Crafters Website*%0A%0A*Name:* ${encodeURIComponent(name as string)}%0A*Email:* ${encodeURIComponent(email as string)}%0A*Phone:* ${encodeURIComponent(phone as string)}%0A*Package:* ${encodeURIComponent(pkg as string)}%0A*Logo Design:* ${encodeURIComponent(logo as string)}%0A*Maintenance:* ${encodeURIComponent(maintenance as string)}%0A*Requirements:* ${encodeURIComponent(message as string)}`;
    const url = `https://wa.me/917993860843?text=${whatsappMessage}`;
    
    setWhatsappUrl(url);
    setIsSubmitting(false);
    setIsSent(true);
    
    // Attempt automatic redirect (might be blocked, so we provide a manual button too)
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-black/55 backdrop-blur-md border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Connect</p>
            <h2 className="text-3xl md:text-7xl font-display font-medium tracking-tight mb-12">Let's talk <br /><span className="opacity-40">strategy.</span></h2>
            
            <div className="space-y-12 mb-16">
              {[
                { label: "Email", value: "code.crafters018@gmail.com", href: "mailto:code.crafters018@gmail.com" },
                { label: "Phone & WhatsApp", value: "+91 7993860843", href: "https://wa.me/917993860843" },
                { label: "Base", value: "India", href: null }
              ].map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                  className="flex flex-col gap-2"
                >
                  <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-2xl font-light hover:text-accent transition-colors cursor-pointer w-fit block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-2xl font-light hover:text-accent transition-colors cursor-pointer w-fit">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-8">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-white/20 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
           className="p-8 md:p-16 rounded-[40px] border border-white/5 bg-black/40 backdrop-blur-sm relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="hello@example.com" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91 00000 00000" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Package Selection</label>
                    <div className="relative">
                      <select 
                        name="package"
                        required
                        defaultValue=""
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white/60 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-black">Select a package</option>
                        <option value="Basic" className="bg-black">Basic (₹6k - ₹10k)</option>
                        <option value="Business" className="bg-black">Business (₹14k - ₹18k)</option>
                        <option value="Premium" className="bg-black">Premium (₹25k - ₹35k)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Logo Design (+ ₹2k)</label>
                    <div className="relative">
                      <select 
                        name="logo"
                        required
                        defaultValue="No"
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white/60 appearance-none cursor-pointer"
                      >
                        <option value="No" className="bg-black">No, I have my own logo</option>
                        <option value="Yes" className="bg-black">Yes, please design a logo</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Maintenance Plan</label>
                    <div className="relative">
                      <select 
                        name="maintenance"
                        required
                        defaultValue="None"
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 font-light text-white/60 appearance-none cursor-pointer"
                      >
                        <option value="None" className="bg-black">No Maintenance</option>
                        <option value="Premium Maintenance (₹3,500/mo)" className="bg-black">Premium Maintenance (₹3,500/mo)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Project Requirements</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder="Briefly describe your goals, desired features, and references..." 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white focus:outline-none focus:shadow-[0_4px_20px_-10px_rgba(255,255,255,0.2)] transition-all duration-300 resize-none font-light text-white"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-6 rounded-xl font-bold uppercase text-xs tracking-[0.2em] transition-all duration-500",
                    isSubmitting ? "bg-white/10 text-white/40 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"
                  )}
                >
                  {isSubmitting ? "Processing..." : "Send Inquiry"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="w-10 h-10 text-accent animate-pulse" />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4">Inquiry sent!</h3>
                <p className="text-white/40 font-light max-w-xs mx-auto mb-10">
                  Your inquiry has been received. We will contact you within 24 business hours. In the meantime, feel free to <a href="#services" className="text-accent hover:underline">explore our services page</a>.
                </p>
                
                <div className="flex flex-col gap-4 w-full">
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2"
                  >
                    Open WhatsApp
                  </motion.a>
                  
                  <motion.button
                    whileHover={{ opacity: 0.8 }}
                    onClick={() => setIsSent(false)}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 py-4"
                  >
                    Go Back / Edit Inquiry
                  </motion.button>
                </div>

                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                  className="mt-12 h-[1px] bg-accent/50 w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>

  );
}
