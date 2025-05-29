import React from "react";
import Eimage from "../../assets/E1.png";

const EventSection = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 mt-[20px] md:mt-[60px]">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src={Eimage}
          alt="Event"
          className="w-full h-auto rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
      </div>

    </section>
  );
};

export default EventSection;
