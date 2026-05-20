import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuLinks = [
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "work", name: "Concept Work" },
    { id: "pricing", name: "Pricing" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Logo />
          </motion.a>

          {/* Dynamic Center Links */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {menuLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
  
          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <motion.button
              onClick={(e) => scrollToSection(e, "contact")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-5 md:px-8 py-2.5 rounded-full bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <span className="relative z-10">Inquire Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.button>

            {/* Mobile Burger Trigger */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full border border-white/10 hover:border-white/20 text-white transition-colors"
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-between p-8 pt-28"
          >
            {/* Background elements */}
            <div className="absolute top-[20%] left-[10%] w-[250px] h-[250px] bg-white/[0.01] border border-white/5 rounded-full blur-2xl -z-10" />
            
            <div className="flex flex-col gap-8">
              <span className="text-[9px] font-mono tracking-[0.3em] text-white/25 uppercase">Navigation menu</span>
              <div className="flex flex-col gap-6">
                {menuLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="text-4xl font-display font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-mono tracking-[0.2em] text-white/20 uppercase">Core Office</span>
                <span className="text-xs text-white/50">Mumbai, India</span>
              </div>
              <motion.button
                onClick={(e) => scrollToSection(e, "contact")}
                className="w-full text-center py-4 rounded-xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] transition-all"
              >
                Launch Inquiry
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
