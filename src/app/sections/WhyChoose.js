import React from "react";
import {
  DollarSign,
  BadgeCheck,
  Leaf,
  Clock,
  Sparkles,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "Itemized estimates and clear change-orders so you know exactly where your money goes.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Installers",
      description:
        "Background-checked, trade-certified teams (electrical, plumbing, carpentry) who follow Calgary code.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description:
        "Low-VOC paints, energy-efficient products and sustainable material choices for healthier homes.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Clock,
      title: "Reliable Timelines",
      description:
        "Dedicated project managers, realistic schedules and proactive updates to keep your renovation on track.",
      color: "from-violet-500 to-fuchsia-600",
    },
  ];

  const stats = [
    {
      value: "350+",
      label: "Projects",
      icon: Sparkles,
      color: "text-amber-500",
    },
    { value: "220+", label: "Satisfied Clients", icon: Target, color: "text-cyan-500" },
    { value: "12+", label: "Years Experince", icon: Lightbulb, color: "text-violet-500" },
  ];

  return (
    <section id="why" className="relative p-4 py-16 md:p-10 lg:p-20 overflow-hidden dark:bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-16 w-64 h-64 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-gradient-to-l from-rose-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 opacity-10" />

            <h2 className="text-4xl md:text-5xl font-bold leading-tight dark:text-black">
              Why Restyle{" "}
              <span className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent">
                Is Calgary's Trusted Choice
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              A renovation process built for Calgary homeowners detailed estimates, licensed trades,
              permit coordination and a single project manager who keeps communication clear.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" />
                  <div className="relative p-6 rounded-2xl border border-gray-100 bg-white">
                    <div
                      className={`w-14 h-14 rounded-xl mb-5 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}
                      aria-hidden
                    >
                      <feature.icon size={24} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-black">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 opacity-30 blur-2xl" />

            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-20" />

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Design + Build - Done Right
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Single-point accountability: our team handles design, materials, permits and licensed installation so your project runs smoothly from concept to completion.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                      <div className="relative h-32 rounded-xl border border-gray-100 bg-white p-5 flex flex-col items-center justify-center">
                        <stat.icon className={`${stat.color} w-6 h-6 mb-3`} />
                        <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 right-2 lg:-right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg z-20">
              <Shield className="inline mr-2 mb-0.5" size={16} />
              Licensed • Insured • WCB Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
