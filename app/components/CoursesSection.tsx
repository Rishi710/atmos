"use client";

import React, { useState } from "react";
import { Check, ArrowRight, BookOpen, Clock, Users, Sparkles, X, ChevronRight } from "lucide-react";

interface CoursesSectionProps {
  onOpenDemo: (targetClass: string) => void;
}

interface CourseDetails {
  id: string;
  classTitle: string;
  gradeNumber: string;
  isBoardYear: boolean;
  boardText: string;
  features: string[];
  description: string;
  curriculum: {
    physics: string[];
    chemistry: string[];
    math: string[];
  };
  schedule: string;
  seatsLeft: number;
}

const COURSES_DATA: CourseDetails[] = [
  {
    id: "class-9",
    classTitle: "Class 9",
    gradeNumber: "9",
    isBoardYear: false,
    boardText: "ICSE & CBSE",
    features: ["Physics", "Chemistry", "Mathematics"],
    description: "Build an unshakable conceptual foundation in 9th grade to make 10th board prep effortless.",
    curriculum: {
      physics: ["Motion & Laws of Force", "Gravitation & Floatation", "Work, Energy & Power", "Sound & Waves"],
      chemistry: ["Matter in Our Surroundings", "Atoms, Molecules & Mole Concept", "Structure of the Atom", "Chemical Reactions"],
      math: ["Number Systems & Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles, Circles & Quadrilaterals"],
    },
    schedule: "3 Days / Week • 90 mins per class",
    seatsLeft: 4,
  },
  {
    id: "class-10",
    classTitle: "Class 10",
    gradeNumber: "10",
    isBoardYear: true,
    boardText: "ICSE & CBSE",
    features: ["Physics", "Chemistry", "Mathematics"],
    description: "Comprehensive board examination prep with rigorous step-marking drills and 10-year PYQ mastery.",
    curriculum: {
      physics: ["Light: Reflection & Refraction", "Human Eye & Dispersion", "Electricity & Circuits", "Magnetic Effects of Current"],
      chemistry: ["Chemical Reactions & Equations", "Acids, Bases & Salts", "Metals & Non-Metals", "Carbon & Its Compounds"],
      math: ["Real Numbers & Polynomials", "Quadratic Equations & AP", "Trigonometry & Heights/Distances", "Surface Areas & Statistics"],
    },
    schedule: "4 Days / Week • 90 mins per class",
    seatsLeft: 2,
  },
  {
    id: "class-11",
    classTitle: "Class 11",
    gradeNumber: "11",
    isBoardYear: false,
    boardText: "ICSE & CBSE",
    features: ["PCM Foundation", "Advanced Problem Solving", "Numerical Mastery"],
    description: "Bridging the steep jump from Class 10 to 11 with intuitive derivations and high-level analytical thinking.",
    curriculum: {
      physics: ["Kinematics & Vectors", "Laws of Motion & Work-Energy", "Rotational Dynamics & Gravitation", "Thermodynamics & Waves"],
      chemistry: ["Some Basic Concepts (Stoichiometry)", "Structure of Atom & Periodic Table", "Chemical Bonding & Molecular Structure", "Hydrocarbons & Organic Principles"],
      math: ["Sets, Relations & Functions", "Trigonometric Functions", "Complex Numbers & Permutations", "Limits, Derivatives & Conic Sections"],
    },
    schedule: "4 Days / Week • 105 mins per class",
    seatsLeft: 3,
  },
  {
    id: "class-12",
    classTitle: "Class 12",
    gradeNumber: "12",
    isBoardYear: true,
    boardText: "ICSE & CBSE",
    features: ["Board Exam Preparation", "Full Syllabus Revisions", "Weekly Mock Test Series"],
    description: "Targeting 95%+ in PCM board examinations with strategic chapter weighting and disciplined answer writing.",
    curriculum: {
      physics: ["Electrostatics & Capacitors", "Current Electricity & Magnetism", "Electromagnetic Waves & Ray Optics", "Wave Optics & Modern Physics"],
      chemistry: ["Solutions & Electrochemistry", "Chemical Kinetics & d/f-Block", "Haloalkanes & Alcohols/Phenols", "Aldehydes, Ketones & Biomolecules"],
      math: ["Relations, Functions & Inverse Trig", "Matrices & Determinants", "Continuity, Differentiability & Integrals", "Vectors, 3D Geometry & Probability"],
    },
    schedule: "5 Days / Week • 105 mins per class",
    seatsLeft: 2,
  },
];

export function CoursesSection({ onOpenDemo }: CoursesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Image 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>COURSES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2B61] tracking-tight">
            Courses We Offer
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            PCM coaching tailored to exactly where your child is — from foundation building to board exam preparation.
          </p>
        </div>

        {/* 4 Cards Grid - Matches Image 1 layout with Navy Header banners and warm board badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Top: Header Banner & Badges */}
              <div>
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    {/* Dark Blue Grade Title Badge */}
                    <div className="px-4 py-2 rounded-xl bg-[#004A8F] text-white font-bold text-base sm:text-lg tracking-tight shadow-sm">
                      {course.classTitle}
                    </div>

                    {/* Board Year Badge (if applicable, as in image 1) */}
                    {course.isBoardYear ? (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wide shadow-sm animate-pulse-subtle">
                        Board Year
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 text-[11px] font-semibold">
                        Foundation
                      </span>
                    )}
                  </div>

                  {/* Board Tag */}
                  <div className="mt-5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {course.boardText}
                  </div>

                  {/* Feature checkmarks from the image */}
                  <div className="mt-4 space-y-2.5">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Batch info & Action buttons */}
              <div className="p-6 pt-0 space-y-3">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    Max 12 Seats
                  </span>
                  <span className="font-semibold text-amber-600">
                    {course.seatsLeft} seats left
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors text-center cursor-pointer"
                  >
                    Syllabus
                  </button>
                  <button
                    onClick={() => onOpenDemo(course.gradeNumber)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-all text-center cursor-pointer"
                  >
                    Book Demo
                  </button>
                </div>

                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full text-center text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center justify-center gap-1 group/btn cursor-pointer py-1"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Syllabus & Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#004A8F] px-6 py-5 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{selectedCourse.classTitle} PCM Curriculum</h3>
                  {selectedCourse.isBoardYear && (
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-bold uppercase">
                      Board Target
                    </span>
                  )}
                </div>
                <p className="text-xs text-blue-100 mt-1">
                  Structured syllabus coverage for {selectedCourse.boardText} boards
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Batch Schedule:</span>
                  <span className="font-bold text-slate-800 ml-2">{selectedCourse.schedule}</span>
                </div>
                <div>
                  <span className="text-slate-500">Batch Size:</span>
                  <span className="font-bold text-blue-800 ml-2">Strictly 10-12 Students Only</span>
                </div>
              </div>

              {/* Subject breakdowns */}
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Physics Chapters Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedCourse.curriculum.physics.map((ch, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-cyan-900 flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                    Chemistry Chapters Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedCourse.curriculum.chemistry.map((ch, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                    Mathematics Chapters Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedCourse.curriculum.math.map((ch, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                ⚡ Only {selectedCourse.seatsLeft} seats remaining in upcoming batch
              </span>
              <button
                onClick={() => {
                  const grade = selectedCourse.gradeNumber;
                  setSelectedCourse(null);
                  onOpenDemo(grade);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20"
              >
                Book Free Demo for {selectedCourse.classTitle}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
