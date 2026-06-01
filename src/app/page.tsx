import { Suspense } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import HeroTile from "@/components/dashboard/HeroTile";
import StatsTile from "@/components/dashboard/StatsTile";
import CoursesGrid from "@/components/dashboard/CoursesGrid";
import ActivityTile from "@/components/dashboard/ActivityTile";
import LeaderboardTile from "@/components/dashboard/LeaderboardTile";
import GoalsTile from "@/components/dashboard/GoalsTile";
import CoursesGridSkeleton from "@/components/ui/CoursesGridSkeleton";
import { generateActivityData, getUserStats } from "@/lib/data";

export const revalidate = 60; // Revalidate every 60 seconds

export default function DashboardPage() {
  const stats = getUserStats();
  const activity = generateActivityData();

  return (
    <div className="flex h-screen bg-[#080B12] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto pb-20 lg:pb-6">
          <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Row 1: Hero (2/3) + Stats (1/3) */}
              <HeroTile stats={stats} index={0} />
              <StatsTile stats={stats} index={1} />

              {/* Row 2: Dynamic Course tiles (Suspense boundary) */}
              <Suspense fallback={<CoursesGridSkeleton />}>
                <CoursesGrid />
              </Suspense>

              {/* Row 3: Activity (2/3) + Goals (1/3) */}
              <ActivityTile data={activity} index={8} />
              <GoalsTile index={9} />

              {/* Row 4: Leaderboard */}
              <LeaderboardTile index={10} />

              {/* Quick access tile */}
              <QuickAccessTile index={11} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

// Inline quick access tile
function QuickAccessTile({ index }: { index: number }) {
  const items = [
    { label: "Resume Last Lesson", sub: "Advanced React Patterns • Ch. 7", color: "#22D3EE" },
    { label: "Upcoming: Live Q&A", sub: "Tomorrow, 7:00 PM IST", color: "#8B5CF6" },
    { label: "New: Next.js 15 Guide", sub: "Just added • 45 min read", color: "#10B981" },
  ];

  return (
    <div
      className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5 flex flex-col gap-3"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <h2 className="text-sm font-semibold text-white">Quick Access</h2>
      <div className="flex-1 space-y-2">
        {items.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/4 border border-transparent hover:border-white/8 transition-all text-left group"
          >
            <div
              className="w-1 h-8 rounded-full shrink-0"
              style={{ background: item.color }}
            />
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-200 truncate group-hover:text-white transition-colors">
                {item.label}
              </p>
              <p className="text-[10px] text-gray-500 truncate">{item.sub}</p>
            </div>
            <span className="ml-auto text-gray-600 group-hover:text-gray-400 text-sm transition-colors">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
