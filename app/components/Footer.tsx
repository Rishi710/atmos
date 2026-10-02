"use client";

import React from "react";
import { AtmosLogo } from "./AtmosLogo";
import { Phone, Mail, MessageCircle, Heart, ArrowUp, ShieldCheck } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051630] text-white pt-16 pb-12 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/40">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <AtmosLogo dark={true} />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed mt-4">
              Atmos Career Institute provides premium, small-batch online coaching for Classes 9–12 in Physics, Chemistry, and Mathematics (ICSE &amp; CBSE).
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/50 border border-blue-700/50 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Capped at 10-12 Students Per Batch</span>
            </div>
          </div>

          {/* Quick Links matching Image 2 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col matching Image 2 */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="tel:+918884768184"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 8884768184</span>
              </a>

              <a
                href="mailto:info@atmoscareerinstitute.com"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">info@atmoscareerinstitute.com</span>
              </a>

              <a
                href="https://wa.me/918884768184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>Chat on WhatsApp (+91 8884768184)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Atmos Career Institute. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Class 9, 10, 11, 12 • ICSE &amp; CBSE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-900/60 hover:bg-blue-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
