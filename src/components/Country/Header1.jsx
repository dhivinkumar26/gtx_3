import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage1 from "../../assets/Img1.png";
import Logo from "../../assets/Img2.png";
import Logo1 from "../../assets/Img3.png";


const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${HeroImage1})` }}
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 text-[#FFFFFF] z-50">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl margin-left px-7 font-bold ml-6">
          <img src={Logo} alt="GTX Logo" className="h-10" />
        </motion.div>
        <div className="lg:hidden">
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
        <ul className="hidden lg:flex margin-left px-85 space-x-6 items-center">
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/search-jobs">Search Jobs</Link></motion.li>
          <li className="relative">
            <button className="flex items-center space-x-1 hover:opacity-80" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}>
              <span>Countries</span>
              <FaChevronDown className="text-sm" />
            </button>
          </li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/resources">Resources</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/events">Events</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/pricing">Pricing</Link></motion.li>
          <li className="relative">
            <button className="flex items-center space-x-2 hover:opacity-80" onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)}>
              <span>Looking for Job <span className="text-lg">↗</span></span>
              
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50 space-y-6 text-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button whileHover={{ scale: 1.1 }} className="absolute top-6 right-6" onClick={() => setIsMobileMenuOpen(false)}>
              <FaTimes size={24} />
            </motion.button>
            <motion.div whileHover={{ scale: 1.1 }}><Link to="/search-jobs" onClick={() => setIsMobileMenuOpen(false)}>Search Jobs</Link></motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }}>
              <button onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className="flex items-center space-x-1">
                <span>Countries</span>
                <FaChevronDown className="text-sm" />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}><Link to="/resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link></motion.div>
            <motion.div whileHover={{ scale: 1.1 }}><Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</Link></motion.div>
            <motion.div whileHover={{ scale: 1.1 }}><Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }}>
              <button onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)} className="flex items-center space-x-2">
                <span>Looking for Job</span>
                <FaArrowRight className="text-sm" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute top-23 left-7 text-white text-sm md:px-12">
        <span>Countries &gt;<span className="text-[#D2D2D2]"> Singapore</span> </span>
      </motion.div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center px-4 md:px-0">
        <p className="text-2xl md:text-3xl font-jakarta">Jobs in</p>
        <h1 className="text-4xl md:text-6xl font-bold flex items-center font-jakarta justify-center">
          Singapore
          <span className="ml-2 text-white text-xs px-2 py-1 mt-5 rounded-full">
            <img src={Logo1} alt="GTX Logo" className="h-10 md:h-12" />
          </span>
        </h1>
      </motion.div>
    </div>
    
  );
};

export default Header;
