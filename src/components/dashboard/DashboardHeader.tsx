"use client";

import { motion } from "framer-motion";
import { Bell, Search, Menu } from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#1F2937] bg-[#080B12]/80 backdrop-blur-xl"
    >
      {/* Mobile menu + title */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-gray-400 transition-colors">
          <Menu size={18} />
        </button>
        <div>
          <h1 className="text-base font-semibold text-white">Dashboard</h1>
          <p className="text-xs text-gray-500 hidden sm:block">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Search button */}
        <button className="hidden sm:flex items-center gap-2 bg-[#111827] border border-[#1F2937] rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors">
          <Search size={14} />
          <span className="text-xs">Search...</span>
          <kbd className="text-[10px] bg-[#1F2937] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </button>

        {/* Avatar */}
        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
          AJ
        </button>
      </div>
    </motion.header>
  );
}
