"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
  delay?: number;
}

export default function ProgressBar({
  value,
  color = "#22D3EE",
  height = 4,
  showLabel = false,
  delay = 0,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1.5">
          <span className="text-xs text-gray-400">Progress</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
            className="text-xs font-medium"
            style={{ color }}
          >
            {value}%
          </motion.span>
        </div>
      )}
      <div
        className="w-full rounded-full overflow-hidden"
        style={{
          height,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            delay: delay + 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        >
          {/* Shimmer effect on bar */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              duration: 2,
              delay: delay + 1.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
