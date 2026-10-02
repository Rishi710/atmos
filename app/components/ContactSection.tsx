"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Phone, Send, CheckCircle2, Sparkles, Clock, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    targetClass: "10",
    board: "CBSE",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {}
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Atmos Career Institute! I would like to book a Free Demo.\n\n👤 Name: ${formData.name || "Student"}\n📱 Phone: ${formData.phone}\n🎓 Class: Class ${formData.targetClass} (${formData.board})\n💬 Message: ${formData.message || "Please share available demo class slots."}`
    );
    window.open(`https://wa.me/918884768184?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2B61] tracking-tight">
            Get in Touch &amp; Book Your Free Demo
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about our batch schedule or curriculum? Talk directly with our academic coordinators.
          </p>
        </div>

        {/* 2-Column Layout Matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Information Cards & Note from Image 2 */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href="mailto:info@atmoscareerinstitute.com"
              className="group block p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </div>
                  <div className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors break-all">
                    info@atmoscareerinstitute.com
                  </div>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918884768184"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </div>
                  <div className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    +91 8884768184
                  </div>
                </div>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href="tel:+918884768184"
              className="group block p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Call
                  </div>
                  <div className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    +91 8884768184
                  </div>
                </div>
              </div>
            </a>

            {/* Italic Trust Note matching Image 2 */}
            <div className="pt-2 px-2">
              <p className="text-sm font-medium text-amber-900/90 italic flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                We reply personally — usually the same day.
              </p>
            </div>

            {/* Operational hours note */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 space-y-1">
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Support Timings</span>
              </div>
              <p className="text-slate-600 pl-6">
                Monday to Saturday: 10:00 AM – 8:30 PM IST (Online batches conducted pan-India)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form Matching Image 2 */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Demo Request Received!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Thank you! We have registered your inquiry for <strong className="text-slate-800">Class {formData.targetClass} ({formData.board})</strong>. Our mentor will reach out to <strong className="text-slate-800">+91 {formData.phone}</strong> today with your demo class schedule.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Immediately on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Student / Parent Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number field matching Image 2 */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Class
                      </label>
                      <select
                        value={formData.targetClass}
                        onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 bg-white"
                      >
                        <option value="9">Class 9</option>
                        <option value="10">Class 10 (Board Year)</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12 (Board Year)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Board
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(["CBSE", "ICSE"] as const).map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, board: b })}
                            className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
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

                  {/* Message field matching Image 2 */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Anything specific you'd like to ask us? (optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-800 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Book Free Demo Button matching Image 2 */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#E88E23] hover:bg-[#d97c12] text-white font-bold text-base shadow-lg shadow-amber-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <span>Book Free Demo</span>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
