import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnOS — Student Dashboard",
  description: "Next-generation learning platform with real-time progress tracking",
  keywords: ["learning", "education", "courses", "dashboard"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080B12] text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
