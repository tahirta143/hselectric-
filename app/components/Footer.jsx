"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fdebd2] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png" // put logo in public folder
                alt="HS Electric Store"
                width={60}
                height={40}
              />
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Powering your life with premium electronics.
              <br />
              Designed with innovation and built for performance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="block h-1 w-16 bg-gray-800 mt-2 rounded"></span>
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-4">
                <div className="icon">
                  <Phone />
                </div>
                <span>
                  WhatsApp
                  <br />
                  +92 309 4037421
                </span>
              </li>

              <li className="flex gap-4">
                <div className="icon">
                  <Mail />
                </div>
                <span>
                  Email Address
                  <br />
                  hs.electric.offical@gmail.com
                </span>
              </li>

              <li className="flex gap-4">
                <div className="icon">
                  <MapPin />
                </div>
                <span>
                  Shop Address
                  <br />
                  SM Electric Co, Plot 27, Block 14, College Rd, Sector B-I,
                  Township, Lahore, Punjab
                </span>
              </li>

              <li className="flex gap-4">
                <div className="icon">
                  <Clock />
                </div>
                <span>
                  Timings
                  <br />
                  9:00 AM – 8:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="block h-1 w-16 bg-gray-800 mt-2 rounded"></span>
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <Link href="#">New Products</Link>
              </li>
              <li>
                <Link href="#">Best Selling</Link>
              </li>
              <li>
                <Link href="#">All Products</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-14 pt-6 text-center text-sm text-gray-700">
          © 2026 hs.electric.offical@gmail.com. All rights reserved.{" "}
          <Link href="#" className="underline ml-2">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923094037421"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <MessageCircle color="white" size={28} />
      </a>
    </footer>
  );
}
