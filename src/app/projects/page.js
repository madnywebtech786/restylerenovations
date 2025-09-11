"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProjectCard from "@/app/components/ProjectCard";

export default function Page() {
  const params = useParams();
  const rawService = (params?.service || "all").toString().toLowerCase();

  const projectsByService = {
    "home-renovation": [
      {
        id: 1,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Calgary Whole Home Renovation",
        title: "West Springs Whole Home Transformation",
        subtitle: "From outdated to modern energy-efficient living space",
        desc: `Complete renovation of a 1980s bungalow in West Springs. We opened the floor plan, added energy-efficient windows, updated all systems, and created a modern kitchen with custom cabinetry. The project included full permit coordination with The City of Calgary and increased the home's value by 35%.`,
      },
      {
        id: 2,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Inglewood Home Renovation",
        title: "Inglewood Heritage Home Modernization",
        subtitle: "Preserving character while improving functionality",
        desc: `Sensitive renovation of a historic Inglewood home. We maintained original woodwork while adding a modern kitchen, updated bathrooms, and improved insulation. The project required special attention to heritage considerations and included custom built-ins that maximized storage without compromising the home's character.`,
      },
    ],
    "basement-renovation": [
      {
        id: 3,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Legal Basement Suite",
        title: "Legal Basement Suite in Bridgeland",
        subtitle: "Code-compliant rental suite with egress window",
        desc: `Converted an unfinished basement into a legal 2-bedroom suite with separate entrance. We installed proper egress windows, added soundproofing between levels, and created a modern kitchenette with full plumbing. The project met all of Calgary's requirements for secondary suites and added $400/mo in rental income.`,
      },
      {
        id: 4,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Family Entertainment Basement",
        title: "Family Entertainment Basement in Oakridge",
        subtitle: "Moisture-controlled media room and guest suite",
        desc: `Transformed a damp basement into a dry, comfortable entertainment space with a home theater, wet bar, and guest bedroom. We installed a comprehensive drainage system and high-performance insulation to address Calgary's moisture challenges, creating a space the family now uses year-round.`,
      },
    ],
    "kitchen-remodeling": [
      {
        id: 5,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Calgary Kitchen Remodel",
        title: "Functional Kitchen in Mount Royal",
        subtitle: "Optimized workflow with custom cabinetry",
        desc: `Complete kitchen remodel featuring custom cabinetry, quartz countertops, and integrated appliances. We reconfigured the layout to improve workflow triangle, added a large island with seating, and selected durable finishes that withstand Calgary's dry climate while maximizing natural light from the south-facing windows.`,
      },
      {
        id: 6,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Modern Kitchen Transformation",
        title: "Modern Kitchen in Tuxedo Park",
        subtitle: "From dark and cramped to bright and open",
        desc: `Removed a load-bearing wall to create an open concept kitchen/dining space. Added under-cabinet lighting, a walk-in pantry, and high-efficiency appliances. The project included careful coordination with electrical and plumbing trades to accommodate new appliance placements while maintaining optimal workflow for family cooking.`,
      },
    ],
    "bathroom-remodeling": [
      {
        id: 7,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Master Bathroom Reno",
        title: "Spa-Like Master Bathroom in Silverado",
        subtitle: "Waterproofed shower with heated floors",
        desc: `Transformed a cramped master bathroom into a spa-like retreat with a curbless shower, freestanding tub, and heated tile floors. We installed industry-standard waterproofing membranes and coordinated with certified plumbers to ensure long-term performance. The space now features optimal ventilation to prevent moisture issues common in Calgary homes.`,
      },
      {
        id: 8,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Powder Room Upgrade",
        title: "Powder Room Upgrade in Downtown Condo",
        subtitle: "Small space, big impact with custom finishes",
        desc: `Maximized a compact powder room with space-saving fixtures, custom vanity, and statement tile work. We addressed plumbing constraints in the high-rise building while creating a luxurious guest bathroom that punches above its weight class. The project was completed in just 10 days with minimal disruption to the homeowner.`,
      },
    ],
    "flooring": [
      {
        id: 9,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Hardwood Installation",
        title: "Engineered Hardwood Throughout",
        subtitle: "Climate-appropriate flooring for Calgary homes",
        desc: `Installed engineered hardwood throughout a new build in Quarry Park. We selected a product with proper moisture resistance for Alberta's climate, performed meticulous subfloor preparation, and ensured seamless transitions between rooms. The flooring has maintained its integrity through multiple Calgary winters with no gapping or cupping issues.`,
      },
      {
        id: 10,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Luxury Vinyl Plank",
        title: "LVP Installation in Family Home",
        subtitle: "Durable, waterproof flooring for busy households",
        desc: `Replaced worn carpet with luxury vinyl plank in a family home near Nose Hill Park. We addressed minor subfloor irregularities and installed a premium LVP that withstands pet traffic and seasonal moisture from snowy boots. The product was selected for its realistic wood appearance and practical maintenance for Calgary lifestyles.`,
      },
    ],
    // Add similar project examples for other services...
    "framing": [
      {
        id: 11,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Structural Wall Removal",
        title: "Load-Bearing Wall Removal in Mount Royal",
        subtitle: "Engineer-approved structural modification",
        desc: `Removed a load-bearing wall between kitchen and living room with engineered beam installation. We coordinated with a structural engineer for proper calculations, obtained necessary permits, and ensured precise framing that maintained structural integrity while creating an open concept space. The work was completed with minimal disruption to existing finishes.`,
      }
    ],
    "garage-development": [
      {
        id: 12,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Garage Conversion",
        title: "Garage-to-Home-Office Conversion",
        subtitle: "Heated, insulated workspace with proper egress",
        desc: `Converted a single-car garage into a functional home office with proper insulation, heating, and electrical upgrades. We installed egress-compliant windows, added soundproofing, and created a seamless transition to the main house. The project required careful coordination with Calgary's zoning regulations for habitable space conversions.`,
      }
    ],
    "interior-and-exterior-painting": [
      {
        id: 13,
        img1: "/images/projects/bath.webp",
        img2: "/images/projects/kitchen.webp",
        alt: "Interior Painting",
        title: "Complete Interior Paint Refresh",
        subtitle: "Premium finishes with meticulous preparation",
        desc: `Full interior paint refresh for a 4-bedroom home in McKenzie Towne. We performed thorough surface preparation including drywall repair, caulking, and sanding before applying premium low-VOC paints. The project included custom color consultation to maximize natural light in Calgary's northern climate and ensure cohesive flow between rooms.`,
      }
    ]
  };

  // Helper: convert service slug to readable title
  const serviceTitle = (slug) => {
    const serviceMap = {
      "home-renovation": "Home Renovation",
      "basement-renovation": "Basement Renovation",
      "framing": "Framing",
      "kitchen-remodeling": "Kitchen Remodeling",
      "bathroom-remodeling": "Bathroom Remodeling",
      "flooring": "Flooring",
      "interior-and-exterior-painting": "Interior & Exterior Painting",
      "garage-development": "Garage Development"
      // Add other services as needed
    };
    return serviceMap[slug] || slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Decide which services to render
  const servicesToRender =
    rawService === "all"
      ? Object.keys(projectsByService)
      : Object.keys(projectsByService).includes(rawService)
      ? [rawService]
      : []; // empty -> show not found

  return (
    <>
      <Breadcrumb name={"Our Projects"} />
      <div className="p-6 md:p-8 lg:p-12 2xl:p-20 dark:bg-white">
        {servicesToRender.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold mb-4">No projects found</h2>
            <p className="text-sm text-muted-foreground">
              There are no projects for "{rawService.replace('-', ' ')}". Try "all" or another service.
            </p>
          </div>
        ) : (
          servicesToRender.map((serviceKey, serviceIndex) => {
            const serviceProjects = projectsByService[serviceKey] || [];
            return (
              <section key={serviceKey} className="mb-20">
                {/* Service heading */}
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                  {serviceTitle(serviceKey)} Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="service-card"
                    >
                      <ProjectCard
                        img1={project.img1}
                        img2={project.img2}
                        alt={project.alt}
                        title={project.title}
                        subtitle={project.subtitle}
                        desc={project.desc}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </>
  );
}