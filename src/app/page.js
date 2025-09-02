"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-[rgba(var(--primary),0.03)] to-white text-slate-900 antialiased">
        <div
          className="absolute -z-10 right-0 top-12 w-72 h-72 decorative-blob"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.14), rgba(99,102,241,0.06))",
          }}
        />
        <div
          className="absolute -z-10 left-0 bottom-0 w-96 h-96 decorative-blob"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.14), rgba(14,165,233,0.04))",
          }}
        />

        <Header />

        {menuOpen && (
          <div className="md:hidden px-6 pb-6">
            <div className="flex flex-col gap-3 bg-white rounded-xl p-4 shadow-soft">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#why" onClick={() => setMenuOpen(false)}>
                Why Choose Us
              </a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-lg border">Get Quote</button>
                <button className="flex-1 rounded-lg bg-primary text-white">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        )}

        <main>
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Testimonials />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </>
  );
}
