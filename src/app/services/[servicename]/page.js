import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation"; // Import Next.js navigation for handling 404
import { CheckCircle, CircleCheck } from "lucide-react";

// A static list of services. You can move this to a separate file or fetch it from an API.
const services = [
  {
    id: 1,
    slug: "home-renovation",
    name: "Home Renovation",
    desc: "Complete home renovation services in Calgary and surrounding communities. From concept and design to permit coordination and finish carpentry, we transform outdated homes into modern, energy-efficient living spaces tailored to Calgary lifestyles. Our team blends functional layouts, durable materials, and local building knowledge to maximize value and comfort.",
    img: "/images/services/home-renovation.webp",
    features: [
      "Full project management: design, permits, trades coordination",
      "Energy-efficient upgrades and insulation improvements",
      "Custom trim, cabinetry, and built-in solutions",
      "Flooring, lighting, and finish selections optimized for resale value",
    ],
    additionalInfo:
      "Home renovations often require municipal permits and trade inspections in Calgary. Early budgeting for permits and contingency (typically 10–15%) reduces delays. We provide staging and scheduling to minimize disruption to families.",
  },
  {
    id: 2,
    slug: "basement-renovation",
    name: "Basement Renovation",
    desc: "Basement renovation specialists serving Calgary — we convert underused basements into legal suites, entertainment rooms, home offices, or rental units. We focus on moisture control, insulation, egress compliance, and high-value finishes that increase usable square footage and property ROI.",
    img: "/images/services/basement-renovation.webp",
    features: [
      "Waterproofing, sump pump and drainage solutions",
      "Egress windows, insulation and HVAC integration",
      "Legal-suite conversion with separate entrances and soundproofing",
      "Custom bars, media walls and storage solutions",
    ],
    additionalInfo:
      "Basement work must address Calgary’s moisture and code requirements (egress, insulation, and ventilation). We handle inspections and coordinate with engineers when foundation work or structural changes are needed.",
  },
  {
    id: 3,
    slug: "framing",
    name: "Framing",
    desc: "Professional framing and structural carpentry for residential renovations across Calgary. Whether you’re removing load-bearing walls, adding openings, or building new partitions, our framing ensures long-term stability and accurate alignment for all finishing trades.",
    img: "/images/services/framing.webp",
    features: [
      "Load-bearing wall modification and engineered solutions",
      "Floor joist, roof and roof-structure framing repairs",
      "Accurate layout, squaring, and bracing for finish accuracy",
      "Coordination with engineers and building inspectors",
    ],
    additionalInfo:
      "Structural changes require engineer approvals and permit sign-offs in many Calgary projects. We work with licensed structural engineers and provide all necessary documentation for building permits.",
  },
  {
    id: 4,
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    desc: "High-performance kitchen remodeling in Calgary that blends form and function. From custom cabinetry and countertop installations to lighting, appliance integration and layout reconfiguration, we create kitchens that improve daily workflow and boost home value.",
    img: "/images/services/kitchen-remodeling.webp",
    features: [
      "Custom cabinetry, islands and pantry solutions",
      "Countertop fabrication and backsplash tile installation",
      "Plumbing and electrical coordination for appliances",
      "Smart storage, lighting plans, and durable surface selections",
    ],
    additionalInfo:
      "Kitchen remodels often uncover plumbing or electrical upgrades. Expect a planning phase for appliance specs and cabinet elevations. We recommend choosing finishes early to lock lead times and avoid schedule delays.",
  },
  {
    id: 5,
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    desc: "Bathroom renovation services tailored for Calgary homes — from powder rooms to master ensuite remodels. We deliver water-tight installations, modern fixtures, efficient layouts and accessible design options that balance comfort with resale appeal.",
    img: "/images/services/bath-remodeling.webp",
    features: [
      "Tile and waterproofing systems for showers and wet areas",
      "Fixture upgrades: vanities, toilets, showers and tubs",
      "Accessibility modifications and steam/shower upgrades",
      "Ventilation, plumbing rerouting and efficient layouts",
    ],
    additionalInfo:
      "Bathrooms require precise waterproofing and venting to prevent future issues. We use industry-standard membranes and coordinate with certified plumbers to ensure long-term performance and code compliance.",
  },
  {
    id: 6,
    slug: "flooring",
    name: "Flooring",
    desc: "Professional flooring installation across Calgary: hardwood, engineered wood, laminate, luxury vinyl plank (LVP), tile and carpet. We select materials suited to Calgary’s climate and household needs to ensure durability, comfort and easy maintenance.",
    img: "/images/services/flooring.webp",
    features: [
      "Engineered hardwood and solid hardwood installation",
      "Luxury vinyl plank (LVP) and laminate for high-traffic areas",
      "Ceramic and porcelain tile with professional grouting",
      "Subfloor preparation, levelling and moisture mitigation",
    ],
    additionalInfo:
      "Proper subfloor prep and moisture testing are critical in Calgary’s variable climate. We recommend selecting flooring early in the project to coordinate transitions and undercutting for a seamless finish.",
  },
  {
    id: 7,
    slug: "interior-and-exterior-painting",
    name: "Interior and Exterior Painting",
    desc: "Interior and exterior painting services in Calgary that refresh and protect your home. We combine surface preparation, premium paints and skilled application to deliver long-lasting results that enhance curb appeal and indoor comfort.",
    img: "/images/services/painting.webp",
    features: [
      "Detailed surface prep: sanding, scraping and caulking",
      "Premium, low-VOC paints for healthier interiors",
      "Exterior cladding painting and protective coatings",
      "Trim, doors, decks and fence painting with warranty options",
    ],
    additionalInfo:
      "Exterior painting windows the best results during Calgary’s milder months; temperature and humidity can affect curing. We recommend a color consultation and spot priming to identify areas needing repair before painting begins.",
  },
  {
    id: 8,
    slug: "garage-development",
    name: "Garage Development",
    desc: "Garage development and conversion services across Calgary — transform garages into home offices, studios, workshops or heated multi-use spaces. We handle insulation, flooring, drywall, electrical upgrades and garage door modifications for functional conversions.",
    img: "/images/services/garage.webp",
    features: [
      "Insulation, heating and HVAC tie-in for year-round use",
      "Floor coatings, epoxy and durable surfacing options",
      "Electrical upgrades, lighting and dedicated circuits",
      "Garage door adjustments, new openings and insulation upgrades",
    ],
    additionalInfo:
      "Converting a garage may require zoning or permit checks depending on use (habitable vs. storage). We advise early discussions on insulation, fire separation and ventilation to meet code and comfort goals.",
  },
  {
    id: 9,
    slug: "electrical",
    name: "Electrical",
    desc: "Licensed electrical services for renovation projects in Calgary — from full rewires and panel upgrades to lighting design and safe outlet placement. Our certified electricians ensure code-compliant installations that support modern appliances and smart home systems.",
    img: "/images/services/electrical.webp",
    features: [
      "Panel upgrades, subpanels and circuit balancing",
      "Rewiring for kitchens, bathrooms and older homes",
      "LED lighting design, dimmers and smart-home integration",
      "Dedicated circuits for high-demand appliances and EV chargers",
    ],
    additionalInfo:
      "All electrical work must be performed by licensed electricians and inspected per Calgary building codes. Plan electrical upgrades early to avoid rework once finishes are installed.",
  },
  {
    id: 10,
    slug: "plumbing",
    name: "Plumbing",
    desc: "Comprehensive plumbing services for Calgary renovations, including rough-in plumbing, fixture replacement and repiping. Our certified plumbers deliver reliable water, drainage and venting systems that last and meet local code requirements.",
    img: "/images/services/plumbing.webp",
    features: [
      "Rough-in plumbing for kitchens, bathrooms and basements",
      "Fixture upgrades, water-efficient toilets and faucets",
      "Pipe repairs, repiping and backflow prevention",
      "Hot water system upgrades and tankless installations",
    ],
    additionalInfo:
      "Hidden plumbing issues commonly appear during renovations. We perform camera inspections and pressure tests when needed and advise on water-efficiency upgrades that reduce utility costs.",
  },
  {
    id: 11,
    slug: "dry-wall",
    name: "Dry Wall",
    desc: "Professional drywall installation and finishing for Calgary homes — sound installation, precise taping and smooth finishes that stand up to paint and wear. Ideal for new walls, ceilings and patchwork during renovations.",
    img: "/images/services/dry-wall.webp",
    features: [
      "Gypsum board installation for walls and ceilings",
      "Tapering, finishing and multi-coat sanding for smooth results",
      "Soundproofing and moisture-resistant board installations",
      "Repair and patch services for damage or remodel openings",
    ],
    additionalInfo:
      "Proper taping and drying times are essential to avoid cracks and visible seams. We coordinate drywall schedules with painting and trim work to maintain an efficient timeline.",
  },
  {
    id: 12,
    slug: "mud-taping",
    name: "Mud & Taping",
    desc: "Expert mud and taping services to create flawless wall and ceiling surfaces in Calgary renovations. Our finishers apply industry-standard taping, compound application and sanding techniques so paint and trim sit perfectly.",
    img: "/images/services/mud-taping.webp",
    features: [
      "Multi-coat joint compound application and feathering",
      "Precision corner bead installation and finishing",
      "Skim-coat and texture matching for renovation blends",
      "Crack repair and preventative reinforcement",
    ],
    additionalInfo:
      "Skilled taping reduces future cracking and visual defects. We allow appropriate drying times between coats and recommend final inspection before painting to ensure the smoothest finish.",
  },
  {
    id: 13,
    slug: "wall-covering",
    name: "Wall Covering",
    desc: "Specialist wall covering installations — wallpaper, feature panels, decorative vinyl and acoustic panels for Calgary homes and showrooms. We match patterns, align repeats precisely and prepare substrates for long-lasting adhesion.",
    img: "/images/services/wall-covering.webp",
    features: [
      "Wallpaper hanging and pattern matching for feature walls",
      "Vinyl and fabric wall panels for durability and style",
      "Acoustic wall solutions for home theatres and offices",
      "Surface prep, priming and moisture mitigation",
    ],
    additionalInfo:
      "Wallpaper installation is surface-sensitive — proper priming and seam alignment are essential. For accent walls, samples and mockups help confirm color and pattern under Calgary lighting conditions.",
  },
  {
    id: 14,
    slug: "ceiling",
    name: "Ceiling",
    desc: "Ceiling repair and installation services in Calgary, including suspended ceilings, drywall ceilings, coffered and tray ceilings. We improve acoustics, conceal services and create premium architectural details that elevate interior spaces.",
    img: "/images/services/ceiling.webp",
    features: [
      "Drop/suspended ceiling systems and access panels",
      "Decorative coffers, beams and tray ceiling construction",
      "Acoustic treatments and sound-dampening installations",
      "Repair of water-damaged ceilings and texture matching",
    ],
    additionalInfo:
      "Ceiling projects may require coordination with HVAC and electrical trades for lighting and vents. For water-damage repairs, we identify and fix the source before replacing finished materials.",
  },
];

export default async function ServicePage({ params }) {
  const { servicename } = await params; // Await the params prop

  // Decode the servicename to handle URL-encoded characters
  const decodedServiceName = decodeURIComponent(servicename);

  // Find the matching service
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    notFound(); // Render the 404 page if the service is not found
  }

  return (
    <div>
      <Breadcrumb name={servicename} />

      <div className="p-4 lg:p-20 lg:pb-0 dark:bg-white">
        <div className="relative mb-20 rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row gap-0 lg:gap-20 overflow-hidden">
          {/* Service Number */}
          <span className="absolute top-1/5 lg:top-0 -left-12 text-[220px] font-bold text-primary opacity-15">
            {service.id < 10 ? `0${service.id}` : service.id}
          </span>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-10 lg:py-32">
            <h2 className="text-4xl font-bold mb-4 dark:text-black">{service.name}</h2>
            <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

            {/* Key Features List */}
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm dark:text-black">
                  <CircleCheck size={16} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Additional Information */}
            <p className="text-gray-600 text-sm">{service.additionalInfo}</p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={service.img}
              alt={service.name}
              width={500}
              height={500}
              className="clipImgLeft rounded-2xl w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
