"use client";
import { motion } from "framer-motion";

export function RealProjectsSection() {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#05050A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">No Toy Calculators.</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">Build real production systems, commit to GitHub, and monitor live telemetry.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Project Details */}
          <div className="space-y-8">
            <div className="bg-[#0D0E17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all cursor-default">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center border border-[#8B5CF6]/30">
                  <span className="text-[#8B5CF6] font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">DocuPulse RAG Engine</h3>
                  <p className="text-xs text-[#94A3B8] font-mono">karka-labs/docupulse-rag</p>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">Multi-modal PDF & Textbook Query Engine for Engineering Teams. Built with Next.js, FastAPI, Qdrant Vector DB, and OpenAI.</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "Python", "Qdrant", "Docker"].map(t => (
                  <span key={t} className="text-xs bg-white/5 text-white px-2 py-1 rounded-md border border-white/10">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-[#0D0E17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/50 transition-all cursor-default opacity-50 hover:opacity-100">
              <h3 className="text-white font-bold text-xl mb-2">EdgeGuard S3 Telemetry</h3>
              <p className="text-[#94A3B8] text-sm">Real-Time Industrial Transformer & Motor Telemetry System on ESP32-S3.</p>
            </div>
          </div>

          {/* MacOS Style Hacker Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-15px_rgba(0,240,255,0.3)] bg-[#05050A]"
          >
            <div className="bg-[#131524] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs font-mono text-[#94A3B8]">ashik@karka-macbook: ~/projects/docupulse</div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-[#94A3B8] space-y-2">
              <p><span className="text-[#ADFF2F]">ashik@karka-macbook</span><span className="text-white">:</span><span className="text-blue-400">~/docupulse</span>$ npm run dev</p>
              <p className="text-white">&gt; docupulse@1.0.0 dev</p>
              <p className="text-white">&gt; next dev -p 3000</p>
              <br/>
              <p className="text-green-400">▲ Next.js 14.2.3</p>
              <p>- Local:        http://localhost:3000</p>
              <p>- Network:      http://192.168.1.5:3000</p>
              <br/>
              <p className="text-yellow-400">warn  - Fast Refresh had to perform a full reload.</p>
              <p className="text-white animate-pulse">✓ compiled client and server successfully in 1250 ms (165 modules)</p>
              <p className="text-[#00F0FF]">[INFO] Connected to Qdrant Vector Cluster at region: ap-south-1</p>
              <p className="text-[#00F0FF]">[INFO] Streaming LLM response latency: 120ms</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
