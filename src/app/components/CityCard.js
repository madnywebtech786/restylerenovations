import { ArrowRight, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CityCard({ name = "", src = "" }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={name + " city"}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 py-3 bg-gradient-to-r from-gray-50 to-white">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        <div className="flex items-center text-primary text-sm  underline">
          <span className="pb-2">Explore Now</span>
        </div>
      </div>
    </div>
  );
}
