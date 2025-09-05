import { Facebook, Instagram, Phone, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function TopBar() {
  return (
    <div className="w-full py-3 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-gradient-3 text-white ">
      <div className="w-full lg:w-2/3 flex justify-between md:justify-start md:gap-5 items-center">
        <div className="flex gap-2 items-center">
          <Send size={20} className="text-white" />
          <Link href={"mailto:restylerenovation@gmail.com"}>
            <p className="text-xs lg:text-sm">
              restylerenovation@gmail.com
            </p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={20} className="text-white" />
          <Link href={"tel:+14034011636"}>
            <p className="text-xs lg:text-sm">403-401-1636</p>
          </Link>
        </div>
      </div>
      <div className="w-1/3 hidden md:flex justify-end">
        <div className="flex items-center space-x-4">
          <Facebook size={20} className="text-white" />

          <Instagram size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}
