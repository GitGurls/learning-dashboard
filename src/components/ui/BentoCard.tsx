"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  index?: number;
  onClick?: () => void;
}

export default function BentoCard({
  children,
  className,
  glowColor,
  index = 0,
  onClick,
}: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onClick={onClick}
      className={cn(
        "relative rounded-2xl overflow-hidden noise-overlay",
        "border border-[#1F2937] bg-[#0D1117]",
        "transition-colors duration-300",
        "group cursor-default",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.04) inset",
      }}
    >
      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: glowColor
            ? `radial-gradient(ellipse at 50% 0%, ${glowColor}20 0%, transparent 70%)`
            : "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.1) 0%, transparent 70%)",
          border: `1px solid ${glowColor || "rgba(34,211,238,0.2)"}`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
