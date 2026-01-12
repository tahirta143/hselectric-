"use client";

import { useState, useEffect, useRef } from "react";
import {
  Star,
  Filter,
  Percent,
  Sparkles,
  TrendingUp,
  Zap,
  ShoppingCart,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Products", icon: <Zap size={18} /> },
  { id: "lighting", name: "Lighting", icon: <Sparkles size={18} /> },
  { id: "breakers", name: "Breakers", icon: <TrendingUp size={18} /> },
  { id: "cables", name: "Cables", icon: <Filter size={18} /> },
  { id: "sockets", name: "Sockets", icon: <Clock size={18} /> },
  { id: "tools", name: "Tools", icon: <Sparkles size={18} /> },
  { id: "switches", name: "Switches", icon: <Zap size={18} /> },
  { id: "fans", name: "Fans", icon: <TrendingUp size={18} /> },
  { id: "wires", name: "Wires", icon: <Filter size={18} /> },
  { id: "solar", name: "Solar Products", icon: <Sparkles size={18} /> },
];

const discountRanges = [
  { id: "all", label: "All Discounts" },
  { id: "10", label: "10% & above" },
  { id: "20", label: "20% & above" },
  { id: "30", label: "30% & above" },
  { id: "40", label: "40% & above" },
  { id: "50", label: "50% & above" },
  { id: "60", label: "60% & above" },
  { id: "70", label: "70% & above" },
];

const products = [
  {
    id: 1,
    name: "Smart LED Panel Light 20W",
    category: "lighting",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description:
      "Energy-efficient smart LED panel light with remote control and dimmable features.",
  },
  {
    id: 2,
    name: "32A MCB Circuit Breaker",
    category: "breakers",
    price: 1850,
    originalPrice: 2200,
    discount: 16,
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=75",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
    ],
    description:
      "High-quality miniature circuit breaker for overload and short circuit protection.",
  },
  {
    id: 3,
    name: "4mm Copper Wire Cable 100m",
    category: "cables",
    price: 1250,
    originalPrice: 1550,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=75",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    ],
    description:
      "Pure copper wire cable with excellent conductivity and insulation.",
  },
  {
    id: 4,
    name: "Waterproof Switch Socket 16A",
    category: "sockets",
    price: 450,
    originalPrice: 600,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description:
      "IP66 rated waterproof switch socket for bathroom and outdoor use.",
  },
  {
    id: 5,
    name: "Electrician Tool Kit Pro",
    category: "tools",
    price: 3599,
    originalPrice: 4499,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
    ],
    description: "Complete professional electrician tool kit with 45+ tools.",
  },
  {
    id: 6,
    name: "Emergency LED Bulb 9W",
    category: "lighting",
    price: 299,
    originalPrice: 399,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description: "Emergency LED bulb with backup battery that lasts 4+ hours.",
  },
  {
    id: 7,
    name: "16A Miniature Circuit Breaker",
    category: "breakers",
    price: 1350,
    originalPrice: 1650,
    discount: 18,
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=75",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    ],
    description: "Compact MCB for residential electrical circuit protection.",
  },
  {
    id: 8,
    name: "Industrial Power Cable 16mm",
    category: "cables",
    price: 2899,
    originalPrice: 3599,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
    ],
    description:
      "Heavy-duty industrial power cable for high-load applications.",
  },
  {
    id: 9,
    name: "Solar Street Light 50W",
    category: "lighting",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description:
      "Solar-powered street light with motion sensor and 12-hour backup.",
  },
  {
    id: 10,
    name: "63A RCCB Breaker with Safety",
    category: "breakers",
    price: 3200,
    originalPrice: 3800,
    discount: 16,
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
    ],
    description:
      "Residual current circuit breaker with earth leakage protection.",
  },
  {
    id: 11,
    name: "Multi Plug Extension 6 Port",
    category: "sockets",
    price: 799,
    originalPrice: 999,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description:
      "6-port surge protected multi-plug extension with individual switches.",
  },
  {
    id: 12,
    name: "Digital Voltage Tester",
    category: "tools",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
    ],
    description: "Digital voltage and continuity tester with LCD display.",
  },
  {
    id: 13,
    name: "Ceiling Fan with Remote",
    category: "fans",
    price: 2299,
    originalPrice: 2899,
    discount: 21,
    images: [
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description: "Energy-efficient ceiling fan with remote control and timer.",
  },
  {
    id: 14,
    name: "Solar Water Heater",
    category: "solar",
    price: 45999,
    originalPrice: 59999,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
      "https://images.unsplash.com/photo-1551843076-39b43f3a2cae?w=400&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=75",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    ],
    description: "200L solar water heater with vacuum tubes and storage tank.",
  },
];

export default function ProductsSections() {
  const [activeCategoryNew, setActiveCategoryNew] = useState("all");
  const [activeDiscountNew, setActiveDiscountNew] = useState("all");
  const [activeCategoryBest, setActiveCategoryBest] = useState("all");
  const [activeDiscountBest, setActiveDiscountBest] = useState("all");
  const [activeCategoryAll, setActiveCategoryAll] = useState("all");
  const [activeDiscountAll, setActiveDiscountAll] = useState("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState({
    new: false,
    best: false,
    all: false,
  });
  const [showDiscountDropdown, setShowDiscountDropdown] = useState({
    new: false,
    best: false,
    all: false,
  });

  const filterProducts = (productsList, category, discount, type = "all") => {
    let filtered = [...productsList];

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (discount !== "all") {
      const minDiscount = parseInt(discount);
      filtered = filtered.filter((product) => product.discount >= minDiscount);
    }

    if (type === "new") {
      filtered = filtered.filter((product) => product.discount >= 20);
    } else if (type === "best") {
      filtered = filtered.filter((product) => product.discount >= 25);
    }

    return filtered;
  };

  const newProducts = filterProducts(
    products,
    activeCategoryNew,
    activeDiscountNew,
    "new"
  );
  const bestSellingProducts = filterProducts(
    products,
    activeCategoryBest,
    activeDiscountBest,
    "best"
  );
  const allProducts = filterProducts(
    products,
    activeCategoryAll,
    activeDiscountAll,
    "all"
  );

  const ProductCard = ({ product }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const imageContainerRef = useRef(null);

    const nextImage = (e) => {
      e?.stopPropagation();
      if (isAnimating) return;

      setIsAnimating(true);
      setImageIndex((prev) => {
        const nextIndex = prev === product.images.length - 1 ? 0 : prev + 1;
        return nextIndex;
      });

      setTimeout(() => setIsAnimating(false), 500);
    };

    const prevImage = (e) => {
      e?.stopPropagation();
      if (isAnimating) return;

      setIsAnimating(true);
      setImageIndex((prev) => {
        const prevIndex = prev === 0 ? product.images.length - 1 : prev - 1;
        return prevIndex;
      });

      setTimeout(() => setIsAnimating(false), 500);
    };

    const goToImage = (index, e) => {
      e?.stopPropagation();
      if (isAnimating || index === imageIndex) return;

      setIsAnimating(true);
      setImageIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-slide images on hover
    useEffect(() => {
      if (!imageContainerRef.current) return;

      const container = imageContainerRef.current;
      let intervalId;

      const startAutoSlide = () => {
        intervalId = setInterval(() => {
          if (!isAnimating) {
            setImageIndex((prev) =>
              prev === product.images.length - 1 ? 0 : prev + 1
            );
          }
        }, 4000);
      };

      const stopAutoSlide = () => {
        clearInterval(intervalId);
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
        startAutoSlide();
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        stopAutoSlide();
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        stopAutoSlide();
      };
    }, [product.images.length, isAnimating]);

    return (
      <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-700 ease-in transform hover:scale-[1.02] hover:shadow-2xl hover:border-yellow-400 animate-card-hover w-full h-full flex flex-col">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-300/0 to-yellow-500/0 group-hover:from-yellow-400/5 group-hover:via-yellow-300/10 group-hover:to-yellow-500/5 transition-all duration-700 ease-out z-0"></div>

        {/* Product Images Container */}
        <div
          ref={imageContainerRef}
          className="relative h-52 w-full overflow-hidden z-10 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Images Container with Slide and Zoom Animation */}
          <div className="relative h-full w-full flex">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  imageIndex === index
                    ? "opacity-100 transform translate-x-0"
                    : index < imageIndex
                    ? "opacity-0 transform -translate-x-full"
                    : "opacity-0 transform translate-x-full"
                }`}
                style={{
                  transitionDelay: isAnimating ? "0ms" : "50ms",
                  transform:
                    isHovering && imageIndex === index
                      ? "scale(1.1)"
                      : "scale(1)",
                  transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <img
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-110"
                  style={{
                    transform: isHovering ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Discount Badge with Animation */}
          {product.discount > 0 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-xl z-20">
              -{product.discount}%
            </div>
          )}

          {/* Image Navigation Arrows - Fixed */}
          <div className="absolute inset-0 flex items-center justify-between p-2 z-30">
            <button
              onClick={prevImage}
              className="w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 ease-out translate-x-[-50%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 ease-out translate-x-[50%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Image Dots with Animation */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-out transform hover:scale-125 active:scale-95 ${
                  imageIndex === index
                    ? "bg-yellow-500 w-4 scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-3 left-3 bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-full z-20">
            {imageIndex + 1} / {product.images.length}
          </div>

          {/* Hover Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:bg-gradient-to-t from-black/20 via-black/5 to-black/20 transition-all duration-500 ease-out z-10"></div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-1 flex flex-col justify-between z-10">
          {/* Title with Animation */}
          <h3 className="font-bold text-gray-900 text-lg mb-2 transition-all duration-500 ease-out group-hover:text-yellow-600 group-hover:translate-y-[-2px] line-clamp-1">
            {product.name}
          </h3>

          {/* Description with Animation */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[42px] transition-all duration-500 ease-out group-hover:text-gray-800">
            {product.description}
          </p>

          {/* Price and Button Container */}
          <div className="mt-auto">
            {/* Price with Animation */}
            <div className="mb-4">
              <div className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:gap-3">
                <span className="text-xl font-bold text-gray-900 transition-all duration-500 ease-out group-hover:text-yellow-700 group-hover:scale-105">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through transition-all duration-500 ease-out group-hover:text-gray-600">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button with Animation */}
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 text-base rounded-xl transition-all duration-500 ease-out transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-xl group/button relative overflow-hidden">
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>

              <ShoppingCart
                size={16}
                className="transition-all duration-500 ease-out group-hover/button:scale-125 group-hover/button:rotate-[-5deg]"
              />
              <span className="transition-all duration-500 ease-out group-hover/button:font-bold">
                Add to Cart
              </span>
            </button>
          </div>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition-all duration-700 ease-out pointer-events-none"></div>
      </div>
    );
  };

  const FilterDropdown = ({
    section,
    type,
    options,
    activeValue,
    setActiveValue,
    showDropdown,
    setShowDropdown,
  }) => {
    const selectedOption = options.find((opt) => opt.id === activeValue);

    return (
      <div className="relative w-80">
        <button
          onClick={() =>
            setShowDropdown((prev) => ({ ...prev, [section]: !prev[section] }))
          }
          className="flex items-center justify-between w-full bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl px-6 py-4 transition-all duration-500 ease-in shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <div className="flex items-center gap-4">
            {type === "category" ? (
              <>
                <div className="p-3 bg-yellow-50 rounded-lg transition-all duration-500 ease-out group-hover:bg-yellow-100">
                  <Filter
                    size={22}
                    className="text-yellow-600 transition-all duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium transition-all duration-500 ease-out group-hover:text-gray-600">
                    Category
                  </div>
                  <div className="font-bold text-gray-900 text-lg transition-all duration-500 ease-out group-hover:text-yellow-700">
                    {selectedOption?.name || "All Categories"}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 bg-yellow-50 rounded-lg transition-all duration-500 ease-out group-hover:bg-yellow-100">
                  <Percent
                    size={22}
                    className="text-yellow-600 transition-all duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium transition-all duration-500 ease-out group-hover:text-gray-600">
                    Discount
                  </div>
                  <div className="font-bold text-gray-900 text-lg transition-all duration-500 ease-out group-hover:text-yellow-700">
                    {selectedOption?.label || "All Discounts"}
                  </div>
                </div>
              </>
            )}
          </div>
          {showDropdown[section] ? (
            <ChevronUp
              size={22}
              className="text-gray-500 ml-4 transition-all duration-500 ease-out"
            />
          ) : (
            <ChevronDown
              size={22}
              className="text-gray-500 ml-4 transition-all duration-500 ease-out group-hover:rotate-180"
            />
          )}
        </button>

        {showDropdown[section] && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-dropdown">
            <div className="p-4 max-h-96 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setActiveValue(option.id);
                    setShowDropdown((prev) => ({ ...prev, [section]: false }));
                  }}
                  className={`flex items-center gap-4 w-full px-5 py-4 rounded-lg transition-all duration-300 ease-out mb-2 transform hover:scale-[1.02] ${
                    activeValue === option.id
                      ? "bg-yellow-50 text-yellow-700 font-semibold border-2 border-yellow-500"
                      : "text-gray-700 hover:bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  {option.icon && (
                    <span
                      className={`transition-all duration-300 ease-out ${
                        activeValue === option.id
                          ? "text-yellow-600 scale-110"
                          : "text-gray-400"
                      }`}
                    >
                      {option.icon}
                    </span>
                  )}
                  <span className="text-left flex-1 text-base transition-all duration-300 ease-out">
                    {option.name || option.label}
                  </span>
                  {activeValue === option.id && (
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full transition-all duration-300 ease-out scale-125"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-200 p-4">
              <button
                onClick={() => {
                  setActiveValue("all");
                  setShowDropdown((prev) => ({ ...prev, [section]: false }));
                }}
                className="w-full text-center text-yellow-600 hover:text-yellow-700 font-bold py-3 text-base flex items-center justify-center gap-3 transition-all duration-300 ease-out transform hover:scale-105"
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ProductSection = ({
    title,
    description,
    sectionKey,
    activeCategory,
    setActiveCategory,
    activeDiscount,
    setActiveDiscount,
    productsList,
    icon,
  }) => (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-12">
      <div className="w-full mx-auto px-6 lg:px-10 xl:px-16 2xl:px-24">
        {/* Section Header - Aligned to Left */}
        <div className="text-left mb-12 max-w-7xl">
          {/* Title with Icon */}
          <div className="flex items-center gap-4 mb-4 group cursor-pointer">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl shadow-lg transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-500 ease-out group-hover:text-yellow-700 group-hover:translate-x-2">
              {title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-800">
            {description}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-gray-200 transform transition-all duration-500 ease-out hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Filter */}
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-4 transition-all duration-500 ease-out hover:text-gray-800">
                Filter by Category
              </label>
              <FilterDropdown
                section={sectionKey}
                type="category"
                options={categories}
                activeValue={activeCategory}
                setActiveValue={setActiveCategory}
                showDropdown={showCategoryDropdown}
                setShowDropdown={setShowCategoryDropdown}
              />
            </div>

            {/* Discount Filter */}
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-4 transition-all duration-500 ease-out hover:text-gray-800">
                Filter by Discount
              </label>
              <FilterDropdown
                section={sectionKey}
                type="discount"
                options={discountRanges}
                activeValue={activeDiscount}
                setActiveValue={setActiveDiscount}
                showDropdown={showDiscountDropdown}
                setShowDropdown={setShowDiscountDropdown}
              />
            </div>

            {/* Results Count */}
            <div className="flex flex-col justify-center items-center lg:items-end transform transition-all duration-500 ease-out hover:scale-105">
              <div className="text-4xl font-bold text-gray-900 transition-all duration-500 ease-out hover:text-yellow-600">
                {productsList.length}
              </div>
              <div className="text-lg text-gray-600 font-medium transition-all duration-500 ease-out hover:text-gray-800">
                Products Found
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          {productsList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {productsList.map((product, index) => (
                <div
                  key={product.id}
                  className="h-full transform transition-all duration-500 ease-in hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg transform transition-all duration-500 ease-out hover:shadow-xl">
              <div className="text-gray-300 mb-6 transform transition-all duration-500 ease-out hover:scale-110">
                <Filter size={80} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 transition-all duration-500 ease-out hover:text-gray-900">
                No products found
              </h3>
              <p className="text-lg text-gray-500 mb-6 transition-all duration-500 ease-out hover:text-gray-600">
                Try adjusting your filters
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveDiscount("all");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-white font-bold text-lg rounded-xl transition-all duration-500 ease-in transform hover:scale-105 hover:shadow-xl hover:gap-4 relative overflow-hidden group">
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <span className="transition-all duration-500 ease-out group-hover:tracking-wider">
              VIEW ALL {title.split(" ")[0].toUpperCase()} PRODUCTS
            </span>
            <ChevronDown
              size={20}
              className="transition-all duration-500 ease-out group-hover:translate-y-1 group-hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Section 1: New Products */}
      <ProductSection
        title="New Products"
        description="Latest breakers, cables & lighting solutions. Discover our newest electrical innovations with exclusive discounts."
        sectionKey="new"
        activeCategory={activeCategoryNew}
        setActiveCategory={setActiveCategoryNew}
        activeDiscount={activeDiscountNew}
        setActiveDiscount={setActiveDiscountNew}
        productsList={newProducts}
        icon={<Sparkles size={24} className="text-white" />}
      />

      {/* Divider with Animation */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform transition-all duration-1000 ease-out hover:via-yellow-600"></div>

      {/* Section 2: Best Selling Products */}
      <ProductSection
        title="Best Selling Products"
        description="Our most trusted and top-selling products. These electrical solutions have been loved by thousands of customers."
        sectionKey="best"
        activeCategory={activeCategoryBest}
        setActiveCategory={setActiveCategoryBest}
        activeDiscount={activeDiscountBest}
        setActiveDiscount={setActiveDiscountBest}
        productsList={bestSellingProducts}
        icon={<TrendingUp size={24} className="text-white" />}
      />

      {/* Divider with Animation */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform transition-all duration-1000 ease-out hover:via-blue-600"></div>

      {/* Section 3: All Products */}
      <ProductSection
        title="All Products"
        description="Explore our complete electrical products in one place. From basic wiring to advanced automation systems."
        sectionKey="all"
        activeCategory={activeCategoryAll}
        setActiveCategory={setActiveCategoryAll}
        activeDiscount={activeDiscountAll}
        setActiveDiscount={setActiveDiscountAll}
        productsList={allProducts}
        icon={<Zap size={24} className="text-white" />}
      />

      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes card-hover {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            transform: translateY(-2px) scale(1.02);
          }
        }

        @keyframes image-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.15);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }

        .animate-dropdown {
          animation: dropdown 0.3s ease-out forwards;
        }

        .animate-card-hover {
          animation: card-hover 0.3s ease-out;
        }

        .animate-image-zoom {
          animation: image-zoom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
        }

        /* Selection color */
        ::selection {
          background-color: rgba(251, 191, 36, 0.3);
          color: #000;
        }

        /* Smooth transitions for all elements */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
  );
}
