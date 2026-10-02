"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the small batch size of 10-12 benefit my child?",
      a: "In conventional online coaching with 100+ students, children hesitate to speak and their chat queries are buried. In Atmos batches of 10-12 students, the mentor knows each student's name, checks their handwriting on screen, monitors homework completion, and directly asks students to explain steps.",
    },
    {
      q: "Do you have separate batches for ICSE and CBSE?",
      a: "Yes, absolutely! ICSE and CBSE have noticeably distinct syllabi, question patterns, and marking schemes (especially in Physics & Chemistry). We never merge the boards into a generic combined class. ICSE students study with ICSE peers, and CBSE students with CBSE peers.",
    },
    {
      q: "What happens if a student misses a scheduled live class?",
      a: "Every live session is automatically recorded in HD and uploaded to the student portal within 2 hours. If a concept remains unclear after watching the recording, the student can schedule a 15-minute 1:1 catch-up with the mentor before the next class.",
    },
    {
      q: "Is there any fee or commitment for the Demo Class?",
      a: "None whatsoever. The demo class is 100% free. Your child attends an actual live session with our senior PCM faculty so you can experience the interactive teaching style before making any enrollment decision.",
    },
    {
      q: "How often are tests conducted and reports shared with parents?",
      a: "We conduct chapter-end diagnostic tests and bi-weekly subjective tests designed strictly in board format. Detailed progress reports highlighting accuracy, time management, and specific weak sub-topics are shared with parents every month along with a 1-on-1 mentor discussion.",
    },
    {
      q: "What study materials and practice papers are provided?",
      a: "Enrolled students receive our comprehensive PCM Master Workbooks, chapter-wise formula summary cheatsheets, 10-year topic-wise Previous Year Questions (PYQs) with step-by-step model answers, and board specimen papers.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2B61] tracking-tight">
            Everything You Need to Know
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Clear answers about our online PCM batches, schedules, and learning pedagogy.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/20 shadow-md shadow-blue-900/5"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
