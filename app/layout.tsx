// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajkumar Sanjay | Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

