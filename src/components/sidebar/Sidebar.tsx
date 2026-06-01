"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Trophy,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Zap,
  User,
  Search,
} from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", href: "/" },
  { id: "courses", label: "My Courses", icon: "BookOpen", href: "/courses" },
  { id: "analytics", label: "Analytics", icon: "BarChart2", href: "/analytics" },
  { id: "achievements", label: "Achievements", icon: "Trophy", href: "/achievements" },
  { id: "notifications", label: "Notifications", icon: "Bell", href: "/notifications" },
  { id: "settings", label: "Settings", icon: "Settings", href: "/settings" },
];

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={18} />,
  BookOpen: <BookOpen size={18} />,
  BarChart2: <BarChart2 size={18} />,
  Trophy: <Trophy size={18} />,
  Bell: <Bell size={18} />,
  Settings: <Settings size={18} />,
};

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden lg:flex flex-col border-r border-[#1F2937] shrink-0 overflow-hidden relative z-20"
        style={{ background: "#0A0E17" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-[#1F2937] h-16">
          <div className="relative w-8 h-8 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 blur-md opacity-50" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="font-bold text-lg tracking-tight text-white whitespace-nowrap"
              >
                Learn<span className="text-cyan-400">OS</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Search */}
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-3 pt-3"
            >
              <div className="flex items-center gap-2 bg-[#111827] border border-[#1F2937] rounded-lg px-3 py-2">
                <Search size={14} className="text-gray-500" />
                <span className="text-sm text-gray-500">Search courses...</span>
                <span className="ml-auto text-xs text-gray-600 bg-[#1F2937] px-1.5 py-0.5 rounded">⌘K</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nav Items */}
        <nav className="flex-1 p-3 space-y-1 mt-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActive(item.id)}
              whileTap={{ scale: 0.97 }}
              className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors duration-150"
              style={{
                color: active === item.id ? "#22D3EE" : "#9CA3AF",
              }}
            >
              {/* Active background */}
              {active === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(139,92,246,0.08) 100%)",
                    border: "1px solid rgba(34,211,238,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <span className="relative z-10 shrink-0">{iconMap[item.icon]}</span>

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10 text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {item.id === "notifications" && !collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 ml-auto text-xs bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded-full font-medium"
                >
                  3
                </motion.span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* User profile */}
        <div className="p-3 border-t border-[#1F2937]">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#111827] transition-colors cursor-pointer">
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0A0E17]" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.15 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-white truncate">Alex Johnson</p>
                  <p className="text-xs text-gray-500 truncate">Pro Member</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-[#1F2937] border border-[#374151] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-30"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </motion.aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0E17]/95 backdrop-blur-xl border-t border-[#1F2937] px-2 py-2">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-colors"
              style={{ color: active === item.id ? "#22D3EE" : "#6B7280" }}
            >
              {active === item.id && (
                <motion.div
                  layoutId="activeMobileNav"
                  className="absolute inset-0 bg-cyan-400/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {iconMap[item.icon]}
              <span className="text-[10px] font-medium">{item.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
