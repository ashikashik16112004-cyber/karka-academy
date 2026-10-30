"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Eye, X, Instagram, ArrowRight } from "lucide-react";
import { instaReelsData } from "@/data/instaReelsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { InstaReelItem } from "@/types/karka";

const tagColors: Record<string, string> = {
  "Placement Drop": "bg-karka-lime/20 text-karka-lime border-karka-lime/30",
  "Project Build": "bg-karka-cyan/20 text-karka-cyan border-karka-cyan/30",
  "Campus Vibe": "bg-karka-purple/20 text-karka-purple border-karka-purple/30",
  "AI Hack": "bg-karka-amber/20 text-karka-amber border-karka-amber/30",
};

function ReelCard({ reel, onClick }: { reel: InstaReelItem; onClick: () => void }) {
  return (
    <motion.div
      className={`relative aspect-[9/14] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b ${reel.gradientBg} border border-white/10 flex-shrink-0 w-44 sm:w-52`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top tag */}
      <div className="absolute top-3 left-3">
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${tagColors[reel.tag]}`}>
          {reel.tag}
        </span>
      </div>

      {/* Duration */}
      <div className="absolute top-3 right-3 bg-black/60 px-1.5 py-0.5 rounded font-mono text-[10px] text-white">
        {reel.durationSec}
      </div>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-display font-semibold text-white text-xs leading-tight mb-2 line-clamp-3">{reel.title}</p>
        <div className="flex items-center gap-3 text-[10px] text-white/70">
          <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{reel.viewsCount}</span>
          <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{reel.likesCount}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ReelOverlay({ reel, onClose }: { reel: InstaReelItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-card rounded-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors">
          <X className="h-5 w-5" />
        </button>
        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${tagColors[reel.tag]} mb-3 inline-block`}>
          {reel.tag}
        </span>
        <h3 className="font-display font-bold text-[#F8FAFC] text-lg leading-tight mb-3">{reel.title}</h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{reel.hookText}</p>
        <div className="flex items-center gap-4 text-sm text-[#94A3B8] mb-6">
          <span className="flex items-center gap-1"><Eye className="h-4 w-4" /> {reel.viewsCount} views</span>
          <span className="flex items-center gap-1"><Heart className="h-4 w-4" /> {reel.likesCount} likes</span>
          <span className="font-mono">{reel.durationSec}</span>
        </div>
        <div className="flex gap-3">
          <a
            href="https://instagram.com/karka.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-4 w-4" /> Watch on @karka.ai
          </a>
          <a
            href="#enrollment"
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-karka-lime border border-karka-lime/30 hover:bg-karka-lime/10 px-4 py-2.5 rounded-xl transition-all"
          >
            Apply <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function InstaVibeSection() {
  const [selectedReel, setSelectedReel] = useState<InstaReelItem | null>(null);

  return (
    <section id="vibe" className="py-24 bg-karka-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="@karka.ai Vibe"
            title="Inside the @karka.ai Ecosystem —"
            titleHighlight="Raw Builds & Offer Drops"
            align="left"
          />
          <a
            href="https://instagram.com/karka.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Instagram className="h-4 w-4" /> Follow @karka.ai (25K+)
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {instaReelsData.map((reel) => (
            <div key={reel.id} className="snap-start">
              <ReelCard reel={reel} onClick={() => setSelectedReel(reel)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedReel && (
          <ReelOverlay reel={selectedReel} onClose={() => setSelectedReel(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
