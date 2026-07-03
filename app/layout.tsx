import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Path Visualizer",
  description: "A flexible high school, college, and career planner for students still exploring possibilities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
