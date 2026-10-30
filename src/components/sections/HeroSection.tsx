"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { GlowButton } from "@/components/ui/GlowButton";
import { CareerTerminalWidget } from "@/components/sections/CareerTerminalWidget";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function HeroSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-100" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-karka-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-karka-purple/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left — Copy */}
        <div>
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-karka-cyan/30 bg-karka-cyan/10 text-karka-cyan text-xs font-mono font-semibold tracking-widest uppercase mb-6"
          >
            ✨ INDIA&apos;S MOST PRACTICAL AI & TECH CAREER LAUNCHPAD
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.06] text-[#F8FAFC] mb-6"
          >
            Don&apos;t Just Watch AI.
            <br />
            Build It. Ship It.
            <br />
            <span className="text-gradient-hero">Pay After You&apos;re Placed.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-xl"
          >
            Skip outdated textbook theory. Master Applied GenAI, Full-Stack Engineering, or Edge IoT through real
            production internships—and pay{" "}
            <span className="text-karka-lime font-semibold">₹0 tuition</span> until you land a tech job paying{" "}
            <span className="text-karka-cyan font-semibold">₹5 LPA to ₹18+ LPA</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3 mb-8"
          >
            <GlowButton variant="lime" size="lg" onClick={onApplyClick}>
              Explore PAP Career Tracks <ArrowRight className="h-5 w-5" />
            </GlowButton>
            <Link href="#pap">
              <GlowButton variant="outline-cyan" size="lg">
                Calculate Your PAP Fee
              </GlowButton>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex items-center gap-3 flex-wrap"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["from-karka-cyan to-karka-purple", "from-karka-lime to-karka-cyan", "from-karka-purple to-karka-pink", "from-karka-amber to-karka-lime"].map(
                (g, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full bg-gradient-to-br ${g} border-2 border-karka-bg ring-1 ring-white/10`}
                  />
                )
              )}
              <div className="h-8 w-8 rounded-full bg-karka-surface border-2 border-karka-bg ring-1 ring-white/10 flex items-center justify-center text-[10px] font-mono text-karka-cyan">
                450+
              </div>
            </div>
            <p className="text-sm text-[#94A3B8]">
              <span className="text-[#F8FAFC] font-semibold">450+ Engineers Placed</span> • 4.9/5 Student Rating • Verified GitHub Portfolios
            </p>
          </motion.div>

          {/* Instagram link */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="mt-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-karka-purple transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Follow our journey on {siteConfig.instagramHandle}
            </a>
          </motion.div>
        </div>

        {/* Right — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CareerTerminalWidget onApplyClick={onApplyClick} />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-karka-cyan to-transparent" />
      </div>
    </section>
  );
}
