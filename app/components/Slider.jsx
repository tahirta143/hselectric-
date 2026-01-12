"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
      title: "Premium Electrical Products",
      description: "High-quality electrical components for your every need",
      buttonText: "Shop Now",
      buttonLink: "/products",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80",
      title: "Industrial Solutions",
      description: "Robust electrical systems for industrial applications",
      buttonText: "Explore Industrial",
      buttonLink: "/products/industrial",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=75",
      title: "Smart Home Solutions",
      description: "Modern electrical solutions for smart homes",
      buttonText: "Discover Smart Home",
      buttonLink: "/products/smart-home",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1605600659987-9d2296c5b0c9?w=1920&q=80",
      title: "Safety First",
      description: "Certified safety equipment and tools",
      buttonText: "View Safety Gear",
      buttonLink: "/products/safety",
    },
  ];

  // Auto-slide functionality with animation lock
  useEffect(() => {
    if (!isAutoPlaying || isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, isAnimating]);

  const changeSlide = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsAutoPlaying(false);

    if (direction === "next") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    setTimeout(() => setIsAnimating(false), 700);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => changeSlide("next");
  const prevSlide = () => changeSlide("prev");

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    setTimeout(() => setIsAnimating(false), 700);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full mt-8 overflow-hidden group">
      {/* Slides Container */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            {/* Background Image with parallax effect */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content with staggered animation */}
            <div className="relative h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
              <div className="max-w-6xl w-full text-white">
                <div className="max-w-2xl">
                  <div className="overflow-hidden">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-slideUp">
                      {slide.title}
                    </h2>
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 animate-slideUp animation-delay-100">
                      {slide.description}
                    </p>
                  </div>

                  <div className="overflow-hidden">
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 active:scale-95 transition-all duration-300 transform animate-slideUp animation-delay-200 shadow-2xl hover:shadow-yellow-500/30"
                    >
                      <span className="text-base md:text-lg">
                        {slide.buttonText}
                      </span>
                      <ChevronRight className="ml-2 md:ml-3" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Always visible on desktop, on hover for mobile */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`transition-all duration-300 flex items-center ${
              index === currentSlide ? "w-8 md:w-10" : "w-3 md:w-4"
            } h-3 md:h-4 rounded-full ${
              index === currentSlide
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-white/60 hover:bg-white/80"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="text-xs font-medium text-black ml-1">
                {index + 1}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 z-20">
        <div className="flex items-center space-x-1">
          {/* <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              isAutoPlaying ? "bg-green-400" : "bg-gray-400"
            }`}
          /> */}
          {/* <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {isAutoPlaying ? "Auto" : "Manual"}
          </span> */}
        </div>
        {/* <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white/80 hover:text-white text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button> */}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-30">
        <div
          className={`h-full bg-yellow-500 transition-all duration-5000 ease-linear ${
            isAutoPlaying && !isAnimating ? "w-full" : "w-0"
          }`}
          style={{
            animation:
              isAutoPlaying && !isAnimating ? "progress 5s linear" : "none",
          }}
        />
      </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Smooth scrolling for the entire slider */
        .smooth-scroll {
          scroll-behavior: smooth;
        }

        /* Prevent animation on initial load */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideUp,
          .animate-gradient {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
