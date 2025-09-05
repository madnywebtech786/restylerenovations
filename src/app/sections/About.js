"use client";
import React, { useState } from "react";

export default function About() {

  return (
    <section id="about" className="h-auto lg:h-screen relative overflow-hidden p-4 py-16 md:p-10 lg:p-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* left content */}
          <div className="lg:col-span-6 z-10">
            <div className="p-6 md:p-10 rounded-2xl card-glass shadow-soft-lg">
              <div className="uppercase text-sm font-semibold tracking-wide text-[rgb(var(--color-accent-rgb)/1)]">
                Restyle Renovation
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
                Calgary Renovation Experts From Kitchens to Exteriors
              </h1>
              <p className="mt-4 max-w-prose text-muted">
                Full-service home renovations across Calgary and nearby communities. We manage design, permits and licensed trades to deliver durable, code-compliant results that increase comfort and property value.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-xl bg-[rgb(var(--color-primary-rgb)/1)] text-white shadow"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-xl border bg-primaryDark text-white"
                >
                  View Services
                </a>
              </div>

              <div className="mt-6 flex gap-4 items-center">
                <div className="p-3 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)]">
                  🏆
                </div>
                <div>
                  <div className="font-semibold">12+ years</div>
                  <div className="text-sm text-muted">
                    serving Calgary & surrounding areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right visual (diagonal split) */}
          <div className="lg:col-span-6 relative">
            <div
              className="absolute inset-0 diag-split rounded-tr-[120px] rounded-bl-[28px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.10), rgba(99,102,241,0.06))",
              }}
            ></div>

            <div className="relative h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-soft-lg transform translate-y-6 lg:-translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop"
                alt="home renovation in Calgary - kitchen, basement and exterior upgrades"
                className="responsive-img"
              />

              <div className="absolute left-5 bottom-5 w-80 p-4 rounded-2xl gradient-ring float-slow">
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-xs text-muted">
                    Renovation packages
                  </div>
                  <div className="font-bold">Kitchens • Basements • Exteriors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative blobs */}
      <svg
        className="shape-blob"
        width="480"
        height="480"
        viewBox="0 0 480 480"
        fill="none"
        style={{ right: "-80px", top: "20px", position: "absolute" }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#0EA5E9" stopOpacity="0.28" />
            <stop offset="1" stopColor="#6366F1" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <circle cx="240" cy="240" r="200" fill="url(#g1)" />
      </svg>
    </section>
  );
}
