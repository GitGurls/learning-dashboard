"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2 } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import ProgressBar from "@/components/ui/ProgressBar";

const goals = [
  { label: "Complete 1 lesson", done: true },
  { label: "30 min study session", done: true },
  { label: "Review flashcards", done: false },
  { label: "Watch recorded lecture", done: false },
];

interface GoalsTileProps {
  index?: number;
}

export default function GoalsTile({ index = 0 }: GoalsTileProps) {
  const completed = goals.filter((g) => g.done).length;
  const pct = Math.round((completed / goals.length) * 100);

  return (
    <BentoCard glowColor="rgba(16,185,129,0.25)" index={index} className="min-h-[180px]">
      <div className="p-5 h-full flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Target size={16} className="text-emerald-400" />
          <h2 className="text-sm font-semibold text-white">Daily Goals</h2>
          <span className="ml-auto text-xs font-semibold text-emerald-400">{completed}/{goals.length}</span>
        </div>

        <ProgressBar value={pct} color="#10B981" height={4} delay={index * 0.08} />

        <div className="flex-1 space-y-2">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + i * 0.06 + 0.3 }}
              className="flex items-center gap-2.5"
            >
              <CheckCircle2
                size={14}
                className={goal.done ? "text-emerald-400" : "text-gray-600"}
              />
              <span
                className={`text-xs ${goal.done ? "text-gray-400 line-through" : "text-gray-300"}`}
              >
                {goal.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
