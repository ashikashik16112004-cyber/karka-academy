"use client";

export function HiringPartnersMarquee() {
  const partners = ["Zoho", "Freshworks", "Chargebee", "Kissflow", "PayPal", "Razorpay", "Swiggy", "Juspay", "TCS Digital", "Postman", "BrowserStack"];
  
  return (
    <section className="py-12 border-y border-white/5 relative overflow-hidden bg-[#05050A]">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10 pointer-events-none" />
      
      <div className="text-center text-[#94A3B8] text-sm font-medium mb-6 uppercase tracking-widest">
        Our Students Are Hired By
      </div>

      {/* Group class added here for hover pause */}
      <div className="group flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] gap-8 pl-8">
          {[...partners, ...partners, ...partners].map((company, i) => (
            <div key={i} className="text-[#94A3B8] text-xl font-display font-bold px-8 py-3 bg-[#131524]/50 backdrop-blur-md rounded-full border border-white/5 hover:border-[#00F0FF]/30 hover:text-white transition-colors cursor-pointer">
              {company}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
}
