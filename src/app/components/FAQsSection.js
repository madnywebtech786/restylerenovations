"use client";
import { Aperture } from "lucide-react";
import React, { useState } from "react";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
const faqsData = [
  {
    question: "How do I get started with a home renovation project in Calgary?",
    answer:
      "Contact us for a consultation where we'll discuss your vision, budget, and timeline. We'll conduct a site assessment, provide a detailed estimate with scope of work, and guide you through the design and permitting process specific to Calgary's building regulations.",
  },
  {
    question: "Do you handle permits and inspections for Calgary renovations?",
    answer:
      "Yes, we manage all municipal permits and coordinate required inspections with The City of Calgary. Our team understands local building codes and ensures your project complies with all regulations, including specific requirements for basements, egress windows, and structural modifications.",
  },
  {
    question: "What's included in your renovation estimates?",
    answer:
      "Our detailed estimates include materials, labor, project management, and necessary permits. We provide transparent breakdowns of costs and include a 10-15% contingency recommendation for unexpected issues common in older Calgary homes, ensuring no hidden fees.",
  },
  {
    question: "How do you handle disruptions to my household during renovations?",
    answer:
      "We implement careful staging and scheduling to minimize disruption. For whole-home renovations, we work in phases and maintain livable spaces. For basements and kitchens, we coordinate timelines around your family's needs and protect finished areas with proper containment.",
  },
  {
    question: "Are your tradespeople licensed and insured for Calgary projects?",
    answer:
      "All our electricians, plumbers, and specialized trades are licensed and insured per Alberta requirements. We carry comprehensive liability insurance and WSIB coverage. You'll work directly with our in-house team or our vetted network of Calgary-based specialists.",
  },
  {
    question: "What makes your renovation services different from other Calgary contractors?",
    answer:
      "We combine local Calgary expertise with comprehensive project management - from initial design through finish carpentry. Our focus on energy-efficient upgrades, understanding of Alberta's climate challenges, and attention to resale value sets us apart. We handle all coordination so you don't have to manage multiple contractors.",
  },
  {
    question: "Do you offer warranties on your renovation work?",
    answer:
      "Yes, we provide a 2-year warranty on all craftsmanship and workmanship. Major systems like electrical, plumbing, and structural components are covered by manufacturer warranties plus our additional protection. We stand by our work and address any concerns promptly.",
  },
  {
    question: "How long does a typical renovation take in Calgary?",
    answer:
      "Timelines vary by project scope: kitchen remodels typically take 4-6 weeks, basement renovations 6-8 weeks, and whole-home renovations 3-6 months. We provide realistic schedules accounting for Calgary's weather conditions, material lead times, and municipal inspection timelines.",
  }
];
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 dark:bg-white">
      <div className="w-full flex flex-col lg:flex-row  gap-5">
        <div className="w-full lg:w-[60%] flex flex-col px-3">
          <div className="w-24 bg-primary-gradient rounded-lg flex py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold dark:text-primary">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 dark:text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-4">
            Proactively answering FAQs boosts user confidence and cuts down on
            support tickets.
          </p>
          <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="flex flex-col items-start w-full border border-indigo-100 rounded-lg"
              >
                <div
                  className="flex items-center justify-between w-full cursor-pointer  p-4 "
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h2 className="text-sm font-semibold dark:text-black">{faq.question}</h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-slate-600 px-4 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 p-4 pt-0"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center lg:w-[40%]">
          <div className="flex flex-col lg:flex-row gap-4 my-4">
            <div className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent w-full py-10 lg:w-full flex justify-center items-center text-6xl font-bold  rounded-2xl ">
              350+
            </div>
            <div className="w-full py-10 lg:w-full flex justify-center items-center font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-xl dark:text-black">Projects</p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-4 my-4">
            <div className="w-full py-10 lg:w-full flex justify-center items-center font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-xl dark:text-black">
                Satisfied Clients
              </p>
            </div>
            <div className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent w-full py-10 lg:w-full flex justify-center items-center text-6xl font-bold xl ">
              220+
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 my-4">
            <div className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent w-full py-10 lg:w-full flex justify-center items-center text-6xl font-bold  rounded-2xl ">
              12+
            </div>
            <div className="w-full py-10 lg:w-full flex justify-center items-center font-semibold border border-gray-300 rounded-2xl">
              <p className="text-center text-xl lg:text-xl dark:text-black">
                Years Experince
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
