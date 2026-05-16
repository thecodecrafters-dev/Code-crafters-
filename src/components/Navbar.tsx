import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/60 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
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
 
        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <motion.button
            onClick={(e) => scrollToSection(e, "contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-6 md:px-8 py-2.5 rounded-full bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            <span className="relative z-10">Inquire Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
