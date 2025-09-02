"use client";
// components/Services.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  Redesigned Services component:
  - Feature Banner (compact split-image + content)
  - Decorative left accent column on wide screens
  - Dense responsive grid below for all services (1-3 cols)
  - Reveal animation + hover micro-interactions
*/

const SAMPLE = [
  {
    id: 1,
    title: "Roofing & Repair",
    tag: "Storm-Resistant",
    desc: "Shingles, metal, and flat roofs — engineered and installed for long life.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Siding & Cladding",
    tag: "Aesthetic + Thermal",
    desc: "Fiber cement, vinyl, and metal cladding in curated palettes.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gutters & Drainage",
    tag: "Foundation Safe",
    desc: "Custom gutters, leaders and foundation drainage solutions.",
    img: "/images/about-3.png",
  },
  {
    id: 4,
    title: "Exterior Painting",
    tag: "Color + Protection",
    desc: "Long-wearing, fade-resistant finishes with premium primers.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Soffits & Fascia",
    tag: "Clean Finishes",
    desc: "Architectural trims, ventilation, and durable trim systems.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Window Flashing",
    tag: "Watertight",
    desc: "Precision flashings and trims to keep water out.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Inspections & Quotes",
    tag: "Transparent Pricing",
    desc: "Fast on-site inspections and detailed line-item quotes.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Services({ services = SAMPLE }) {
  // split: first is featured banner, rest are grid
  const [feature, ...rest] = services;

  return (
    <section id="services" className="relative  p-4 py-16 md:p-10 lg:p-20">
      <div className={`transition-all duration-700 opacity-100 `}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-6 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold capitalize">
              Services - Design-driven & performance backed
            </h2>
            <p className="mt-2 text-sm text-muted max-w-prose">
              Explore our service offerings — each one combines design, build
              and reliability.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-[rgb(var(--color-primary-rgb)/1)] text-white font-semibold shadow"
            >
              Get Quote
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg border">
              Book Visit
            </a>
          </div>
        </div>

        {/* Main composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Feature banner: compact split (image | content) */}
          <div className="lg:col-span-12">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Feature: image left on large screens, top on mobile */}
              <div className="lg:col-span-6 order-1 lg:order-1 rounded-2xl overflow-hidden shadow-soft-lg border-l-8 border-primary">
                <div className="relative h-64 md:h-[330px]">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.0), rgba(var(--color-primary-rgb),0.06))",
                    }}
                  />
                  <div className="absolute left-6 bottom-6 p-3 rounded-lg bg-white/95">
                    <div className="text-xs text-[rgb(var(--color-accent-rgb)/1)] font-semibold">
                      {feature.title}
                    </div>
                    <div className="font-bold">{feature.tag}</div>
                  </div>
                </div>
              </div>

              {/* Feature: content */}
              <div className="lg:col-span-6 order-2 lg:order-2 self-start">
                <div className="p-6 md:p-8 rounded-2xl card-glass h-full flex flex-col justify-between">
                  <div>
                    <div className="uppercase text-xs font-semibold tracking-wide text-[rgb(var(--color-accent-rgb)/1)]">
                      Featured Service
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-muted">{feature.desc}</p>

                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="p-2 rounded-md bg-white/60 text-sm">
                        Warranty & Support
                      </li>
                      <li className="p-2 rounded-md bg-white/60 text-sm">
                        Material Options
                      </li>
                      <li className="p-2 rounded-md bg-white/60 text-sm">
                        Permit Assistance
                      </li>
                      <li className="p-2 rounded-md bg-white/60 text-sm">
                        Project Timeline
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[rgb(var(--color-primary-rgb)/1)] text-white font-semibold shadow"
                    >
                      Request Quote
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border"
                    >
                      View Packages
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Dense grid of services (fills width evenly) */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((s, idx) => (
              <article
                key={s.id}
                className="rounded-2xl overflow-hidden card-glass p-0 shadow-soft-lg transform transition-all duration-300 hover:-translate-y-2"
                aria-labelledby={`svc-${s.id}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="responsive-img" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(var(--color-accent-rgb),0.04))",
                    }}
                  />
                  <div
                    className="absolute left-4 top-4 rounded-md bg-primary/95 text-white px-3 py-1 text-xs font-semibold"
                    style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }}
                  >
                    {`0${(idx + 2).toString().padStart(2, "0")}`}
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm text-[rgb(var(--color-accent-rgb)/1)] font-semibold">
                    {s.title}
                  </div>
                  <h4 id={`svc-${s.id}`} className="font-bold mt-1 text-lg">
                    {s.tag}
                  </h4>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <a href="#contact" className="text-sm font-semibold text-primary">
                      Request Quote →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
