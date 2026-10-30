"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 1. Main High-Tech Crosshair */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.2 }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Crosshair Lines */}
          <div className="absolute w-full h-[1px] bg-[#00F0FF]/60" />
          <div className="absolute h-full w-[1px] bg-[#00F0FF]/60" />
          {/* Center Glowing Core */}
          <div className="w-2.5 h-2.5 bg-[#ADFF2F] rotate-45 shadow-[0_0_15px_#ADFF2F]" />
        </div>
      </motion.div>

      {/* 2. Trailing Neon Aura (Follows the mouse slowly) */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-[40px] pointer-events-none z-[9998] hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
