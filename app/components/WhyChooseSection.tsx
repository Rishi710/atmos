"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  BookOpenCheck,
  Users2,
  Video,
  HelpCircle,
  ClipboardCheck,
  Sparkles,
  CheckCircle2,
  XCircle,
  Play,
  Volume2,
  MessageCircle,
} from "lucide-react";

export function WhyChooseSection() {
  const [activeTab, setActiveTab] = useState<"cards" | "compare">("cards");

  const features = [
    {
      icon: GraduationCap,
      iconColor: "text-amber-600 bg-amber-100",
      title: "Experienced PCM Guidance",
      description:
        "Learn from mentors focused exclusively on Physics, Chemistry and Mathematics for ICSE & CBSE.",
      badge: "Subject Specialists",
    },
    {
      icon: BookOpenCheck,
      iconColor: "text-blue-600 bg-blue-100",
      title: "ICSE & CBSE Curriculum",
      description:
        "Lessons mapped closely to your board's syllabus, weightage and exam pattern.",
      badge: "100% Board Aligned",
    },
    {
      icon: Users2,
      iconColor: "text-indigo-600 bg-indigo-100",
      title: "Only 10-12 Students per Batch",
      description:
        "Small batches mean the teacher actually knows your name — and your weak topics.",
      badge: "Strict Cap",
    },
    {
      icon: Video,
      iconColor: "text-cyan-600 bg-cyan-100",
      title: "Interactive Online Classes",
      description:
        "Live, two-way sessions with questions and on-screen problem solving — not recorded broadcasts.",
      badge: "2-Way Live Audio & Video",
    },
    {
      icon: HelpCircle,
      iconColor: "text-rose-600 bg-rose-100",
      title: "Regular Doubt Solving",
      description:
        "Dedicated doubt-clearing sessions so no concept is left half-understood.",
      badge: "Zero Unsolved Doubts",
    },
    {
      icon: ClipboardCheck,
      iconColor: "text-emerald-600 bg-emerald-100",
      title: "Periodic Assessments",
      description:
        "Regular tests and report cards keep students sharp and parents aware of real progress.",
      badge: "Bi-Weekly Testing",
    },
  ];

  const comparisons = [
    {
      feature: "Batch Size",
      atmos: "Strictly 10–12 Students (Max)",
      others: "80 to 200+ Students in mega webinar",
      advantage: true,
    },
    {
      feature: "Student Interaction",
      others: "Chat box only, often turned off or flooded",
      atmos: "Unrestricted mic access & on-screen solving",
      advantage: true,
    },
    {
      feature: "Doubt Resolution",
      others: "Automated bots or junior assistant TAs",
      atmos: "Solved live in-session by your master mentor",
      advantage: true,
    },
    {
      feature: "Curriculum Focus",
      others: "Generic combined syllabus missing board nuances",
      atmos: "Rigorous ICSE & CBSE step-marking breakdown",
      advantage: true,
    },
    {
      feature: "Parent Updates",
      others: "Generic automated SMS or silence",
      atmos: "Personal monthly review calls with teacher",
      advantage: true,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Image 4 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2B61] tracking-tight">
            Why Choose Atmos?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything we do is built around one goal — helping PCM students genuinely understand concepts and perform better in exams.
          </p>

          {/* Toggle between Grid View & Comparison Table */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "cards"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Key Features Overview
            </button>
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "compare"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Atmos vs Mega Institutes
            </button>
          </div>
        </div>

        {activeTab === "cards" ? (
          /* 6 Feature Cards Grid Matching Image 4 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.iconColor}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B2B61] group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                    <span className="group-hover:translate-x-1 transition-transform">✓ Guaranteed Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Comparison Table */
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Small-Batch Excellence vs Large Coaching Apps</h3>
                <p className="text-xs text-slate-300">Why personal mentorship creates board toppers</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisons.map((row, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-3 items-center hover:bg-slate-50/80 transition-colors">
                  <div className="sm:col-span-4 font-bold text-sm text-slate-800">
                    {row.feature}
                  </div>
                  <div className="sm:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-emerald-800 font-semibold bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.atmos}</span>
                  </div>
                  <div className="sm:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-rose-700 bg-rose-50/50 p-2.5 rounded-xl border border-rose-100">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Class Simulator Widget */}
        <div className="mt-16 bg-gradient-to-br from-[#0B2545] to-[#133E6E] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Classroom Simulator
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                See How an Atmos PCM Class Actually Feels
              </h3>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                No silent lectures. Students interact live with the teacher, solve problems step-by-step on shared digital paper, and get immediate feedback.
              </p>
              
              <div className="space-y-2 pt-2 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real-time tablet handwriting and formula derivations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Only 10 other classmates — never feel hesitant to speak</span>
                </div>
              </div>
            </div>

            {/* Interactive Screen Preview */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-blue-400/20 p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 font-mono text-slate-400">Atmos Live Room: Batch 10-A (CBSE)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>Audio: Active</span>
                </div>
              </div>

              {/* Whiteboard area */}
              <div className="py-6 px-4 bg-slate-950/60 rounded-xl my-3 font-mono text-xs text-blue-200 space-y-2 border border-blue-900/40">
                <div className="text-amber-400 font-bold"># Topic: Optics - Snell&apos;s Law &amp; Refractive Index</div>
                <div className="text-slate-300">Formula: <span className="text-emerald-400">n₁ · sin(θ₁) = n₂ · sin(θ₂)</span></div>
                <div className="text-slate-400 text-[11px]">
                  Teacher Note: &quot;Aryan, remember to convert angle to normal if given with surface!&quot;
                </div>
              </div>

              {/* Student questions snippet */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">
                      A
                    </span>
                    <span className="text-slate-200">Aryan S.: &quot;Sir, what if light enters normally at 90°?&quot;</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-medium">Answered verbally</span>
                </div>

                <div className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[10px]">
                      P
                    </span>
                    <span className="text-slate-200">Pooja M.: &quot;Got it sir, the ray continues undeviated.&quot;</span>
                  </div>
                  <span className="text-[10px] text-blue-300">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
