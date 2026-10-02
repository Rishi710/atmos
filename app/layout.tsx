import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Atmos Career Institute | Expert Online PCM Coaching (Classes 9-12)",
  description:
    "Physics, Chemistry & Mathematics coaching for ICSE & CBSE students. Ultra-small batches capped at 10-12 students, live interactive problem-solving, and personal mentorship.",
  keywords: [
    "Atmos Career Institute",
    "PCM Coaching",
    "Online Coaching Classes 9-12",
    "ICSE Class 10 PCM",
    "CBSE Class 12 PCM",
    "Small Batch Tuition",
    "Physics Chemistry Maths Coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
