import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  const [showTnx, setShowTnx] = useState(false); 
  const navigate = useNavigate(); 

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowTnx(true); 

   
    setTimeout(() => {
      navigate("/Pricing");
    }, 5000);
  };

  const handleCloseTnx = () => {
    setShowTnx(false);
    navigate("/Pricing"); 
  };

  return (
    <>
      {!showTnx ? (
        
        <div className="fixed inset-0 flex items-center justify-center bg-red/30 backdrop-blur-xl z-50" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-lg transition-all transform"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-800" onClick={onClose}>
              ✖
            </button>

            
            <h2 className="text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-center mb-6">Fill in your details and we'll reach out!</p>

            
            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                { label: "Full Name*", type: "text", placeholder: "Enter your full name" },
                { label: "Work Email*", type: "email", placeholder: "Eg. John@gtx.com" },
                { label: "Company Name*", type: "text", placeholder: "Enter your company name" }
              ].map((field, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    className="w-full border rounded-full px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Mobile Number*</label>
                <div className="flex border rounded-full px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500">
                  <span className="mr-2 text-gray-700">🇮🇳 +91</span>
                  <input type="tel" className="w-full outline-none" placeholder="Enter your mobile number" required />
                </div>
              </div>

              
              {[
                { label: "Your Role*", options: ["Select your role..", "HR Manager", "Recruiter", "Business Owner"] },
                { label: "Company Size*", options: ["Select your company size..", "1-10 Employees", "10-50 Employees", "50-200 Employees", "200+ Employees"] }
              ].map((dropdown, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">{dropdown.label}</label>
                  <select className="w-full border rounded-full px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500" required>
                    {dropdown.options.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}

              
              <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600">Your submission has been received.</p>
            <p className="text-gray-500 text-sm">Redirecting to Pricing Page...</p>

           
            <button
              className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
              onClick={handleCloseTnx}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
