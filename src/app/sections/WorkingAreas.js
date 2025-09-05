"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CityCard from "../components/CityCard";

export default function WorkingAreas() {
  const Cities = [
    { name: "Airdrie", src: "/images/cities/Airdrie.png" },
    { name: "Calgary", src: "/images/cities/Calgary.png" },
    { name: "Chestermere", src: "/images/cities/Chesteremere.png" },
    { name: "Cochrane", src: "/images/cities/Cochrane.png" },
    { name: "Strathmore", src: "/images/cities/Strathmore.jpg" },
    { name: "High River", src: "/images/cities/highriver.jpg" },
    { name: "Okotoks", src: "/images/cities/okotoks.jpg" },
  ];
  return (
    <div className="p-4 py-8 md:p-8 lg:p-12 2xl:p-20">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center">
        Our{" "}
        <span className="bg-gradient-to-r from-primaryDark to-primary bg-clip-text text-transparent">
          Working
        </span>{" "}
        Areas
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-center">
        We are a trusted renovation company in Calgary, serving nearby areas
        like Airdrie, Chestermere, Cochrane, Strathmore, High River, and
        Okotoks. From kitchens and bathrooms to basements and exteriors, our
        expert team delivers quality renovations that add lasting value to your
        home.
      </p>

      <div className="w-full h-full p-5 lg:pl-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          draggable
          loop={true}
          autoplay={{ delay: 3000 }}
          className="!h-full"
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1240: {
              slidesPerView: 4,
            },
          }}
        >
          {Cities.map((city, index) => (
            <SwiperSlide key={"city" + index}>
              <div className="w-full p-5" key={index + "city"}>
                <CityCard name={city.name} src={city.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
