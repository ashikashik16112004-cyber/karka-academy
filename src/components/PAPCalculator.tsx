"use client";
import { useState } from "react";

export function PAPCalculator({ onClose }: { onClose: () => void }) {
  const [ctc, setCtc] = useState<number>(8.5);

  const monthlyGross = (ctc * 100000) / 12;
  const isEligible = ctc >= 5.0;
  const rawEmi = monthlyGross * 0.15;
  const finalEmi = isEligible ? (rawEmi > 5000 ? 5000 : rawEmi) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#0D0E17] border border-[#00F0FF]/30 w-full max-w-md rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(0,240,255,0.3)] relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94A3B8] hover:text-white font-bold">
          ✕
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">PAP Fee Calculator</h3>
        <p className="text-[#94A3B8] text-sm mb-6">Drag the slider to see your monthly ISA.</p>

        {/* Interactive Slider */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium mb-4">
            <span className="text-white">₹3.0 LPA</span>
            <span className="text-[#00F0FF] text-xl font-bold font-mono">₹{ctc.toFixed(1)} LPA</span>
            <span className="text-white">₹20.0 LPA</span>
          </div>
          <input 
            type="range" 
            min="3" max="20" step="0.5" 
            value={ctc} 
            onChange={(e) => setCtc(parseFloat(e.target.value))}
            className="w-full accent-[#00F0FF] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Dynamic Logic Display */}
        {!isEligible ? (
          <div className="bg-[#ADFF2F]/10 border border-[#ADFF2F]/40 rounded-xl p-4 text-center">
            <h4 className="text-[#ADFF2F] font-bold text-lg">🎉 YOU PAY ₹0</h4>
            <p className="text-sm text-[#94A3B8] mt-1">Your CTC is below our ₹5.0 LPA promise. Your tuition is 100% free.</p>
          </div>
        ) : (
          <div className="space-y-3 bg-[#131524] rounded-xl p-4 border border-white/5">
            <div className="flex justify-between items-center">
              <span className="text-[#94A3B8] text-sm">Monthly Take-Home</span>
              <span className="text-white font-mono font-medium">₹{Math.round(monthlyGross).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-3">
              <span className="text-[#94A3B8] text-sm">Max Monthly Karka EMI</span>
              <span className="text-[#00F0FF] font-mono font-bold text-xl">₹{Math.round(finalEmi).toLocaleString('en-IN')}</span>
            </div>
            <p className="text-xs text-center text-[#94A3B8] pt-2">Capped at max ₹1,20,000 total across 24 months.</p>
          </div>
        )}
      </div>
    </div>
  );
}
