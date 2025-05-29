import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import JobLogo from "../../assets/Img5.png";

const jobListings = Array(6).fill({
  title: "Lead Software Engineer",
  type: "Full-time",
  mode: "Hybrid",
  experience: "1 - 3 Years",
  company: "DBS Bank Pvt Ltd",
  location: "Dhaka, Singapore",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/DBS_Bank_logo.svg/1200px-DBS_Bank_logo.svg.png",
});

const JobCard = ({ job }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow-lg rounded-xl p-6 flex items-end justify-between w-full max-w-md border border-gray-200"
    >
      <div className="flex items-end space-x-4 w-full">
        <img src={JobLogo} alt="Company Logo" className="w-14 h-14 object-contain" />
        <div className="w-full">
          <h3 className="font-semibold text-gray-800 text-lg">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">{job.type}</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">{job.mode}</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">{job.experience}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2 font-medium">{job.company}</p>
          <p className="text-gray-500 text-sm flex items-center mt-1">
            <MapPin size={16} className="text-gray-500 mr-1" /> {job.location}
          </p>
        </div>
      </div>
      <motion.span whileHover={{ x: 5 }} className=" text-2xl">➜</motion.span>
    </motion.div>
  );
};

const JobListings = () => {
  return (
    <section className="py-10 px-6 sm:px-18 bg-[#00000005] flex flex-col ">
      <h2 className="text-3xl font-semibold text-[#474D6A] mb-15 ">Available Jobs</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {jobListings.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </motion.div>
      <motion.a 
        href="#" 
        className="text-orange-500 font-semibold text-center mt-15 text-xl gap-2 hover:underline"
        whileHover={{ scale: 1.1 }}
      >
        Explore all available jobs <motion.span whileHover={{ x: 5 }} className="text-xl text-black">↗</motion.span>
      </motion.a>
    </section>
  );
};

export default JobListings;
