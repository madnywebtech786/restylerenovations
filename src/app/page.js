"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyChoose from "./sections/WhyChoose";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import ContactForm from "./sections/ContactForm";
import ProcessPage from "./sections/ProcessPage";
import WorkingAreas from "./sections/WorkingAreas";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-[rgba(var(--primary),0.03)] to-white text-slate-900 antialiased">
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Testimonials />
          <ProcessPage />
          <WorkingAreas />
          <ContactForm />
        </main>
      </div>
    </>
  );
}
