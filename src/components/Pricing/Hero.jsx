import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 text-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="none"
            stroke="rgba(100, 116, 139, 0.2)"
            strokeWidth="1"
            d="M0,256L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
          A plan for every organization's needs
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500">
          Discover the ideal plan to fuel your business growth. Our pricing
          options are carefully crafted to cater to businesses.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
