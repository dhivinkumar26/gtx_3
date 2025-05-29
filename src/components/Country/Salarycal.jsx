import { motion } from "framer-motion";
import { useState } from "react";
import flagImage from "../../assets/flags.png";

const SalaryCalculator = () => {
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [salary, setSalary] = useState("");
  const [destination, setDestination] = useState("Singapore");

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="bg-gray-50 py-16 px-6 sm:px-18"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-8xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-3xl p-3 font-semibold bg-gradient-to-r from-[#00070a] to-[#1ca9eb] bg-clip-text text-transparent"
        >
          Estimate Global Ranges with <br /> GTX Salary Calculator
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-gray-400 text-lg sm:text-xl space-y-4"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span className="text-black">How much would a</span>
            <motion.select 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-b border-gray-400 focus:outline-none font-medium px-2" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>Select your role</option>
              <option>Software Engineer</option>
              <option>Data Scientist</option>
            </motion.select>
            <span className="text-black">based in</span>
            <motion.select 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-b border-gray-400 focus:outline-none font-medium px-2" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled>Select your country</option>
              <option>USA</option>
              <option>UK</option>
            </motion.select>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span className="text-black">earning a base salary</span>
            <motion.input 
              type="number" 
              placeholder="Enter base salary" 
              className="border-b border-gray-400 focus:outline-none text-center font-medium px-2 w-full sm:w-32"
              value={salary} 
              onChange={(e) => setSalary(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <span className="text-black">will be earned in</span>
            <div className="flex items-center">
              <img 
                src={flagImage} 
                alt="Country Flag" 
                className="w-5 h-5 mr-1"
              />
              <motion.select 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-b border-gray-400 focus:outline-none px-2 text-[#023F5C] font-semibold"
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="Singapore">Singapore</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </motion.select>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SalaryCalculator;
