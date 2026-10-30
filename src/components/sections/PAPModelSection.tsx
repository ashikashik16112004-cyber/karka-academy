"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { papSteps, papCalculatorConfig } from "@/data/papData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, Code2, Target, ShieldCheck, Check } from "lucide-react";
import { formatINR } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
};

const stepColors = ["text-karka-cyan", "text-karka-lime", "text-karka-purple", "text-karka-amber"];
const stepBg = ["bg-karka-cyan/10 border-karka-cyan/30", "bg-karka-lime/10 border-karka-lime/30", "bg-karka-purple/10 border-karka-purple/30", "bg-karka-amber/10 border-karka-amber/30"];

const presets = [
  { label: "₹4.5 LPA", value: 4.5, note: "Below Threshold" },
  { label: "₹6.5 LPA", value: 6.5 },
  { label: "₹9.0 LPA", value: 9.0 },
  { label: "₹14.0 LPA", value: 14.0 },
];

function PAPCalculator() {
  const [ctc, setCtc] = useState(7.5);
  const cfg = papCalculatorConfig;
  const isAboveThreshold = ctc >= cfg.minimumThresholdLPA;
  const monthlyGross = (ctc * 100000) / 12;
  const rawIsaPayout = monthlyGross * (cfg.isaPercentage / 100);
  const monthlyIsaPayout = Math.min(rawIsaPayout, cfg.maxCapAmountINR / cfg.maxPaymentMonths);
  const totalPaid = monthlyIsaPayout * cfg.maxPaymentMonths;
  const netFirstYearGain = monthlyGross * 12 - monthlyIsaPayout * 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left controls */}
      <div>
        <h3 className="font-display font-bold text-[#F8FAFC] text-xl mb-2">Zero-Risk PAP Calculator</h3>
        <p className="text-[#94A3B8] text-sm mb-6">Slide to your expected placed CTC. See exactly what you&apos;d pay Karka.</p>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-mono text-[#94A3B8]">Expected CTC (LPA)</label>
            <span className="font-mono font-bold text-karka-cyan text-lg">₹{ctc.toFixed(1)} LPA</span>
          </div>
          <input
            type="range"
            min={3.5}
            max={20}
            step={0.5}
            value={ctc}
            onChange={(e) => setCtc(parseFloat(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-karka-cyan"
          />
          <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1">
            <span>₹3.5 LPA</span>
            <span>₹20.0 LPA</span>
          </div>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 mb-6">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setCtc(p.value)}
              className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                ctc === p.value
                  ? "border-karka-cyan bg-karka-cyan/10 text-karka-cyan"
                  : "border-white/10 text-[#94A3B8] hover:border-white/30"
              }`}
            >
              {p.label} {p.note && <span className="text-[10px] opacity-70">({p.note})</span>}
            </button>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-karka-bg/60 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-4 py-2 border-b border-white/10 bg-white/5">
            <p className="font-mono text-xs text-[#94A3B8] tracking-wider uppercase">Karka PAP vs Traditional Coaching</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-4 py-2 text-[#94A3B8] font-mono">Factor</th>
                <th className="text-center px-3 py-2 text-karka-lime font-mono">Karka PAP</th>
                <th className="text-center px-3 py-2 text-red-400 font-mono">Traditional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Upfront Fee", "₹0", "₹1–2.5 Lakh"],
                ["Risk", "Zero (PAP)", "100% on you"],
                ["Placement Drive", "120+ Partners", "Limited"],
                ["Real Projects", "✓ Production", "Toy Projects"],
                ["Max Pay", "₹1.2L Total", "₹1.5L+ upfront"],
              ].map(([factor, karka, trad]) => (
                <tr key={factor}>
                  <td className="px-4 py-2 text-[#94A3B8]">{factor}</td>
                  <td className="px-3 py-2 text-center text-karka-lime font-mono">{karka}</td>
                  <td className="px-3 py-2 text-center text-red-400 font-mono">{trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right — live breakdown */}
      <AnimatePresence mode="wait">
        {!isAboveThreshold ? (
          <motion.div
            key="zero-fee"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="bg-karka-lime/10 border-2 border-karka-lime/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-neon-lime min-h-[280px]"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-display font-bold text-karka-lime text-2xl mb-3">YOU PAY ₹0 / MONTH!</h3>
            <p className="text-[#F8FAFC] text-sm leading-relaxed">
              Because your package (<span className="text-karka-lime font-mono font-bold">₹{ctc.toFixed(1)} LPA</span>) is below our ₹5.0 LPA promise threshold, your tuition fee is{" "}
              <span className="font-bold text-karka-lime">100% waived</span>.
            </p>
            <p className="text-[#94A3B8] text-xs mt-4 italic">
              We only succeed when you succeed. This is how Pay After Placement works.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="fee-breakdown"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="space-y-3"
          >
            <GlassCard className="p-4">
              <p className="font-mono text-xs text-[#94A3B8] mb-1 tracking-wider uppercase">Your Monthly Take-Home</p>
              <p className="font-display font-bold text-[#F8FAFC] text-3xl">{formatINR(monthlyGross)}</p>
              <p className="text-xs text-[#94A3B8] font-mono">(₹{ctc.toFixed(1)} LPA ÷ 12)</p>
            </GlassCard>
            <GlassCard className="p-4 border-karka-cyan/30">
              <p className="font-mono text-xs text-[#94A3B8] mb-1 tracking-wider uppercase">Monthly Karka PAP Installment</p>
              <p className="font-display font-bold text-karka-cyan text-3xl">{formatINR(monthlyIsaPayout)}</p>
              <p className="text-xs text-[#94A3B8] font-mono">15% of gross, capped at ₹5,000/month</p>
            </GlassCard>
            <div className="grid grid-cols-2 gap-3">
              <GlassCard className="p-4">
                <p className="font-mono text-[10px] text-[#94A3B8] mb-1 uppercase">Total Max Cap</p>
                <p className="font-mono font-bold text-karka-amber text-xl">{formatINR(cfg.maxCapAmountINR)}</p>
                <p className="text-[10px] text-[#94A3B8]">guaranteed maximum</p>
              </GlassCard>
              <GlassCard className="p-4">
                <p className="font-mono text-[10px] text-[#94A3B8] mb-1 uppercase">Net First-Year Gain</p>
                <p className="font-mono font-bold text-karka-lime text-xl">{formatINR(netFirstYearGain)}</p>
                <p className="text-[10px] text-[#94A3B8]">in your pocket</p>
              </GlassCard>
            </div>
            <div className="bg-karka-surface/60 border border-white/10 rounded-xl p-3 text-xs text-[#94A3B8] font-mono">
              <span className="text-karka-lime">✓</span> Zero collateral · Zero NBFC loan · <span className="text-karka-lime">✓</span> Zero hidden charges
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PAPModelSection() {
  return (
    <section id="pap" className="py-24 px-4 sm:px-6 lg:px-8 bg-karka-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Pay After Placement"
          title="The Karka PAP Model —"
          titleHighlight="Zero Risk For You"
          subtitle="We built the entire business model around one belief: if you don't win, we don't deserve to earn."
          className="mb-16"
        />

        {/* 4-step timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {papSteps.map((step, i) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-5 h-full relative overflow-hidden" hover>
                {/* Step number */}
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl border ${stepBg[i]} mb-4 ${stepColors[i]}`}>
                  {iconMap[step.iconName]}
                </div>
                <p className={`font-mono text-xs font-bold tracking-widest mb-2 ${stepColors[i]}`}>
                  STEP {step.stepNumber}
                </p>
                <h3 className="font-display font-bold text-[#F8FAFC] text-base leading-tight mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">{step.description}</p>
                <div className={`font-mono text-xs font-bold px-2 py-1 rounded-lg border inline-flex items-center gap-1 ${stepBg[i]} ${stepColors[i]}`}>
                  <Check className="h-3 w-3" /> {step.highlightMetric}
                </div>
                {/* Connector line for desktop */}
                {i < papSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Calculator */}
        <GlassCard className="p-6 sm:p-8 border border-karka-cyan/20">
          <PAPCalculator />
        </GlassCard>
      </div>
    </section>
  );
}
