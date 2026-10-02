"use client";

import React, { useState } from "react";
import { Star, Award, CheckCircle2, Quote, Sparkles } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Ananya Sengupta",
      role: "Student • Class 10 ICSE",
      score: "98.4%",
      board: "ICSE Board Topper",
      quote:
        "Before Atmos, Chemistry numericals and Physics ray diagrams used to terrify me. In our batch of just 11 students, Sir stopped and explained every derivation until all of us got it right. My board score speaks for itself!",
      tags: ["Physics 99", "Chemistry 98", "Maths 98"],
    },
    {
      name: "Kabir V. Nair",
      role: "Student • Class 12 CBSE",
      score: "97.2%",
      board: "CBSE Board",
      quote:
        "The step-marking practice and weekly test series prepared me for the exact format of the board examiners. I didn't lose unnecessary marks in presentation. Best decision to join Atmos instead of 100-student coaching apps.",
      tags: ["Maths 99", "Physics 97", "Chemistry 96"],
    },
    {
      name: "Mrs. Meenakshi Sundaram",
      role: "Parent of Rohan (Class 10 CBSE)",
      score: "96.6%",
      board: "Parent Testimonial",
      quote:
        "What I truly value is the transparency. In large institutes, teachers never even knew my son was struggling with Trigonometry. Here, the mentor called us personally and fixed his basics in 3 weeks. Genuine care and discipline.",
      tags: ["1:1 Mentor Followup", "Consistent Improvement"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>STUDENT SUCCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2B61] tracking-tight">
            Real Students. Real Board Results.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how individual mentorship in small batches consistently translates into 90%+ scores in ICSE &amp; CBSE board examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    {item.score}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic relative">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-lg">
                  {item.board}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
