"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Components Imports
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { PAPCalculator } from "@/components/PAPCalculator";
import { HiringPartnersMarquee } from "@/components/sections/HiringPartnersMarquee";
import { CareerTracksSection } from "@/components/sections/CareerTracksSection";
import { RealProjectsSection } from "@/components/sections/RealProjectsSection";
import { CareerTerminalWidget } from "@/components/CareerTerminalWidget";

export default function Home() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Advanced Smooth Scroll
  const scrollToTracks = () => {
    const tracksSection = document.getElementById("career-tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#05050A]">
      
      {/* 1. Cinematic Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none bg-gradient-to-r from-[#8B5CF6]/30 to-transparent" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, delay: 2, ease: "linear" }}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none bg-gradient-to-l from-[#00F0FF]/25 to-transparent" 
      />

      {/* 2. Top Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* 3. Ultra-Pro Hero Section */}
      <section className="flex-1 flex items-center justify-center pt-24 px-6 relative z-10 pb-20 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT COLUMN: Hacker Text & Action Buttons */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Glowing Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-3 border border-white/10 bg-[#131524]/60 backdrop-blur-xl px-5 py-2.5 rounded-full text-sm font-medium text-[#00F0FF] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite]" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></span>
              </span>
              INDIA'S MOST PRACTICAL AI & TECH LAUNCHPAD
            </motion.div>
            
            {/* The Glitch / Staggered Text Reveal */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-display font-extrabold tracking-tight leading-[1.05]"
            >
              {Array.from("Don't Just Watch AI.").map((char, index) => (
                <motion.span 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  className="inline-block text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="text-[#94A3B8]"
              >
                Build It. Ship It.
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, backgroundPosition: "200% center" }}
                animate={{ opacity: 1, backgroundPosition: "0% center" }}
                transition={{ delay: 2.2, duration: 2, ease: "easeOut" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#ADFF2F] to-[#8B5CF6] pb-2 mt-2"
              >
                Pay After You're Placed.
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="text-[#94A3B8] text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Skip outdated textbook theory. Master Applied GenAI, Full-Stack Engineering, or Edge IoT through real production internships—and pay ₹0 tuition until you land a tech job paying <span className="text-[#00F0FF] font-mono bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">₹5 LPA to ₹18+ LPA</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-6"
            >
              {/* Primary Action Button */}
              <button 
                onClick={scrollToTracks} 
                className="btn-shine group relative w-full sm:w-auto bg-[#ADFF2F] text-[#05050A] px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(173,255,47,0.6)] hover:scale-105 transition-all overflow-hidden border border-[#ADFF2F]"
              >
                Explore Career Tracks →
              </button>
              
              {/* Secondary Action Button */}
              <button 
                onClick={() => setShowCalculator(true)} 
                className="w-full sm:w-auto border border-[#00F0FF]/40 bg-[#0D0E17]/80 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-[#00F0FF] hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-3 relative group"
              >
                <div className="absolute inset-0 bg-[#00F0FF]/5 rounded-xl scale-0 group-hover:scale-100 transition-transform origin-center" />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F0FF] group-hover:rotate-12 transition-transform"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16.01" y1="10" y2="10"/><line x1="12" x2="12.01" y1="10" y2="10"/><line x1="8" x2="8.01" y1="10" y2="10"/><line x1="16" x2="16.01" y1="14" y2="14"/><line x1="12" x2="12.01" y1="14" y2="14"/><line x1="8" x2="8.01" y1="14" y2="14"/><line x1="16" x2="16.01" y1="18" y2="18"/><line x1="12" x2="12.01" y1="18" y2="18"/><line x1="8" x2="8.01" y1="18" y2="18"/></svg>
                Calculate PAP Fee
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Interactive Career Terminal */}
          <motion.div
             initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
             animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
             transition={{ delay: 1, duration: 0.8, type: "spring" }}
             className="relative z-20"
          >
             <CareerTerminalWidget />
          </motion.div>

        </div>
      </section>

      {/* 4. Core Website Sections */}
      <HiringPartnersMarquee />
      <CareerTracksSection />
      <RealProjectsSection />

      {/* 5. PAP Calculator Modal (Renders on top when triggered) */}
      {showCalculator && <PAPCalculator onClose={() => setShowCalculator(false)} />}
    </main>
  );
}
