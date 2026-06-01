-- ============================================
-- LearnOS Dashboard - Supabase Database Setup
-- ============================================
-- Run this in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard

-- 1. Create the courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL DEFAULT 'BookOpen',
  instructor TEXT,
  color_accent TEXT DEFAULT '#22D3EE',
  total_lessons INTEGER DEFAULT 20,
  completed_lessons INTEGER DEFAULT 0,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access (for the dashboard)
CREATE POLICY "Allow public read access on courses"
  ON courses FOR SELECT
  USING (true);

-- 4. Seed with sample data
INSERT INTO courses (title, progress, icon_name, instructor, color_accent, total_lessons, completed_lessons, category) VALUES
  ('Advanced React Patterns', 75, 'Layers', 'Sarah Chen', '#22D3EE', 24, 18, 'Frontend'),
  ('System Design Mastery', 42, 'Network', 'Alex Kumar', '#8B5CF6', 32, 13, 'Architecture'),
  ('TypeScript Deep Dive', 88, 'Code2', 'Maya Patel', '#10B981', 18, 16, 'Language'),
  ('Next.js App Router', 30, 'Zap', 'Jordan Lee', '#F59E0B', 20, 6, 'Framework');

-- 5. Verify the data
SELECT * FROM courses ORDER BY created_at DESC;
