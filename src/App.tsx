/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import ConceptWork from "@/src/components/ConceptWork";
import Pricing from "@/src/components/Pricing";
import CTA from "@/src/components/CTA";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import LiquidBackground from "@/src/components/LiquidBackground";
import LoadingScreen from "@/src/components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <LiquidBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-white to-white/30 z-[60] origin-[0%] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10 pt-10">
        <Hero />
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.div>

        <Services />
        <ConceptWork />
        <Pricing />
        <CTA />
        <Contact />
      </main>

      <Footer />

      {/* Custom Cursor Overlay (Glow) */}
      <CursorGlow />
    </div>
  );
}

function CursorGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setHasHover(mediaQuery.matches);

    let rafId: number;
    let currentX = -1000;
    let currentY = -1000;
    let targetX = -1000;
    let targetY = -1000;
    let initialMove = false;

    const updatePosition = () => {
      if (containerRef.current) {
        if (!initialMove && targetX !== -1000) {
          currentX = targetX;
          currentY = targetY;
          initialMove = true;
        } else {
          currentX += (targetX - currentX) * 0.08;
          currentY += (targetY - currentY) * 0.08;
        }
        containerRef.current.style.background = `radial-gradient(550px circle at ${currentX}px ${currentY}px, rgba(255, 255, 255, 0.035), transparent 80%)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
      rafId = requestAnimationFrame(updatePosition);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!hasHover) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{
        background: "radial-gradient(550px circle at -1000px -1000px, rgba(255, 255, 255, 0.035), transparent 80%)",
      }}
    />
  );
}

