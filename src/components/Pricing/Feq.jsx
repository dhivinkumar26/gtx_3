import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "How does Global Talent Exchange work?",
      answer:
        "Businesses can create job postings on the Global Talent Exchange platform. Tech talent can search for jobs and apply to them.",
    },
    {
      question: "What are the benefits of using Global Talent Exchange?",
      answer:
        "The platform provides global opportunities, streamlined hiring processes, and access to top tech talent.",
    },
    {
      question: "Is Global Talent Exchange free to use?",
      answer:
        "Yes, job seekers can use the platform for free. Businesses may have premium features available.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can sign up using your email and complete your profile to start applying for jobs.",
    },
    {
      question: "What industries does Global Talent Exchange cover?",
      answer:
        "We focus on tech roles such as software development, UI/UX design, data science, and cybersecurity.",
    },
  ];

export default function Feq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-4 md:px-0">
      {/* Background Effect */}
      <div className="absolute inset-2 bg-[url('/Line1.png')] bg-cover opacity-20"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>

      <div className="relative max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 text-gray-800 font-medium text-left hover:bg-gray-100 transition focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <Minus size={25} /> : <Plus size={29} />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
