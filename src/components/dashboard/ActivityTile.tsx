"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import type { ActivityDay } from "@/types";

interface ActivityTileProps {
  data: ActivityDay[];
  index?: number;
}

const levelColors = [
  "rgba(255,255,255,0.04)",   // 0 - empty
  "rgba(34,211,238,0.2)",      // 1 - light
  "rgba(34,211,238,0.45)",     // 2 - medium
  "rgba(34,211,238,0.7)",      // 3 - heavy
  "#22D3EE",                   // 4 - max
];

export default function ActivityTile({ data, index = 0 }: ActivityTileProps) {
  const weeks: ActivityDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const totalContributions = data.reduce((sum, d) => sum + d.count, 0);
  const activeDays = data.filter((d) => d.count > 0).length;

  return (
    <BentoCard
      className="lg:col-span-2 min-h-[180px]"
      glowColor="rgba(34,211,238,0.25)"
      index={index}
    >
      <div className="p-5 h-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
              <Activity size={14} className="text-cyan-400" />
            </div>
            <h2 className="text-sm font-semibold text-white">Learning Activity</h2>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>
              <span className="text-cyan-400 font-semibold">{totalContributions}</span> sessions
            </span>
            <span>
              <span className="text-cyan-400 font-semibold">{activeDays}</span> active days
            </span>
          </div>
        </div>

        {/* Activity grid */}
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-1 h-full items-end">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1 flex-1">
                {week.map((day, di) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: (wi * 7 + di) * 0.005,
                      ease: "backOut",
                    }}
                    title={`${day.date}: ${day.count} sessions`}
                    className="rounded-sm flex-1 min-h-[8px] max-h-[12px] cursor-pointer transition-transform hover:scale-125"
                    style={{
                      background: levelColors[day.level],
                      border: day.level > 0 ? "1px solid rgba(34,211,238,0.15)" : "1px solid rgba(255,255,255,0.04)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Less</span>
          {levelColors.map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm"
              style={{
                background: color,
                border: i > 0 ? "1px solid rgba(34,211,238,0.15)" : "1px solid rgba(255,255,255,0.04)",
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </BentoCard>
  );
}
