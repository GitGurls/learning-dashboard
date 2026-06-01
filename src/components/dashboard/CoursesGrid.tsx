import { getCourses } from "@/lib/data";
import CourseCard from "@/components/dashboard/CourseCard";

export default async function CoursesGrid() {
  const courses = await getCourses();

  if (!courses.length) {
    return (
      <div className="lg:col-span-3 flex items-center justify-center h-40 rounded-2xl border border-dashed border-[#1F2937] text-gray-500 text-sm">
        No courses found. Add some in your Supabase database!
      </div>
    );
  }

  return (
    <>
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i + 3} />
      ))}
    </>
  );
}
