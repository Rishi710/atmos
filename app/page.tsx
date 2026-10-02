"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CoursesSection } from "./components/CoursesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { BookDemoModal } from "./components/BookDemoModal";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("10");

  const handleOpenDemo = (targetClass: string = "10") => {
    setSelectedClass(targetClass);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenDemo={() => handleOpenDemo("10")} />

        {/* About Section */}
        <AboutSection />

        {/* Courses Section */}
        <CoursesSection onOpenDemo={handleOpenDemo} />

        {/* Why Choose Atmos Section */}
        <WhyChooseSection />

        {/* Real Board Results & Testimonials */}
        <TestimonialsSection />

        {/* Contact & Free Demo Booking Form */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Global Book Demo Modal */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultClass={selectedClass}
      />
    </div>
  );
}
