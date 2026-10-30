"use client";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full h-16 border-b border-white/10 bg-[#05050A]/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-50">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-xl font-bold tracking-widest text-white flex items-center gap-1 cursor-pointer"
      >
        KARKA<span className="text-[#ADFF2F] px-2 py-0.5 bg-[#ADFF2F]/10 rounded-md text-xs border border-[#ADFF2F]/30 ml-2">TECH ACADEMY</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-sm text-[#94A3B8] font-medium">
        <button onClick={() => scrollTo("career-tracks")} className="hover:text-white transition-colors">Career Tracks</button>
        <button onClick={() => scrollTo("career-tracks")} className="hover:text-white transition-colors">Pay After Placement</button>
        <button onClick={() => scrollTo("career-tracks")} className="hover:text-white transition-colors">Real Projects</button>
      </div>

      <button onClick={() => scrollTo("career-tracks")} className="bg-[#ADFF2F] text-[#05050A] px-5 py-2 rounded-lg text-sm font-bold shadow-[0_0_20px_-4px_rgba(173,255,47,0.4)] hover:scale-105 transition-all">
        Apply for PAP Batch
      </button>
    </nav>
  );
}
