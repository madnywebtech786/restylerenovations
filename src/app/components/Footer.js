import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={16} />, href: "#" },
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
    { icon: <Linkedin size={16} />, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-gray-300 ">
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full space-x-2 rounded-2xl mb-0"
            >
              <Image
                src={"/images/logo-white.svg"}
                width={150}
                height={150}
                className="w-4/5 mx-auto h-28"
              />
            </Link>
            <p className="text-white text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              aut illum rerum non, autem, alias voluptatum officia voluptates a.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-primary-red hover:border-primary-red transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Quick Links</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-red hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Contact Us</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <Phone
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+11234567890"
                  className="hover:text-primary-red transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@barab.com"
                  className="hover:text-primary-red transition-colors"
                >
                  info@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <span>
                  123 Calgary Trail SW,
                  <br />
                  Calgary, AB, Canada
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location/Opening Hours */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Opening Hour</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <div className="text-white space-y-2">
              <p className="text-white">
                Mon - Tue: <span className="text-white">10:00AM - 20:00PM</span>
              </p>
              <p className="text-white">
                Fri - Sun: <span className="text-white">12:00AM - 23:00PM</span>
              </p>
              <p className="pt-2 text-white">
                We are closed on Wednesday & Thursday.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="container py-6 text-sm">
          <div className="flex justify-center items-center space-y-4 sm:space-y-0">
            <p className=" text-white">
              © Copyright 2025, Restyle Renovation . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
