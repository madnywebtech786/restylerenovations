import React from "react";

export default function Hero() {
  return (
    <section className="h-auto lg:h-screen relative overflow-hidden py-10 px-4 md:px-10">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* left content */}
          <div className="lg:col-span-6 z-10">
            <div className="p-6 md:p-10 rounded-2xl card-glass lg:ml-12 shadow-soft-lg">
              <div className="uppercase text-sm font-semibold tracking-wide text-[rgb(var(--color-accent-rgb)/1)]">
                Restyle Renovation
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
                Design-forward exterior renovations that turn heads and last.
              </h1>
              <p className="mt-4 max-w-prose text-muted">
                We combine architectural taste with industry-grade build
                standards — roofing, siding, drainage and full exterior
                transformations for homeowners who want results and beautiful
                streetscapes.
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
                  className="inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-xl border"
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
                    trusted in Calgary area
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
                alt="exterior"
                className="responsive-img"
              />

              <div className="absolute left-5 bottom-5 w-80 p-4 rounded-2xl gradient-ring float-slow">
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-xs text-muted">
                    Premium exterior package
                  </div>
                  <div className="font-bold">Roof + Siding + Gutters</div>
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
