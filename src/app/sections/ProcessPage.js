import React from "react";
import { Aperture, Route } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      id: 1,
      title: "Free In-Home Consultation",
      description:
        "We start by visiting your Calgary home to discuss your renovation goals, budget, and design preferences. Our team listens carefully to understand your vision and provide expert recommendations.",
      align: "left",
      color: "bg-primary text-white",
    },
    {
      id: 2,
      title: "Customized Renovation Plan",
      description:
        "Based on your needs, we create a tailored renovation strategy that includes design concepts, timelines, and a clear cost estimate ensuring full transparency before work begins.",
      align: "right",
      color: "bg-primaryDark text-white",
    },
    {
      id: 3,
      title: "Permits & Approvals",
      description:
        "Our Calgary renovation experts handle all the necessary permits, approvals, and building code requirements, so your project runs smoothly without delays or compliance issues.",
      align: "left",
      color: "bg-primary text-white",
    },
    {
      id: 4,
      title: "Skilled Construction & Renovation",
      description:
        "From kitchen remodels to basement finishing, our skilled contractors bring your renovation plan to life with quality craftsmanship, premium materials, and attention to detail.",
      align: "right",
      color: "bg-primaryDark text-white",
    },
    {
      id: 5,
      title: "Final Walkthrough & Ongoing Support",
      description:
        "We complete a detailed walkthrough with you to ensure every detail meets your expectations. Even after project completion, our Calgary renovation team remains available for support and maintenance.",
      align: "left",
      color: "bg-primary text-white",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 dark:bg-white" id="howWork">
      <section>
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="w-50 rounded-lg flex justify-center py-1 px-2 gap-2 items-center">
              <Aperture size={20} color="white" />
              <span className="rounded-lg text-white font-semibold">
                HOW IT WORKS
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent">
              Renovation
            </span>{" "}
            Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At [Your Company Name], we make home renovations in Calgary and
            surrounding areas stress-free and efficient. From your first
            consultation to the final walkthrough, our proven process ensures
            high-quality results, on time and on budget.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full z-0"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative z-10 mb-10 flex flex-col-reverse md:flex-row items-center gap-24 md:gap-16 ${
                step.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Content Box */}
              <div className="md:w-1/2 px-4">
                <div className={`p-6 py-12 rounded-xl shadow-xl ${step.color}`}>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`md:w-1/2 px-4 flex justify-center mb-4 md:mb-0 ${
                  step.align === "right" ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div className="text-4xl md:text-5xl">
                  <Route
                    size={60}
                    className="bg-white shadow-2xl text-primary rounded-xl px-3 py-2"
                  />
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute top-[25%] md:top-[35%] left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-green-700 font-bold text-lg">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
