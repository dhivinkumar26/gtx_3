import React from 'react';
import { motion } from 'framer-motion';

const blogData = [
  {
    title: 'Modern Talent Acquisition: Why In-Person Networking Seals the Deal',
    description: 'When we look back, there were days when resumes were piled high on a desk and interviews were a formal ...',
    date: 'Dec 03, 2024',
    image: "/blog1.png",
  },
  {
    title: 'Making India the Next Semicon Hub: Are We Ready?',
    description: 'The future, driven by the invisible magic of semiconductors, is hurtling toward us at breakneck speed ...',
    date: 'Dec 03, 2024',
    image: '/blog2.png',
  },
  {
    title: 'Modern Talent Acquisition: Why In-Person Networking Seals the Deal',
    description: 'When we look back, there were days when resumes were piled high on a desk and interviews were a formal ...',
    date: 'Dec 03, 2024',
    image: "/blog1.png",
  },
  {
    title: 'Making India the Next Semicon Hub: Are We Ready?',
    description: 'The future, driven by the invisible magic of semiconductors, is hurtling toward us at breakneck speed ...',
    date: 'Dec 03, 2024',
    image: '/blog2.png',
  },
];

export default function GTXResources() {
  return (
    <div className="container py-10 px-5 md:px-18 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-[#474D6A] mt-10 mb-6">GTX Resources</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogData.map((blog, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-white mt-10 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Image Section */}
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-1/3 object-cover md:h-auto"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Text Content */}
            <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-lg font-semibold text-[#212121]">{blog.title}</h3>
                <p className="text-gray-500 text-sl mt-2">{blog.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <a href="#" className="flex items-center text-[#212121] hover:underline">
                  Read More <span className="ml-1 text-xl">→</span>
                </a>
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <a href="#" className="text-orange-600 text-xl font-medium mt-10 inline-block hover:underline">
        See all blogs →
      </a>
    </div>
  );
}
