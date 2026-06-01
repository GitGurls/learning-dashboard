export default function CoursesGridSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-[#1F2937] bg-[#0D1117] min-h-[180px] p-5 space-y-4"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {/* Icon + badge */}
          <div className="flex items-start justify-between">
            <div className="skeleton w-9 h-9 rounded-xl" />
            <div className="skeleton w-16 h-5 rounded-full" />
          </div>
          {/* Title */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-2/3 rounded" />
          </div>
          {/* Progress */}
          <div className="space-y-1.5 mt-auto">
            <div className="flex justify-between">
              <div className="skeleton h-3 w-24 rounded" />
              <div className="skeleton h-3 w-8 rounded" />
            </div>
            <div className="skeleton h-1.5 w-full rounded-full" />
          </div>
          {/* Button */}
          <div className="skeleton h-8 w-full rounded-xl" />
        </div>
      ))}
    </>
  );
}
