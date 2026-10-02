"use client";

import React, { useState } from "react";
import { Atom, FlaskConical, Binary, Check, Sparkles, UserCheck, ShieldAlert, Award } from "lucide-react";

export function AboutSection() {
  const [activeSubject, setActiveSubject] = useState<"physics" | "chemistry" | "maths">("chemistry");

  const subjects = [
    {
      id: "physics" as const,
      name: "Physics",
      borderColor: "border-t-blue-600",
      accentBg: "bg-blue-50 text-blue-700",
      icon: Atom,
      tagline: "From Visual Intuition to Mathematical Rigor",
      topics: ["Newtonian Mechanics", "Optics & Ray Diagrams", "Current Electricity", "Electromagnetic Induction"],
      formula: "F = ma &nbsp;|&nbsp; V = IR &nbsp;|&nbsp; E = -dΦ/dt",
      quote: "No memorizing without understanding the underlying physical principle.",
      rotation: "-rotate-6 hover:-rotate-2",
      zIndex: "z-10",
      offset: "translate-x-0 md:-translate-x-6",
    },
    {
      id: "chemistry" as const,
      name: "Chemistry",
      borderColor: "border-t-cyan-500",
      accentBg: "bg-cyan-50 text-cyan-700",
      icon: FlaskConical,
      tagline: "Master Reactions & Equations Without Fear",
      topics: ["Organic Reaction Mechanisms", "Stoichiometry & Mole Concept", "Periodic Table Trends", "Thermodynamics"],
      formula: "PV = nRT &nbsp;|&nbsp; pH = -log[H⁺] &nbsp;|&nbsp; ΔG = ΔH - TΔS",
      quote: "Learn how electrons move so reactions make logical sense, not rote cramming.",
      rotation: "rotate-0",
      zIndex: "z-20",
      offset: "translate-x-0",
    },
    {
      id: "maths" as const,
      name: "Mathematics",
      borderColor: "border-t-amber-500",
      accentBg: "bg-amber-50 text-amber-800",
      icon: Binary,
      tagline: "Step-by-Step Problem Solving Mastery",
      topics: ["Calculus & Integrals", "Trigonometric Identities", "Coordinate Geometry", "Vectors & 3D"],
      formula: "d/dx(xⁿ) = n·xⁿ⁻¹ &nbsp;|&nbsp; sin²θ + cos²θ = 1",
      quote: "Build confidence with structured proofs and board-prescribed presentation techniques.",
      rotation: "rotate-6 hover:rotate-2",
      zIndex: "z-10",
      offset: "translate-x-0 md:translate-x-6",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Fanned Cards (Physics, Chemistry, Maths) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Subject Selector Buttons for Mobile */}
            <div className="flex md:hidden items-center justify-center gap-2 mb-6">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubject(sub.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeSubject === sub.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>

            {/* Fanned 3D Perspective Deck */}
            <div className="relative w-full max-w-sm sm:max-w-md h-[400px] flex items-center justify-center">
              {subjects.map((subj) => {
                const Icon = subj.icon;
                const isSelected = activeSubject === subj.id;

                return (
                  <div
                    key={subj.id}
                    onClick={() => setActiveSubject(subj.id)}
                    className={`absolute w-72 sm:w-80 h-[380px] bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 border-t-8 ${
                      subj.borderColor
                    } transition-all duration-500 cursor-pointer transform ${
                      isSelected
                        ? "scale-105 z-30 shadow-2xl ring-2 ring-blue-500/20 translate-y-[-10px]"
                        : `${subj.rotation} ${subj.zIndex} ${subj.offset} opacity-85 hover:opacity-100 hover:scale-100`
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${subj.accentBg}`}>
                        {subj.name}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mt-4 leading-tight">
                      {subj.tagline}
                    </h4>

                    <div
                      className="my-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-mono text-[11px] text-slate-600 text-center tracking-tight"
                      dangerouslySetInnerHTML={{ __html: subj.formula }}
                    />

                    <div className="space-y-2 mt-4">
                      <div className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                        Core Focus Topics
                      </div>
                      {subj.topics.slice(0, 3).map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] italic text-slate-500">
                      "{subj.quote}"
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-400 mt-4 text-center">
              💡 Tap any card to explore subject mentorship strategy
            </p>
          </div>

          {/* Right Column: About Content Matching Image 5 */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag: ABOUT US */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>ABOUT US</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Learn Smarter.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                Perform Better.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Atmos Career Institute provides focused online coaching for students of Classes 9 to 12 in Physics, Chemistry and Mathematics. Small batches ensure every student receives individual attention and consistent academic support.
            </p>

            {/* Highlighted italic callout from image */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-blue-50/70 border border-amber-200/80 shadow-sm">
              <p className="text-base sm:text-lg font-medium text-amber-900 italic">
                “Every student gets noticed here — batches stay capped at 10-12.”
              </p>
            </div>

            {/* Key Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Direct Teacher Contact</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Ask doubts verbally, on-screen, or post questions anytime on your dedicated batch group.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Board Exam Precision</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Detailed step-marking schemes and answer presentation training for ICSE and CBSE boards.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
