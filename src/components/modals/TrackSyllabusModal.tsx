"use client";

export function TrackSyllabusModal({ trackName, onClose }: { trackName: string, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0D0E17] border border-[#00F0FF]/30 w-full max-w-2xl rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(0,240,255,0.3)] relative max-h-[85vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94A3B8] hover:text-white font-bold bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
          ✕
        </button>
        
        <h3 className="text-2xl font-bold text-white mb-2">{trackName}</h3>
        <p className="text-[#00F0FF] text-sm mb-6 font-mono border-b border-white/10 pb-4">Intensive 24-Week Production Architecture</p>

        <div className="space-y-4">
          <div className="bg-[#131524] p-4 rounded-xl border border-white/5">
            <h4 className="text-white font-bold mb-1">Module 1: Core Fundamentals & Advanced Logic</h4>
            <p className="text-sm text-[#94A3B8]">Deep dive into problem-solving, clean architecture, and modern syntax.</p>
          </div>
          <div className="bg-[#131524] p-4 rounded-xl border border-white/5">
            <h4 className="text-white font-bold mb-1">Module 2: Building Microservices & APIs</h4>
            <p className="text-sm text-[#94A3B8]">Creating high-concurrency systems, working with databases (SQL/NoSQL) and caching.</p>
          </div>
          <div className="bg-[#131524] p-4 rounded-xl border border-white/5 border-l-4 border-l-[#8B5CF6]">
            <h4 className="text-white font-bold mb-1">Module 3: Industry Clone Project</h4>
            <p className="text-sm text-[#94A3B8]">Re-building a scalable architecture like Swiggy or Razorpay from scratch.</p>
          </div>
          <div className="bg-[#ADFF2F]/10 p-4 rounded-xl border border-[#ADFF2F]/30 border-l-4 border-l-[#ADFF2F]">
            <h4 className="text-[#ADFF2F] font-bold mb-1">Module 4: Real Production Internship</h4>
            <p className="text-sm text-[#94A3B8]">Push code to live servers, fix real bugs, and get daily PR reviews from senior engineers.</p>
          </div>
        </div>

        <button onClick={onClose} className="mt-8 w-full bg-[#ADFF2F] text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform">
          Close Syllabus & Apply Now
        </button>
      </div>
    </div>
  );
}
