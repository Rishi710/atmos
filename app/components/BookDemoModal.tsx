"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Send, PhoneCall, Calendar, Clock, BookOpen } from "lucide-react";
import confetti from "canvas-confetti";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass?: string;
}

export function BookDemoModal({ isOpen, onClose, defaultClass = "10" }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    targetClass: defaultClass,
    board: "CBSE",
    preferredTime: "Evening (5:30 PM - 7:00 PM)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Fallback gracefully if canvas isn't available
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Atmos Career Institute! I want to book a Free Demo Class.\n\n👤 Name: ${formData.name || "Student"}\n📱 Phone: ${formData.phone}\n🎓 Class: Class ${formData.targetClass} (${formData.board})\n⏰ Preferred Slot: ${formData.preferredTime}\n📝 Notes: ${formData.message || "None"}`
    );
    window.open(`https://wa.me/918884768184?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </span>
            <div>
              <h3 className="text-lg font-bold">Book a Free Live Demo Class</h3>
              <p className="text-xs text-blue-100">Experience our 10-12 student small batch mentorship</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Demo Class Reserved!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our academic counselor will call{" "}
                <strong className="text-slate-800">+91 {formData.phone}</strong> shortly to confirm your batch timing and send the live class link.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-left text-xs space-y-1.5 text-blue-900">
                <div className="flex justify-between">
                  <span className="text-blue-700">Enrolled For:</span>
                  <span className="font-semibold">Class {formData.targetClass} ({formData.board})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Batch Type:</span>
                  <span className="font-semibold">Interactive Small Batch (Max 12)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Subjects:</span>
                  <span className="font-semibold">Physics, Chemistry, Maths (PCM)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
                >
                  Confirm on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Student / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma / Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  10-Digit Mobile Number (WhatsApp) *
                </label>
                <div className="flex rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent overflow-hidden">
                  <span className="inline-flex items-center px-3 bg-slate-50 border-r border-slate-200 text-slate-600 text-xs font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="9888476818"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                    }
                    className="w-full px-3.5 py-2.5 focus:outline-none text-sm text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Class
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 bg-white"
                  >
                    <option value="9">Class 9</option>
                    <option value="10">Class 10 (Board)</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12 (Board)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Board
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(["CBSE", "ICSE"] as const).map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, board: b })}
                        className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                          formData.board === b
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 bg-white"
                >
                  <option value="Evening (5:30 PM - 7:00 PM)">Evening (5:30 PM - 7:00 PM)</option>
                  <option value="Night (7:15 PM - 8:45 PM)">Night (7:15 PM - 8:45 PM)</option>
                  <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specific Questions / Weak Chapters (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need extra help in Optics & Calculus..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Reserving Your Seat...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Free Demo Class</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 No spam guaranteed. We only use your number to coordinate the demo class link.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
