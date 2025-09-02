"use client";
import React, { useState } from "react";

const IMAGES = [
  {
    src: "/images/about-1.png",
    alt: "Skilled crew inspecting a home's exterior after renovation",
  },
  {
    src: "/images/about-2.png ",
    alt: "Modern siding and architectural detail",
  },
  {
    src: "/images/about-3.png",
    alt: "Contemporary house exterior at dusk",
  },
];

export default function About() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  function openLightbox(i) {
    setLightbox({ open: true, idx: i });
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightbox({ open: false, idx: 0 });
    document.body.style.overflow = "";
  }

  return (
    <section id="about" className="relative  p-4 py-16 md:p-10 lg:p-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute bottom-12 -right-12 w-32 h-32 rounded-full bg-violet-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 md:gap-8 items-center">
        {/* TEXT - Completely Redesigned Left Side */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="absolute top-0 left-0 w-2 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <div className="pl-6 border-l-2 border-cyan-100">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block text-gray-900">Exteriors engineered</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-1">
                for longevity
              </span>
            </h2>

            <div className="mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl blur opacity-50" />
              <div className="relative bg-white p-6 rounded-2xl border border-gray-100">
                <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-cyan-200 pl-5 py-1">
                  "They didn't just replace our siding they engineered a
                  solution that considers wind patterns, moisture management,
                  and future maintenance needs."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center text-cyan-500 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Ayesha Khan</div>
                    <div className="text-sm text-gray-500">
                      Calgary Homeowner
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-600 text-lg max-w-2xl">
              Our approach blends architectural precision with practical
              building science. Every detail is considered from material
              selection to installation methodology to create exteriors that
              perform beautifully for decades.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-xl px-7 py-3.5 font-medium text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center">
                  <span>Request a site visit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#services"
                className="relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-50" />
                <span>Explore our process</span>
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE MOSAIC - Right Side (Unchanged as requested) */}
        <div className="lg:col-span-7 relative order-1 lg:order-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:gap-4 h-max">
            {/* Large image (spans two rows on left on big screens) */}
            <button
              onClick={() => openLightbox(0)}
              className="col-span-2 row-span-1 lg:row-span-2 lg:col-span-1 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition"
              aria-label="Open image 1"
              style={{ boxShadow: "0 12px 30px rgba(2,6,23,0.08)" }}
            >
              <img
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                loading="lazy"
                className="h-full w-full max-h-[450px] lg:max-h-full object-cover"
              />
            </button>

            {/* Two stacked images on the right */}
            <button
              onClick={() => openLightbox(1)}
              className="rounded-2xl overflow-hidden h-max transform hover:-translate-y-1 transition"
              aria-label="Open image 2"
            >
              <img
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                loading="lazy"
                className="w-full h-full min-h-[300px] lg:min-h-auto object-cover"
              />
            </button>

            <button
              onClick={() => openLightbox(2)}
              className="rounded-2xl overflow-hidden h-max transform hover:-translate-y-1 transition"
              aria-label="Open image 3"
            >
              <img
                src={IMAGES[2].src}
                alt={IMAGES[2].alt}
                loading="lazy"
                className="w-full h-full min-h-[300px] lg:min-h-auto object-cover"
              />
            </button>
          </div>

          {/* subtle decorative floating card */}
          <div className="absolute right-2 md:right-4 lg:-right-4 bottom-24 md:bottom-12 lg:-bottom-6 w-44 p-3 rounded-xl gradient-ring block">
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="text-xs text-muted">Trusted in</div>
              <div className="font-bold">Calgary & Surroundings</div>
            </div>
          </div>
        </div>

        {/* LIGHTBOX / MODAL */}
        {lightbox.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeLightbox}
              aria-hidden="true"
            />
            <div className="relative max-w-4xl w-full rounded-xl overflow-hidden">
              <button
                onClick={closeLightbox}
                className="absolute right-3 top-3 z-10 bg-white/90 rounded-full p-2 shadow"
                aria-label="Close image"
              >
                ✕
              </button>
              <img
                src={IMAGES[lightbox.idx].src}
                alt={IMAGES[lightbox.idx].alt}
                className="w-full h-auto object-contain bg-white"
              />
              <div className="p-3 bg-white flex justify-between items-center text-sm">
                <div className="text-muted">{IMAGES[lightbox.idx].credit}</div>
                <div className="text-xs text-muted">
                  Click background to close
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
