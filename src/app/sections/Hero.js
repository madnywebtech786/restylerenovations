"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "./styles/Header.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        // autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-[400px] lg:!h-[700px]"
      >
        <SwiperSlide>
          <div className="w-full h-full relative  flex items-center slide1Bg">
            <div className="w-1/2 bg-primaryDark/80 h-full ">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%] w-10/12  lg:w-8/12">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize ">
                    Calgary Home Renovations <br /> Trusted Local Experts
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-full md:w-2/3">
                    Full-service renovations across Calgary and surrounding
                    areas. Design, permits and craftsmanship combined to
                    modernize your home.
                  </p>
                </div>
                <Link className="w-max" href={"tel:+14033614968"}>
                  <button className="bg-white rounded-full cursor-pointer p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase">
                    Call Today 403-361-4968
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex z-10  h-full"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative flex items-center slide2Bg">
            <div className="w-1/2 bg-primaryDark/80 h-full ">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize">
                    Kitchen Remodeling <br /> That Fits Your Lifestyle
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-full md:w-2/3">
                    Custom kitchens, cabinet refacing and countertop upgrades
                    tailored for Calgary families. Fast, eco-friendly options
                    that boost function and value.
                  </p>
                </div>
                <Link className="w-max" href={"/projects"}>
                  <button className="bg-white rounded-full cursor-pointer p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase">
                    Explore Our Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex z-10  h-full"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative flex items-center slide3Bg">
            <div className="w-1/2 bg-primaryDark/80 h-full">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize">
                    Basement Renovations <br /> Add Space & Value
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-full md:w-2/3">
                    Convert basements into legal suites, media rooms or home
                    offices. We prioritize moisture control, egress and
                    code-compliant finishes.
                  </p>
                </div>
                <Link className="w-max" href={"tel:+14033614968"}>
                  <button className="bg-white rounded-full cursor-pointer p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase">
                    Call Us Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex z-10  h-full"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative flex items-center slide4Bg">
            <div className="w-1/2 bg-primaryDark/80 h-full ">
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize">
                    Complete Renovation Services <br /> Framing to Finishes
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-full md:w-4/5">
                    Licensed trades for electrical, plumbing, drywall, painting
                    and flooring. Single-point project management for on-time
                    results in Calgary.
                  </p>
                </div>
                <Link className="w-max" href={"tel:+14033614968"}>
                  <button className="bg-white rounded-full cursor-pointer p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase">
                    Start Your Design Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex z-10  h-full"></div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next !hidden md:!block"></div>
        <div className="swiper-button-prev !hidden md:!block"></div>
      </Swiper>
    </div>
  );
}
