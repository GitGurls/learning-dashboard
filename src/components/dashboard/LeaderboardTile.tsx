"use client";

import { motion } from "framer-motion";
import { Crown, Medal } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

const leaderboard = [
  { rank: 1, name: "Priya S.", points: 6820, avatar: "P", color: "#F59E0B" },
  { rank: 2, name: "Alex J.", points: 4250, avatar: "A", color: "#22D3EE", isYou: true },
  { rank: 3, name: "Ravi K.", points: 3940, avatar: "R", color: "#10B981" },
  { rank: 4, name: "Nisha M.", points: 3100, avatar: "N", color: "#8B5CF6" },
];

interface LeaderboardTileProps {
  index?: number;
}

export default function LeaderboardTile({ index = 0 }: LeaderboardTileProps) {
  return (
    <BentoCard glowColor="rgba(245,158,11,0.2)" index={index} className="min-h-[180px]">
      <div className="p-5 h-full flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Crown size={16} className="text-amber-400" />
          <h2 className="text-sm font-semibold text-white">Leaderboard</h2>
          <span className="ml-auto text-xs text-gray-500">This week</span>
        </div>

        <div className="flex-1 space-y-2">
          {leaderboard.map((user, i) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + i * 0.07 + 0.2 }}
              className={`flex items-center gap-3 p-2 rounded-xl ${
                user.isYou ? "bg-cyan-400/8 border border-cyan-400/20" : "hover:bg-white/3"
              } transition-colors`}
            >
              <span
                className="text-xs font-bold w-5 text-center"
                style={{
                  color: user.rank === 1 ? "#F59E0B" : user.rank === 2 ? "#9CA3AF" : user.rank === 3 ? "#CD7C2F" : "#6B7280",
                }}
              >
                {user.rank === 1 ? <Medal size={14} /> : `#${user.rank}`}
              </span>

              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: `${user.color}30`, border: `1.5px solid ${user.color}50` }}
              >
                {user.avatar}
              </div>

              <span className="flex-1 text-xs text-gray-300 font-medium">
                {user.name}
                {user.isYou && (
                  <span className="ml-1.5 text-[9px] text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded-full">
                    You
                  </span>
                )}
              </span>

              <span className="text-xs font-semibold" style={{ color: user.color }}>
                {user.points.toLocaleString()} xp
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
