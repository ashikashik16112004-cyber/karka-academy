"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Shield, Users, GitPullRequest, Zap, BookOpen } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export function WhyKarkaBento() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-karka-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Karka Works"
          title="Why Traditional Colleges & Generic Courses"
          titleHighlight="Fail You"
          subtitle="And exactly how Karka fixes each problem with proof."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1 — col-span-7 */}
          <motion.div
            className="md:col-span-7"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <GlassCard className="p-6 h-full" glowColor="lime" hover>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-karka-lime" />
                <span className="font-display font-semibold text-[#F8FAFC]">Real Projects vs Toy Clones</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-xs font-mono text-red-400 mb-3 tracking-wider">❌ OTHERS BUILD</p>
                  <ul className="space-y-2 text-sm text-[#94A3B8]">
                    {["Netflix UI Clone (from YouTube)", "Todo App in React", "Weather App with fake API", "Portfolio with Lorem Ipsum", "Copied GitHub projects"].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2">
                          <XCircle className="h-3.5 w-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="line-through opacity-60">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="bg-karka-lime/10 border border-karka-lime/20 rounded-xl p-4">
                  <p className="text-xs font-mono text-karka-lime mb-3 tracking-wider">✓ KARKA SHIPS</p>
                  <ul className="space-y-2 text-sm text-[#F8FAFC]">
                    {[
                      "Multi-Agent RAG System (live users)",
                      "High-Throughput FinTech Webhook Engine",
                      "ESP32-S3 Motor Fault Detection",
                      "Autonomous AI Screening Bot",
                      "K8s Zero-Trust Security Platform",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-karka-lime mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2 — col-span-5 */}
          <motion.div
            className="md:col-span-5"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between" glowColor="cyan" hover>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-karka-cyan" />
                  <span className="font-display font-semibold text-[#F8FAFC]">Skin in the Game</span>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Traditional coaching institutes take ₹1.5L+ upfront and disappear after your exam. At Karka, we earn ₹0 unless you earn above ₹5 LPA.
                </p>
              </div>
              <div className="bg-karka-bg rounded-xl p-4 border border-white/10">
                <div className="text-center mb-3">
                  <p className="font-mono text-xs text-[#94A3B8] mb-1">KARKA&apos;S EARNINGS</p>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-karka-lime to-karka-cyan rounded-full" style={{ width: "0%" }} />
                  </div>
                  <p className="font-mono text-karka-lime text-xs mt-1.5">₹0 if you don&apos;t earn &gt; ₹5 LPA</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center mt-4">
                  {[
                    { label: "Upfront Fee", value: "₹0", color: "text-karka-lime" },
                    { label: "ISA Rate", value: "15%", color: "text-karka-cyan" },
                    { label: "Max Cap", value: "₹1.2L", color: "text-karka-amber" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-lg p-2">
                      <p className={`font-mono font-bold text-lg ${stat.color}`}>{stat.value}</p>
                      <p className="text-[10px] text-[#94A3B8]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3 — col-span-4 */}
          <motion.div
            className="md:col-span-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <GlassCard className="p-6 h-full" glowColor="purple" hover>
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-karka-purple" />
                <span className="font-display font-semibold text-[#F8FAFC]">Built for Core Branch Underdogs</span>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                EEE. ECE. Mechanical. B.Sc. Tier-3 college. Career gap. None of it disqualifies you from Tier-1 product companies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["EEE → AI Engineer", "ECE → Full Stack", "Mech → DevOps", "Arts Grad → Data Science", "B.Sc → Frontend"].map((tag) => (
                  <span key={tag} className="text-xs bg-karka-purple/10 border border-karka-purple/20 text-karka-purple px-2 py-1 rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4 — col-span-4 */}
          <motion.div
            className="md:col-span-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <GlassCard className="p-6 h-full" glowColor="amber" hover>
              <div className="flex items-center gap-2 mb-3">
                <GitPullRequest className="h-5 w-5 text-karka-amber" />
                <span className="font-display font-semibold text-[#F8FAFC]">Daily Code Reviews by Senior Engineers</span>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                Not YouTube tutorials. Real PR reviews from engineers at Zoho, Freshworks & funded startups. System design whiteboarding from Day 1.
              </p>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-xs">
                <p className="text-[#94A3B8]">reviewer: <span className="text-karka-cyan">@senior_eng</span></p>
                <p className="text-yellow-400 mt-1">⚠ This query is missing an index. Add:</p>
                <p className="text-karka-lime mt-1">+ CREATE INDEX idx_user_email ON users(email);</p>
                <p className="text-[#94A3B8] mt-1">This will drop lookup from 840ms → 2ms 🚀</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 5 — col-span-4 */}
          <motion.div
            className="md:col-span-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <GlassCard className="p-6 h-full" glowColor="cyan" hover>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-karka-cyan" />
                <span className="font-display font-semibold text-[#F8FAFC]">AI-Native Workflow (2026 Engineer)</span>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                We teach you how 10x engineers build in 2026 — not memorizing syntax but using AI-augmented tooling to ship 3× faster.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cursor IDE", "GitHub Copilot", "v0.dev", "LangGraph", "Claude API", "Vercel AI SDK"].map((tool) => (
                  <span key={tool} className="text-xs bg-karka-cyan/10 border border-karka-cyan/20 text-karka-cyan px-2 py-1 rounded-md font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
