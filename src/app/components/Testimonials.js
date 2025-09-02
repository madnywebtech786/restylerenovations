"use client";
import React, { useEffect, useState, useRef } from "react";
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
    role: "Homeowner",
    text: "They completely transformed our space — the neighbors keep asking who did it. The attention to detail is unmatched.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=1",
    projectType: "Residential Renovation",
  },
  {
    id: 2,
    name: "Omar Rizvi",
    role: "Business Owner",
    text: "Fast, neat, and on budget. Clear communication every step of the way. I've recommended them to three friends already.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=2",
    projectType: "Commercial Space",
  },
  {
    id: 3,
    name: "Nadia Ahmed",
    role: "Architect",
    text: "From concept to finish, true professionals. Their innovative approach solved challenges we'd struggled with for months.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=3",
    projectType: "Sustainable Design",
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
      setTimeout(() => setIsTransitioning(false), 500);
    }, 5000);

    return () => clearInterval(id);
  }, [isHovered]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setIndex((i) => (i - 1 + sample.length) % sample.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setIndex((i) => (i + 1) % sample.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section
      id="testimonials"
      className="relative  p-4 py-16 md:p-10 lg:p-20 overflow-hidden"
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
          {/* Testimonial Card Column - Overlapping */}
          <div className="lg:col-span-5 relative ">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-600/10 z-0" />

            <div className="relative z-10">
              <div className="relative min-h-[320px]">
                {/* Main testimonial card */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isTransitioning
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-1">
                      {/* Decorative quote mark */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center text-cyan-500">
                        <Quote className="w-4 h-4" />
                      </div>

                      {/* Client avatar and project type */}
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-sm mr-4">
                          <img
                            src={sample[index].image}
                            alt={sample[index].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex">
                            {/* Rating */}

                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < sample[index].rating
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="w-max text-xs uppercase tracking-wider font-medium text-cyan-600 bg-cyan-50 p-2 rounded-full mb-4">
                        {sample[index].projectType}
                      </div>
                      {/* Testimonial text */}
                      <p className="text-gray-700 text-base leading-relaxed mb-5">
                        "{sample[index].text}"
                      </p>

                      {/* Author info */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="font-semibold">
                          {sample[index].name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {sample[index].role}
                        </div>
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

                  <div className="flex gap-1.5">
                    {sample.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsTransitioning(true);
                          setIndex(i);
                          setTimeout(() => setIsTransitioning(false), 500);
                        }}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === index
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-3"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      ></button>
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
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Real Impact
                </h3>
              </div>

              <p className="text-gray-600 text-lg mb-8">
                We don't just deliver projects we create meaningful
                transformations that resonate with our clients' lives and
                businesses. Each testimonial represents a story of trust,
                collaboration, and exceptional results.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50">
                  <MessageSquare className="w-5 h-5 text-cyan-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">
                    92%
                  </div>
                  <div className="text-sm text-gray-600">Recommend us</div>
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50">
                  <Building2 className="w-5 h-5 text-amber-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">On time</div>
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50">
                  <Handshake className="w-5 h-5 text-violet-600 mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-800 bg-clip-text text-transparent">
                    1:1
                  </div>
                  <div className="text-sm text-gray-600">Dedicated team</div>
                </div>
              </div>

              <button className="rounded-xl bg-primary text-white p-3 py-4 cursor-pointer font-bold">
                See Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
