export default function Loading() {
  return (
    <div className="flex h-screen bg-[#080B12] overflow-hidden">
      {/* Sidebar skeleton */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-[#1F2937] p-4 gap-3 shrink-0">
        {/* Logo */}
        <div className="skeleton h-10 w-32 rounded-lg mb-6" />
        {/* Nav items */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton h-10 w-full rounded-lg" />
        ))}
        <div className="mt-auto skeleton h-12 w-full rounded-xl" />
      </aside>

      {/* Main content skeleton */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="skeleton h-8 w-48 rounded-lg mb-2" />
        <div className="skeleton h-5 w-72 rounded-lg mb-8" />

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Hero tile */}
          <div className="skeleton lg:col-span-2 h-48 rounded-2xl" />
          {/* Stats tile */}
          <div className="skeleton h-48 rounded-2xl" />
          {/* Course tiles */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-44 rounded-2xl" />
          ))}
          {/* Activity tile */}
          <div className="skeleton lg:col-span-2 h-44 rounded-2xl" />
          {/* Leaderboard tile */}
          <div className="skeleton h-44 rounded-2xl" />
        </div>
      </main>
    </div>
  );
}
