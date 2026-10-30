"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, CheckCircle2 } from "lucide-react";
import { placementsData } from "@/data/placementsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import type { StudentPlacement } from "@/types/karka";

const filters = ["All Stories", "Non-CS to Tech (EEE/ECE/Mech)", "₹10+ LPA Club", "Career Gap Breakers"] as const;
type FilterType = typeof filters[number];

const tierVariant: Record<string, "cyan" | "lime" | "purple" | "amber"> = {
  "Product AI": "cyan",
  "MNC Tech": "lime",
  "High-Growth Startup": "purple",
  "FinTech": "amber",
};

function PlacementCard({ student }: { student: StudentPlacement }) {
  const initials = student.studentName.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const variant = tierVariant[student.companyTier] ?? "ghost";

  return (
    <GlassCard className="p-5" glowColor={variant} hover>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br ${student.avatarGradient} flex items-center justify-center font-display font-bold text-karka-bg text-sm ring-2 ring-white/20`}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-[#F8FAFC] truncate">{student.studentName}</p>
          <p className="text-xs text-[#94A3B8] truncate">{student.college}</p>
          <Badge variant="ghost" className="mt-1">{student.degreeBackground.split(" ").slice(0, 3).join(" ")}</Badge>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-mono font-bold text-karka-lime text-lg">₹{student.packageLPA} LPA</p>
          <div className="flex items-center gap-1 justify-end">
            <CheckCircle2 className="h-3 w-3 text-karka-lime" />
            <span className="text-xs text-karka-lime font-mono">Verified</span>
          </div>
        </div>
      </div>

      {/* Transition */}
      <div className="bg-karka-bg/60 border border-white/10 rounded-xl p-3 mb-4 flex items-center gap-2 flex-wrap">
        <span className="text-xs text-[#94A3B8] bg-white/5 px-2 py-1 rounded border border-white/10">{student.previousStatus}</span>
        <ArrowRight className="h-4 w-4 text-karka-cyan flex-shrink-0" />
        <span className="text-xs text-karka-cyan font-medium bg-karka-cyan/10 px-2 py-1 rounded border border-karka-cyan/20">{student.placedRole} @ {student.companyName}</span>
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-[#94A3B8] italic leading-relaxed mb-4 border-l-2 border-karka-cyan/40 pl-3">
        &ldquo;{student.quote}&rdquo;
      </blockquote>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {student.skillsMastered.slice(0, 5).map((skill) => (
          <Badge key={skill} variant={variant}>{skill}</Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#94A3B8]">{student.location}</span>
        <a
          href={`https://linkedin.com/in/${student.linkedinHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-karka-purple hover:text-karka-purple/80 transition-colors"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      </div>
    </GlassCard>
  );
}

export function PlacementsWallSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Stories");

  const filtered = placementsData.filter((s) => {
    if (activeFilter === "All Stories") return true;
    if (activeFilter === "Non-CS to Tech (EEE/ECE/Mech)")
      return ["B.E. Electrical & Electronics Engineering", "B.E. Electronics & Communication Engineering", "B.E. Mechanical Engineering"].some((d) =>
        s.degreeBackground.includes(d.split(" ").slice(2).join(" "))
      );
    if (activeFilter === "₹10+ LPA Club") return s.packageLPA >= 10;
    if (activeFilter === "Career Gap Breakers") return s.degreeBackground.toLowerCase().includes("gap");
    return true;
  });

  return (
    <section id="placements" className="py-24 px-4 sm:px-6 lg:px-8 bg-karka-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Placement Proof"
          title="From Tier-3 Classrooms & Non-CS Branches"
          titleHighlight="to High-Growth Tech Teams"
          subtitle="Every story below is verifiable. Real students. Real companies. Real salary numbers."
          className="mb-10"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-200 border ${
                activeFilter === f
                  ? "bg-karka-lime text-karka-bg border-karka-lime font-bold"
                  : "bg-karka-surface/60 text-[#94A3B8] border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((student) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <PlacementCard student={student} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#94A3B8]">
            <p className="font-mono text-sm">No placements match this filter yet. Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
