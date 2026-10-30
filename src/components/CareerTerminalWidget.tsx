"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CareerTerminalWidget() {
  const [activeTab, setActiveTab] = useState<"simulator" | "deployments">("simulator");
  const [selectedBg, setSelectedBg] = useState("EEE / ECE");

  const backgrounds = ["EEE / ECE", "CS / IT", "Mech / Civil", "Arts / Grad"];

  const roadmapData: Record<string, any> = {
    "EEE / ECE": {
      role: "Edge AI & Embedded Engineer",
      track: "IoT & FreeRTOS Architecture",
      salary: "₹6.5L - ₹13.5L LPA",
      project: "Smart Grid MQTT Telemetry",
      color: "text-[#00F0FF]"
    },
    "CS / IT": {
      role: "AI Backend Engineer",
      track: "Applied GenAI & Full-Stack",
      salary: "₹8.0L - ₹18.5L LPA",
      project: "Enterprise RAG Vector DB",
      color: "text-[#ADFF2F]"
    },
    "Mech / Civil": {
      role: "Cloud DevSecOps Engineer",
      track: "Linux, Docker & Kubernetes",
      salary: "₹7.0L - ₹14.0L LPA",
      project: "Auto-Scaling AWS Cluster",
      color: "text-[#8B5CF6]"
    },
    "Arts / Grad": {
      role: "Frontend Platform Engineer",
      track: "MERN & Next.js Ecosystem",
      salary: "₹5.0L - ₹10.0L LPA",
      project: "High-Concurrency FinTech UI",
      color: "text-[#EC4899]"
    }
  };

  const currentData = roadmapData[selectedBg];

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12 lg:mt-0">
      
      {/* Floating Achievement Badges */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 z-20 bg-[#131524]/90 backdrop-blur-md border border-[#F59E0B]/30 px-4 py-2 rounded-full text-xs font-bold text-[#F59E0B] shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] flex items-center gap-2"
      >
        🔥 Highest CTC: ₹18.5 LPA
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-6 z-20 bg-[#131524]/90 backdrop-blur-md border border-[#ADFF2F]/30 px-4 py-2 rounded-full text-xs font-bold text-[#ADFF2F] shadow-[0_0_20px_-5px_rgba(173,255,47,0.4)] flex items-center gap-2"
      >
        ⚡ ₹0 Upfront Fee (PAP)
      </motion.div>

      {/* Main Terminal Window */}
      <div className="bg-[#05050A]/90 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_-15px_rgba(0,240,255,0.3)] relative z-10">
        
        {/* Terminal Header */}
        <div className="bg-[#0D0E17] px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex gap-2 text-xs font-mono">
            <button 
              onClick={() => setActiveTab("simulator")}
              className={`px-3 py-1 rounded-md transition-all ${activeTab === "simulator" ? "bg-white/10 text-white" : "text-[#94A3B8] hover:text-white"}`}
            >
              career_simulator.ts
            </button>
            <button 
              onClick={() => setActiveTab("deployments")}
              className={`px-3 py-1 rounded-md transition-all ${activeTab === "deployments" ? "bg-white/10 text-white" : "text-[#94A3B8] hover:text-white"}`}
            >
              live_deployments.sh
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 h-[320px] font-mono text-sm overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: CAREER SIMULATOR */}
            {activeTab === "simulator" && (
              <motion.div 
                key="sim"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                className="h-full flex flex-col"
              >
                <div className="text-[#94A3B8] mb-4">
                  $ <span className="text-[#00F0FF]">select_background</span> <span className="text-white">--user "New Student"</span>
                </div>
                
                {/* Background Toggles */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {backgrounds.map((bg) => (
                    <button 
                      key={bg}
                      onClick={() => setSelectedBg(bg)}
                      className={`px-3 py-1.5 rounded text-xs transition-all border ${selectedBg === bg ? "bg-[#ADFF2F]/20 text-[#ADFF2F] border-[#ADFF2F]/50" : "bg-white/5 text-[#94A3B8] border-white/10 hover:border-white/30"}`}
                    >
                      {bg}
                    </button>
                  ))}
                </div>

                <div className="text-[#94A3B8] mb-2">$ generating_roadmap... <span className="animate-pulse text-[#00F0FF]">██</span></div>
                
                {/* Dynamic Output */}
                <motion.div 
                  key={selectedBg}
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-[#131524] border border-white/5 rounded-lg p-4 flex-1 space-y-3"
                >
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[#94A3B8] text-xs">Target Role</span>
                    <span className={`font-bold ${currentData.color}`}>{currentData.role}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[#94A3B8] text-xs">Recommended Track</span>
                    <span className="text-white">{currentData.track}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[#94A3B8] text-xs">Expected Salary</span>
                    <span className="text-yellow-400 font-bold">{currentData.salary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#94A3B8] text-xs">Capstone Project</span>
                    <span className="text-white text-xs">{currentData.project}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* TAB 2: LIVE DEPLOYMENTS */}
            {activeTab === "deployments" && (
              <motion.div 
                key="dep"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                className="h-full flex flex-col justify-end pb-2"
              >
                <div className="space-y-3">
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <span className="text-green-400">➜</span> <span className="text-blue-400">main</span> <span className="text-[#94A3B8]">git commit -m "feat: integrated OpenAI vector search"</span>
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <span className="text-[#ADFF2F]">[karka-ci]</span> Building production edge functions...
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                    <span className="text-yellow-400">warn</span> - chunk size exceeded 500kb. Splitting...
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                    <span className="text-[#00F0FF]">✔</span> Deployment successful to Vercel (Production)
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}>
                    <span className="text-purple-400">⚡</span> Real-time latency check: 45ms
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="mt-2 text-[#94A3B8]">
                    waiting for next event <span className="animate-pulse inline-block w-2 h-4 bg-white/50 align-middle ml-1"></span>
                  </motion.p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
