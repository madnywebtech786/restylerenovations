import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhatsAppButton() {
  return (
    <Link href={"https://wa.me/+14034011636"}>
      <button className="fixed bottom-5 right-4 rounded-full bg-[#25D366] p-3 z-50 hover:scale-110 duration-200">
        <Image
          src={"/images/icons/WhatsappIcon.svg"}
          alt="whatsapp"
          width={35}
          height={35}
        />
      </button>
    </Link>
  );
}
