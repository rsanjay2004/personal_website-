// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";  // ✅ THIS IS IMPORTANT

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
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}