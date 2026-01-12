"use client";

import Link from "next/link";
import { ShoppingCart, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isProductsHover, setIsProductsHover] = useState(false);

  const productCategories = [
    { name: "Lighting", href: "/products/lighting" },
    { name: "Wires & Cables", href: "/products/wires-cables" },
    { name: "Switches & Sockets", href: "/products/switches-sockets" },
    { name: "MCBs & Distribution", href: "/products/mcbs-distribution" },
    { name: "Conduits & Trunking", href: "/products/conduits-trunking" },
    { name: "Tools & Safety", href: "/products/tools-safety" },
  ];

  return (
    <header className="w-full py-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl px-6 py-2 mt-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 relative">
        {/* Yellow shadow effect around navbar */}
        <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 pointer-events-none"></div>

        {/* Top Row */}
        <div className="flex items-center justify-between relative z-10">
          {/* Search */}
          <div className="relative w-[280px] group">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-hover:text-yellow-500"
            />
            <input
              type="text"
              placeholder="Search for Electric Products.."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-300 hover:shadow-sm"
            />
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <img
              src="https://www.hselectricstore.com/_next/image?url=%2Flogo.png&w=1920&q=75"
              alt="HS Electric Store"
              width={100}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Products link - Simple version in top row */}
            <Link
              href="/products"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Cart */}
            <div className="relative cursor-pointer group">
              <div className="p-2 rounded-full hover:bg-yellow-50 transition-all duration-300">
                <ShoppingCart
                  size={22}
                  className="text-gray-700 group-hover:text-yellow-600 transition-colors duration-300"
                />
              </div>
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium group-hover:scale-110 transition-transform duration-300 shadow-md">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Links with dropdown */}
        <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-gray-100 relative z-10">
          <Link
            href="/"
            className="text-gray-600 hover:text-yellow-600 transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Products with dropdown - Now in bottom links */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsHover(true)}
            onMouseLeave={() => setIsProductsHover(false)}
          >
            <button className="flex items-center gap-1 text-gray-600 hover:text-yellow-600 transition-all duration-300 group">
              <span>Products</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isProductsHover ? "rotate-180 text-yellow-500" : ""
                }`}
              />
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Dropdown Menu - Positioned BELOW the bottom links */}
            {isProductsHover && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-fadeIn">
                <div className="p-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-all duration-200 group/item"
                      onClick={() => setIsProductsHover(false)}
                    >
                      <span className="flex-1">{category.name}</span>
                      <ChevronDown
                        size={16}
                        className="rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-yellow-500"
                      />
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-3 bg-gray-50/50 rounded-b-xl">
                  <Link
                    href="/products"
                    className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center justify-center gap-2 group"
                    onClick={() => setIsProductsHover(false)}
                  >
                    View All Products
                    <ChevronDown
                      size={16}
                      className="rotate-90 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
