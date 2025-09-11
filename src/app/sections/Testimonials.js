"use client";
import React, { useEffect, useState } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Building2,
  Handshake,
} from "lucide-react";

const sample = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Homeowner — Altadore, Calgary",
    text: "They completely transformed our bungalow kitchen — the neighbors keep asking who did it. Attention to detail, clean site and realistic timelines.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47",
    projectType: "Kitchen Renovation",
  },
  {
    id: 2,
    name: "Omar Rizvi",
    role: "Homeowner — Hillhurst, Calgary",
    text: "Fast, neat, and on budget. The team handled permits and the drywall work was flawless. I recommended them to friends in the community.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    projectType: "Basement Conversion",
  },
  {
    id: 3,
    name: "Nadia Ahmed",
    role: "Small Business Owner — Inglewood, Calgary",
    text: "They renovated our retail front with minimal disruption to operations. Strong communication and quality finishes — a very professional crew.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=25",
    projectType: "Commercial Fit-Out",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const id = setInterval(() => {
      setIsTransitioning(true);
      setIndex((i) => (i + 1) % sample.length);
      setTimeout(() => setIsTransitioning(false), 480);
    }, 5000);

    return () => clearInterval(id);
  }, [isHovered]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setIndex((i) => (i - 1 + sample.length) % sample.length);
    setTimeout(() => setIsTransitioning(false), 480);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setIndex((i) => (i + 1) % sample.length);
    setTimeout(() => setIsTransitioning(false), 480);
  };

  return (
    <section
      id="testimonials"
      className="relative p-4 py-16 md:p-10 lg:p-20 overflow-hidden dark:bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-12 w-48 h-48 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 -right-12 w-48 h-48 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Testimonial Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-600/10 z-0" />

            <div className="relative z-10">
              <div className="relative min-h-[320px]">
                {/* Main testimonial card */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-1">
                      {/* Decorative quote mark */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center text-cyan-500">
                        <Quote className="w-4 h-4" />
                      </div>

                      {/* Client avatar and rating */}
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-sm mr-4">
                          <img
                            src={sample[index].image}
                            alt={`${sample[index].name} — ${sample[index].projectType}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex" aria-hidden>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < sample[index].rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="w-max text-xs uppercase tracking-wider font-medium text-cyan-600 bg-cyan-50 p-2 rounded-full mb-4">
                        {sample[index].projectType}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-700 text-base leading-relaxed mb-5">"{sample[index].text}"</p>

                      {/* Author info */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="font-semibold">{sample[index].name}</div>
                        <div className="text-sm text-gray-500">{sample[index].role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-cyan-50"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>

                  <div className="flex gap-1.5 items-center">
                    {sample.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsTransitioning(true);
                          setIndex(i);
                          setTimeout(() => setIsTransitioning(false), 480);
                        }}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-3" : "bg-gray-300 hover:bg-gray-400"}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-cyan-50"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />

            <div className="max-w-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-3" />

                <h2 className="text-4xl md:text-5xl font-bold dark:text-black">
                  Real{" "}
                  <span className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent">
                    Impact
                  </span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg mb-8">
                We create meaningful renovations that improve how Calgarians live and work. Every testimonial is a story about trust, craftsmanship and on-time delivery.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50">
                  <MessageSquare className="w-5 h-5 text-cyan-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-600">Recommend us</div>
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50">
                  <Building2 className="w-5 h-5 text-amber-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600">On time</div>
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50">
                  <Handshake className="w-5 h-5 text-violet-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-800 bg-clip-text text-transparent">1:1</div>
                  <div className="text-sm text-gray-600">Dedicated PM</div>
                </div>
              </div>

              <a href="/projects" className="inline-block rounded-xl bg-primary text-white p-3 py-4 font-bold">
                See Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
