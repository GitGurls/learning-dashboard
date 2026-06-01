"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Zap, TrendingUp } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import type { UserStats } from "@/types";

interface StatsTileProps {
  stats: UserStats;
  index?: number;
}

export default function StatsTile({ stats, index = 0 }: StatsTileProps) {
  const items = [
    {
      label: "Day Streak",
      value: `${stats.streak}`,
      suffix: "days",
      icon: <Zap size={16} />,
      color: "#F59E0B",
    },
    {
      label: "Courses Done",
      value: `${stats.completedCourses}`,
      suffix: "total",
      icon: <Trophy size={16} />,
      color: "#8B5CF6",
    },
    {
      label: "Study Hours",
      value: `${stats.totalHours}`,
      suffix: "hrs",
      icon: <Target size={16} />,
      color: "#10B981",
    },
    {
      label: "XP Earned",
      value: `${(stats.points / 1000).toFixed(1)}k`,
      suffix: "xp",
      icon: <TrendingUp size={16} />,
      color: "#22D3EE",
    },
  ];

  return (
    <BentoCard
      className="min-h-[200px]"
      glowColor="rgba(139,92,246,0.25)"
      index={index}
    >
      <div className="p-5 h-full flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">Your Stats</h2>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 + i * 0.07 + 0.2 }}
              className="bg-[#111827] rounded-xl p-3 border border-[#1F2937] flex flex-col gap-1"
            >
              <div className="flex items-center gap-1.5" style={{ color: item.color }}>
                {item.icon}
                <span className="text-[10px] font-medium text-gray-400">{item.label}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 + i * 0.07 + 0.5 }}
                  className="text-xl font-bold text-white"
                >
                  {item.value}
                </motion.span>
                <span className="text-[10px] text-gray-500">{item.suffix}</span>
              </div>
              {/* Micro progress bar */}
              <div className="h-0.5 rounded-full bg-white/5 overflow-hidden mt-1">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.random() * 40 + 50}%` }}
                  transition={{ delay: index * 0.08 + i * 0.07 + 0.8, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
