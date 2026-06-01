"use client";

import { motion } from "framer-motion";
import { Flame, Star, TrendingUp, Clock } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import type { UserStats } from "@/types";

interface HeroTileProps {
  stats: UserStats;
  index?: number;
}

export default function HeroTile({ stats, index = 0 }: HeroTileProps) {
  const hours = new Date().getHours();
  const greeting =
    hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";

  return (
    <BentoCard
      className="lg:col-span-2 min-h-[200px]"
      glowColor="rgba(34,211,238,0.3)"
      index={index}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-400 font-medium mb-1"
          >
            {greeting} 👋
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Alex
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-2 text-sm"
          >
            You&apos;re on fire! Keep up the momentum today.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mt-6"
        >
          {/* Streak */}
          <div className="flex items-center gap-2 bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-xl px-4 py-2.5">
            <div className="relative">
              <Flame size={18} className="text-amber-400" />
              <div className="absolute inset-0 text-amber-400 blur-sm opacity-60">
                <Flame size={18} />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 leading-none">Streak</p>
              <p className="text-sm font-bold text-white leading-tight">
                {stats.streak} days
              </p>
            </div>
          </div>

          {/* Points */}
          <div className="flex items-center gap-2 bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-xl px-4 py-2.5">
            <Star size={18} className="text-violet-400" />
            <div>
              <p className="text-xs text-gray-500 leading-none">XP Points</p>
              <p className="text-sm font-bold text-white leading-tight">
                {stats.points.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-2 bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-xl px-4 py-2.5">
            <Clock size={18} className="text-cyan-400" />
            <div>
              <p className="text-xs text-gray-500 leading-none">Total Hours</p>
              <p className="text-sm font-bold text-white leading-tight">
                {stats.totalHours}h
              </p>
            </div>
          </div>

          {/* Courses */}
          <div className="flex items-center gap-2 bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-xl px-4 py-2.5">
            <TrendingUp size={18} className="text-emerald-400" />
            <div>
              <p className="text-xs text-gray-500 leading-none">Completed</p>
              <p className="text-sm font-bold text-white leading-tight">
                {stats.completedCourses} courses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </BentoCard>
  );
}
