"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Network,
  Code2,
  Zap,
  Brain,
  Database,
  Globe,
  Lock,
  Terminal,
  Cpu,
  BookOpen,
  Rocket,
} from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import ProgressBar from "@/components/ui/ProgressBar";
import type { Course } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={20} />,
  Network: <Network size={20} />,
  Code2: <Code2 size={20} />,
  Zap: <Zap size={20} />,
  Brain: <Brain size={20} />,
  Database: <Database size={20} />,
  Globe: <Globe size={20} />,
  Lock: <Lock size={20} />,
  Terminal: <Terminal size={20} />,
  Cpu: <Cpu size={20} />,
  BookOpen: <BookOpen size={20} />,
  Rocket: <Rocket size={20} />,
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const accentColor = course.color_accent || "#22D3EE";
  const icon = iconMap[course.icon_name] || <BookOpen size={20} />;

  const progressLabel =
    course.progress >= 80
      ? "Almost done!"
      : course.progress >= 50
      ? "Halfway there"
      : course.progress >= 25
      ? "Good progress"
      : "Just started";

  return (
    <BentoCard
      className="min-h-[180px]"
      glowColor={accentColor}
      index={index}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 p-5 h-full flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div
            className="p-2 rounded-xl border"
            style={{
              background: `${accentColor}15`,
              borderColor: `${accentColor}30`,
              color: accentColor,
            }}
          >
            {icon}
          </div>

          <div className="flex flex-col items-end gap-1">
            {course.category && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: `${accentColor}15`,
                  color: accentColor,
                  border: `1px solid ${accentColor}25`,
                }}
              >
                {course.category}
              </span>
            )}
            <span className="text-xs text-gray-500">{progressLabel}</span>
          </div>
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
            {course.title}
          </h3>
          {course.instructor && (
            <p className="text-xs text-gray-500 mt-1">by {course.instructor}</p>
          )}
        </div>

        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {course.completed_lessons ?? "—"} / {course.total_lessons ?? "—"} lessons
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.6 }}
              className="text-xs font-bold"
              style={{ color: accentColor }}
            >
              {course.progress}%
            </motion.span>
          </div>
          <ProgressBar
            value={course.progress}
            color={accentColor}
            height={5}
            delay={index * 0.08}
          />
        </div>

        {/* Continue button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="w-full py-2 rounded-xl text-xs font-semibold transition-all duration-200 border"
          style={{
            background: `${accentColor}10`,
            color: accentColor,
            borderColor: `${accentColor}25`,
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = `${accentColor}20`;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = `${accentColor}10`;
          }}
        >
          Continue Learning →
        </motion.button>
      </div>
    </BentoCard>
  );
}
