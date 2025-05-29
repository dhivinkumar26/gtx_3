import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

import Img from "../../assets/Img2.png";

const Footer = () => {
  return (
    <footer className="bg-[#002A3A] text-white py-8 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-15">
        {/* Left Section - Logo & About */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center md:text-left md:w-1/4"
        >
          <img src={Img} alt="GTX Logo" className="h-11 mx-auto md:mx-0" />
          <p className="mt-4 text-sm text-white opacity-80">
            We are a global tech recruiting platform that brings game changers - businesses and talent - together.
          </p>
          <h3 className="mt-6 text-[#989BA6] font-semibold">Connect with us</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <motion.a 
                key={index} 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="text-xl cursor-pointer"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div className="grid grid-cols-2 md:flex md:w-2/4 md:justify-between">
          {[{
            title: "About Company", 
            links: ['Who are we', 'Search Job', 'Privacy Policy', 'Terms & Conditions', 'Get in touch']
          }, {
            title: "Resources", 
            links: ['Blogs', 'Articles', 'Webinars', 'Videos', 'Latest Trends']
          }, {
            title: "Top Countries", 
            links: ['India', 'Italy', 'Canada', 'Singapore', 'United Kingdom']
          }].map((section, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="font-semibold text-[#989BA6] text-lg mb-3">{section.title}</h3>
              {section.links.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="block text-sm mt-5 text-white opacity-80 hover:opacity-100 transition"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center md:text-left md:w-1/4"
        >
          <h3 className="font-semibold text-lg text-[#989BA6] mb-3">Subscribe for Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-3 py-2 px-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white border border-gray-500"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md"
          >
            Subscribe
          </motion.button>
          <h3 className="font-semibold text-[#989BA6] text-sm mt-6">For Recruiters</h3>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block mt-3 text-sl text-[#FFFFFF] opacity-80 hover:opacity-100 transition"
            href="#"
          >
            GTX for Recruiters <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">Recruiter</span>
          </motion.a>
        </motion.div>
      </div>
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-sm opacity-80">© 2024 Globaltalex Pvt. Ltd. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
