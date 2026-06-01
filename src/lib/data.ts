import { createClient } from "@/lib/supabase/server";
import type { Course, ActivityDay, UserStats } from "@/types";

export async function getCourses(): Promise<Course[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error.message);
    // Return fallback data so UI doesn't break
    return getFallbackCourses();
  }

  return data as Course[];
}

// Fallback data if Supabase isn't configured yet
function getFallbackCourses(): Course[] {
  return [
    {
      id: "1",
      title: "Advanced React Patterns",
      progress: 75,
      icon_name: "Layers",
      created_at: new Date().toISOString(),
      instructor: "Sarah Chen",
      color_accent: "#22D3EE",
      total_lessons: 24,
      completed_lessons: 18,
      category: "Frontend",
    },
    {
      id: "2",
      title: "System Design Mastery",
      progress: 42,
      icon_name: "Network",
      created_at: new Date().toISOString(),
      instructor: "Alex Kumar",
      color_accent: "#8B5CF6",
      total_lessons: 32,
      completed_lessons: 13,
      category: "Architecture",
    },
    {
      id: "3",
      title: "TypeScript Deep Dive",
      progress: 88,
      icon_name: "Code2",
      created_at: new Date().toISOString(),
      instructor: "Maya Patel",
      color_accent: "#10B981",
      total_lessons: 18,
      completed_lessons: 16,
      category: "Language",
    },
    {
      id: "4",
      title: "Next.js App Router",
      progress: 30,
      icon_name: "Zap",
      created_at: new Date().toISOString(),
      instructor: "Jordan Lee",
      color_accent: "#F59E0B",
      total_lessons: 20,
      completed_lessons: 6,
      category: "Framework",
    },
  ];
}

export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const today = new Date();

  for (let i = 90; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const rand = Math.random();
    const count = rand < 0.3 ? 0 : Math.floor(rand * 8);
    const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;
    days.push({
      date: date.toISOString().split("T")[0],
      count,
      level: level as ActivityDay["level"],
    });
  }

  return days;
}

export function getUserStats(): UserStats {
  return {
    streak: 14,
    totalHours: 127,
    completedCourses: 8,
    points: 4250,
  };
}
