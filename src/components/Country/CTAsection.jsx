import React from "react";
import { motion } from "framer-motion";
import Roboimage from "../../assets/Robo.png";

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow py-4 px-4 sm:px-6 max-w-9xl m-4 sm:m-18 mx-auto bg-gradient-to-r from-[#0c0d0e] to-[#0f5878] rounded-2xl flex flex-col lg:flex-row items-center justify-between text-white"
    >
      {/* Text Content */}
      <div className="p-4 sm:p-10 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Is This the Right Country for You?
        </h2>
        <p className="mt-2 text-sm sm:text-base lg:text-base opacity-90">
          Thinking about the right country for your goals? Speak to our <br className="hidden sm:block"/> experts today and get personalized advice.
        </p>
      </div>

      {/* Image & Background Overlay */}
      <div className="relative w-full lg:w-auto flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        <motion.img
          whileHover={{ scale: 1.05 }}
          className="w-32 sm:w-40 lg:w-52 transition-transform duration-300"
          src={Roboimage}
          alt="Robotic Assistant"
        />
        <span className="absolute bottom-0 text-3xl sm:text-5xl lg:text-6xl font-bold text-white/10">
          SINGAPORE
        </span>
      </div>

      {/* Call to Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 sm:mt-6 px-5 py-3 sm:px-5 sm:py-3 rounded-full bg-white text-gray-900 font-medium flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
      >
        <span className="text-base sm:text-lg"> Get Advice Now →</span>
      </motion.button>
    </motion.div>
  );
};

export default CTASection;
