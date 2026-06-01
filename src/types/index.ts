export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
  instructor?: string;
  color_accent?: string;
  total_lessons?: number;
  completed_lessons?: number;
  category?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface ActivityDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface UserStats {
  streak: number;
  totalHours: number;
  completedCourses: number;
  points: number;
}

export interface DashboardData {
  courses: Course[];
  stats: UserStats;
  activity: ActivityDay[];
}
