import React from "react";
import { motion } from "framer-motion";

const cities = [
  { name: "Singapore City", img: "/Img6.png" },
  { name: "Jurong", img: "/Img7.png" },
  { name: "Tampines", img: "/Img8.png" },
];

export default function ExploreCities() {
  return (
    <section className="py-12 max-w-8xl mx-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-[#474D6A] mb-8">
        Explore Popular Cities
      </h2>

      {/* Cities Grid */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full  rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* City Image */}
            <motion.img
              src={city.img}
              alt={city.name}
              className="w-full  object-cover   transition-all duration-300 group-hover:brightness-75"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover Overlay Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300"
            >
              {city.name}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="mt-8">
        <a
          href="#"
          className="text-orange-600 text-xl font-semibold hover:underline mt-10 inline-flex items-center gap-1 transition-all duration-300 hover:scale-105"
        >
          Explore all available jobs ↗
        </a>
      </div>
    </section>
  );
}
