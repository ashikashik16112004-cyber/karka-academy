"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CareerTracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const tracks = [
    { title: "Applied GenAI & Full-Stack", category: "Software Engineering", color: "from-[#00F0FF] to-blue-600", seats: 7, glowColor: "rgba(0, 240, 255, 0.15)" },
    { title: "Edge AI & IoT (ESP32)", category: "EEE / ECE / Core", color: "from-[#ADFF2F] to-green-600", seats: 5, glowColor: "rgba(173, 255, 47, 0.15)" },
    { title: "Cloud DevSecOps", category: "Infrastructure", color: "from-[#8B5CF6] to-purple-600", seats: 9, glowColor: "rgba(139, 92, 246, 0.15)" }
  ];

  // The Magic: Tracks mouse position for the spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="career-tracks" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20 relative">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#00F0FF]/10 blur-[80px] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight relative z-10">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#5a6c86]">Architecture</span></h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg relative z-10">Production-grade career tracks designed specifically for Tier-2/3 college students.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tracks.map((track, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative bg-[#0D0E17]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-700 cursor-pointer flex flex-col h-full hover:border-white/30 overflow-hidden shadow-2xl"
          >
            {/* ULTRA-PRO SPOTLIGHT EFFECT */}
            <div 
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              style={{ background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${track.glowColor}, transparent 40%)` }}
            />
            
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${track.color} opacity-40 group-hover:opacity-100 transition-opacity z-10`} />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-xs font-mono bg-[#131524] px-3 py-1.5 rounded-full text-white border border-white/10 shadow-inner flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Seats: {track.seats}</span>
              <span className="text-xs font-mono bg-[#ADFF2F]/10 text-[#ADFF2F] px-3 py-1.5 rounded-full border border-[#ADFF2F]/30 font-bold tracking-wider">100% PAP</span>
            </div>
            
            <h3 className="text-3xl font-display font-bold mb-3 text-white group-hover:translate-x-2 transition-transform duration-300 relative z-10">{track.title}</h3>
            <div className="text-xs font-medium text-[#00F0FF] mb-6 bg-[#00F0FF]/10 self-start px-3 py-1.5 rounded-md border border-[#00F0FF]/20 relative z-10">{track.category}</div>
            
            <p className="text-[#94A3B8] text-sm mb-10 flex-1 leading-relaxed relative z-10">Master real-world skills with daily code reviews by senior engineers, architecture design, and deploy live industry projects.</p>
            
            <button 
              onClick={() => setSelectedTrack(track.title)}
              className="w-full py-4 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-all font-bold text-white flex items-center justify-between px-6 relative z-10 overflow-hidden group/btn"
            >
              <span className="relative z-10">View Syllabus</span>
              <span className="relative z-10 bg-white/10 p-1.5 rounded-lg group-hover/btn:bg-white/20 transition-colors">→</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* ULTRA PRO MODAL (Same as before) */}
      <AnimatePresence>
        {selectedTrack && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-[#0D0E17]/95 border border-[#00F0FF]/30 w-full max-w-3xl rounded-3xl p-8 shadow-[0_0_50px_-10px_rgba(0,240,255,0.2)] relative max-h-[90vh] overflow-y-auto">
              <button onClick={() => setSelectedTrack(null)} className="absolute top-6 right-6 text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors rounded-full w-10 h-10 flex items-center justify-center text-xl">✕</button>
              <div className="inline-block bg-[#00F0FF]/10 text-[#00F0FF] px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 border border-[#00F0FF]/20">24-WEEK ARCHITECTURE</div>
              <h3 className="text-3xl font-display font-extrabold text-white mb-8">{selectedTrack}</h3>
              <div className="space-y-4">
                {[
                  { m: "Module 1: Core Fundamentals & Linux", d: "Deep dive into problem-solving, terminal commands, and modern syntax." },
                  { m: "Module 2: Microservices & Distributed Databases", d: "High-concurrency systems, PostgreSQL, Redis, and WebSockets." },
                  { m: "Module 3: Industry Clone & DevOps", d: "Dockerize applications, CI/CD pipelines, and re-building a scalable architecture." },
                  { m: "Module 4: Real Production Internship", d: "Push code to live servers, fix real bugs, and get daily PR reviews." }
                ].map((mod, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="bg-[#131524] p-5 rounded-2xl border border-white/5 hover:border-[#00F0FF]/30 transition-all group">
                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#00F0FF] transition-colors">{mod.m}</h4>
                    <p className="text-[#94A3B8]">{mod.d}</p>
                  </motion.div>
                ))}
              </div>
              <button onClick={() => setSelectedTrack(null)} className="mt-8 w-full bg-[#ADFF2F] text-black font-extrabold py-4 rounded-xl shadow-[0_0_30px_-5px_rgba(173,255,47,0.4)] hover:scale-[1.02] transition-transform">Close Syllabus & Apply Now</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
