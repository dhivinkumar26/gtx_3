import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Img4.png";

const SingaporeOverview = () => {
  const infoCards = [
    { title: "Capital City", value: "Singapore City", img: "/assets/img4.png" },
    { img: "/assets/Img4.png", title: "Currency", value: "Singapore Dollar" },
    { img: "/assets/Img4.png", title: "Languages", value: "Malay", extra: "+2 more" },
    { img: "/assets/Img4.png", title: "Population size", value: "Appr. 5.92 million" },
    { img: "/assets/Img4.png", title: "Time zone", value: "UTC+8" },
  ];

  const leftColumn = ["Cybersecurity Analysts", "Full-Stack Developers", "Occupational Therapists"];
  const rightColumn = ["Renewable Energy Engineers", "Financial Accountants", "Business Analysts"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 md:px-18 py-10 bg-white rounded-lg shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-[#474D6A]"
      >
        Overview of Singapore
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-3 md:mt-4 text-lg md:text-xl text-[#474D6A]"
      >
        As a top relocation destination, Singapore offers a high standard of living, ranking among the safest and most efficient cities in the world. Renowned for its robust economy, Singapore is a global hub for finance, technology, and trade, attracting professionals from across the globe.  , particularly in major cities like Sydney, Melbourne, and Brisbane.
      </motion.p>

      {/* Info Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {infoCards.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#F1F8FA] flex flex-col items-center rounded-lg text-center shadow-md p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} // Tap effect for mobile
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={Logo} alt={item.title} className="w-10 h-10 mx-auto mb-2" />
            <p className="font-semibold text-gray-900">{item.title}</p>
            <p className="text-gray-700 mb-4">
              {item.value}
              {item.extra && <span className="hover:underline"> ({item.extra})</span>}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <hr className="my-12 text-[#D2D2D2]" />

      {/* Economic Overview */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-[#474D6A] mt-12"
      >
        Economic Overview
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-3 md:mt-4 text-lg md:text-xl text-[#474D6A]"
      >
       Singapore boasts a highly developed and stable economy, recognized as one of the most competitive in the world. Known for its robust infrastructure, business-friendly policies, and a strategic location in Asia, the country serves as a global hub for finance, trade, and technology. The government’s focus on innovation has propelled growth in sectors like fintech, biotechnology, and renewable energy, making Singapore a prime destination for skilled professionals.
      </motion.p>

      {/* Skills in Demand & Salaries */}
      <motion.div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* Skills in Demand */}
        <motion.div>
          <h4 className="font-semibold text-xl p-2 md:text-2xl text-[#474D6A]">Skills in demand</h4>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            {[leftColumn, rightColumn].map((column, columnIndex) => (
              <ul key={columnIndex} className="flex-1 space-y-2 text-gray-700">
                {column.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="bg-white rounded-xl p-2 flex items-center text-lg shadow-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }} // Tap effect for mobile
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    ✔ {skill}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>

        {/* Average Salaries */}
        <motion.div>
          <h4 className="font-semibold text-xl p-2 md:text-2xl text-[#474D6A]">Avg. Salaries</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            {[
              { category: "IT & Tech", salary: "SGD 70,000 - SGD 120,000" },
              { category: "Finance", salary: "SGD 80,000 - SGD 150,000" },
              { category: "Healthcare", salary: "SGD 60,000 - SGD 100,000" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center bg-white p-2 rounded-xl shadow-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} // Tap effect for mobile
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                ✔ <span className="font-semibold text-gray-900 ml-2">{item.category}:</span> {item.salary}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingaporeOverview;
