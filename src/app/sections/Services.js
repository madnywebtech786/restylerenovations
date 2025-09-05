"use client";
// components/Services.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  Services component — updated copy for a Calgary-based renovation company.
  - Featured service: Home Renovation
  - Dense grid contains all service items from the project's service list
  - Short, SEO-friendly descriptions mention Calgary where relevant
*/

const SAMPLE = [
  {
    id: 1,
    title: "Home Renovation",
    tag: "Full-Service Remodels",
    desc: "Complete home transformations from concept to finish carpentry across Calgary. We modernize outdated spaces with energy-efficient layouts and durable materials tailored to local lifestyles.",
    img: "/images/services/home-renovation.webp",
  },
  {
    id: 2,
    title: "Basement Renovation",
    tag: "Legal Suites & Living Space",
    desc: "Convert underused basements into legal suites or entertainment spaces with moisture control and egress compliance. We maximize usable square footage while meeting Calgary's strict building codes.",
    img: "/images/services/basement-renovation.webp",
  },
  {
    id: 3,
    title: "Framing",
    tag: "Engineered Solutions",
    desc: "Professional load-bearing modifications and structural framing with engineer-approved solutions. Ensures long-term stability and precise alignment for all finishing trades in Calgary renovations.",
    img: "/images/services/framing.webp",
  },
  {
    id: 4,
    title: "Kitchen Remodeling",
    tag: "Custom Kitchens",
    desc: "High-performance kitchen transformations blending custom cabinetry with smart layouts. We optimize workflow and home value through countertop installations and appliance integration.",
    img: "/images/services/kitchen-remodeling.webp",
  },
  {
    id: 5,
    title: "Bathroom Remodeling",
    tag: "Wet-Area Experts",
    desc: "Water-tight bathroom renovations with modern fixtures and efficient layouts. Specializing in waterproofing systems and accessible designs that balance comfort with resale appeal.",
    img: "/images/services/bath-remodeling.webp",
  },
  {
    id: 6,
    title: "Flooring",
    tag: "Durable Finishes",
    desc: "Climate-suited flooring installations: hardwood, LVP, and tile with proper subfloor prep. We select materials for Calgary's conditions ensuring durability and seamless transitions.",
    img: "/images/services/flooring.webp",
  },
  {
    id: 7,
    title: "Interior and Exterior Painting",
    tag: "Color + Protection",
    desc: "Premium painting with thorough surface preparation for lasting results. Enhances curb appeal and indoor comfort using low-VOC paints suited to Calgary's climate.",
    img: "/images/services/painting.webp",
  },
  {
    id: 8,
    title: "Garage Development",
    tag: "Workshops & Heated Spaces",
    desc: "Transform garages into functional spaces with insulation and electrical upgrades. We create year-round studios, workshops, or home offices meeting Calgary's code requirements.",
    img: "/images/services/garage.webp",
  },
  {
    id: 9,
    title: "Electrical",
    tag: "Licensed Electricians",
    desc: "Code-compliant electrical services from panel upgrades to smart-home integration. Our licensed electricians ensure safe installations supporting modern appliances and EV chargers.",
    img: "/images/services/electrical.webp",
  },
  {
    id: 10,
    title: "Plumbing",
    tag: "Rough-In & Fixture Work",
    desc: "Reliable plumbing solutions including fixture replacement and repiping. Certified plumbers deliver water-efficient systems meeting Calgary's strict code requirements.",
    img: "/images/services/plumbing.webp",
  },
  {
    id: 11,
    title: "Dry Wall",
    tag: "Clean Finishes",
    desc: "Professional drywall installation and finishing for crisp walls and ceilings. Creates perfect surfaces for paint and trim with soundproofing options available.",
    img: "/images/services/dry-wall.webp",
  },
  {
    id: 12,
    title: "Mud & Taping",
    tag: "Professional Finishers",
    desc: "Flawless wall and ceiling finishes through expert taping and compound application. Prevents cracks and ensures seamless results ready for painting.",
    img: "/images/services/mud-taping.webp",
  },
  {
    id: 13,
    title: "Wall Covering",
    tag: "Feature Walls & Panels",
    desc: "Precision wallpaper and panel installations with perfect pattern matching. Specializing in acoustic solutions and durable coverings for feature walls.",
    img: "/images/services/wall-covering.webp",
  },
  {
    id: 14,
    title: "Ceiling",
    tag: "Design & Repair",
    desc: "Custom ceiling solutions from coffered details to acoustic treatments. Expert repair of water damage while matching existing textures and finishes.",
    img: "/images/services/ceiling.webp",
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
            <h2 className="text-4xl md:text-5xl font-bold capitalize">
              <span className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent">
                Services
              </span>
              - Design-driven Renovations in Calgary
            </h2>
            <p className="mt-2 text-sm text-muted max-w-prose">
              Serving Calgary and surrounding communities design, permits and
              licensed trades for every renovation scale.
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
                    alt={`${feature.title} - renovation service in Calgary`}
                    className="object-cover w-full h-full"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.0), rgba(var(--color-primary-rgb),0.06))",
                    }}
                  />
                  <div className="absolute left-6 bottom-6 p-3 rounded-lg bg-white/95">
                    <div className="text-sm text-[rgb(var(--color-accent-rgb)/1)] font-semibold">
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
                  <img
                    src={s.img}
                    alt={`${s.title} in Calgary`}
                    className="responsive-img object-cover w-full h-full"
                  />
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
                  <h4 id={`svc-${s.id}`} className="font-bold mt-1 text-xl">
                    {s.tag}
                  </h4>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>

                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-white bg-primary p-2 rounded-lg"
                    >
                      Read More
                    </a>
                    <a
                      href="/contact"
                      className="text-sm font-semibold text-white  bg-primaryDark p-2 rounded-lg"
                    >
                      Request Quote
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
