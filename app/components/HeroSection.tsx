"use client";

import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Users, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Atmos Career Institute! I would like to enquire about PCM coaching for Classes 9-12."
    );
    window.open(`https://wa.me/918884768184?text=${text}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0a2756] text-white"
    >
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Atmospheric radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Floating Science & Math Badges */}
      <div className="hidden lg:block absolute top-28 left-[8%] animate-float pointer-events-none opacity-80">
        <div className="glass-card-dark px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-200 border border-cyan-500/30 flex items-center gap-2 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>E = mc² &nbsp;•&nbsp; Physics</span>
        </div>
      </div>

      <div className="hidden lg:block absolute top-44 right-[9%] animate-float-reverse pointer-events-none opacity-80">
        <div className="glass-card-dark px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-amber-200 border border-amber-500/30 flex items-center gap-2 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>∫ x·dx &nbsp;•&nbsp; Calculus</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-24 left-[12%] animate-float pointer-events-none opacity-80">
        <div className="glass-card-dark px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-blue-200 border border-blue-400/30 flex items-center gap-2 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>PV = nRT &nbsp;•&nbsp; Chemistry</span>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Badge: Online Coaching • Classes 9-12 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-100 text-xs sm:text-sm font-semibold backdrop-blur-md mb-8 hover:bg-blue-600/40 transition-colors">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span>Online Coaching</span>
          <span className="text-blue-300">•</span>
          <span className="text-amber-300 font-bold">Classes 9–12</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
          Expert Online{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 inline-block drop-shadow-sm">
            PCM Coaching
          </span>{" "}
          for Classes 9–12
        </h1>

        {/* Highlight strip */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-blue-200">
          <span className="px-3 py-1 rounded-md bg-blue-900/50 border border-blue-500/20">
            ICSE &amp; CBSE
          </span>
          <span className="hidden sm:inline text-blue-400">|</span>
          <span className="px-3 py-1 rounded-md bg-blue-900/50 border border-blue-500/20">
            Small Batches (10-12 Max)
          </span>
          <span className="hidden sm:inline text-blue-400">|</span>
          <span className="px-3 py-1 rounded-md bg-blue-900/50 border border-blue-500/20">
            Personalized Learning
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Learn Physics, Chemistry and Mathematics through interactive online classes with individual attention in every batch.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Primary: Book a Demo Class */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span>Book a Demo Class</span>
          </button>

          {/* Secondary: Enquire on WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-semibold text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-14 pt-8 border-t border-blue-400/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3 bg-blue-900/30 border border-blue-500/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Only 10-12</div>
              <div className="text-[11px] text-blue-200">Students / Batch</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-blue-900/30 border border-blue-500/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">98.4% Top Score</div>
              <div className="text-[11px] text-blue-200">Board Results 2024</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-blue-900/30 border border-blue-500/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Two-Way Live</div>
              <div className="text-[11px] text-blue-200">Active Mic & Video</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-blue-900/30 border border-blue-500/20 p-3 sm:p-3.5 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">1:1 Doubt Clearing</div>
              <div className="text-[11px] text-blue-200">Daily Personal Desk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
