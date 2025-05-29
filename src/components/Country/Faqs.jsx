import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Urna.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Egestas morbi dignissim gravida mi. Id lobortis nisl vitae cras pretium cursus id elit ut. Tincidunt tincidunt pharetra dignissim aenean pellentesque tristique tristique. Non in eros purus id enim. Lacus mi vel bibendum a egestas eu dictum nunc tellus. Orci sit amet malesuada eget praesent risus. Rhoncus ipsum.",
  },
  { question: "Lorem ipsum dolor sit amet consectetur. Urna.", answer: "Lorem ipsum dolor sit amet consectetur. Egestas morbi dignissim gravida mi. Id lobortis nisl vitae cras pretium cursus id elit ut. Tincidunt tincidunt pharetra dignissim aenean pellentesque tristique tristique. Non in eros purus id enim. Lacus mi vel bibendum a egestas eu dictum nunc tellus. Orci sit amet malesuada eget praesent risus. Rhoncus ipsum." },
  { question: "Lorem ipsum dolor sit amet consectetur. Urna.", answer: "Lorem ipsum dolor sit amet consectetur. Egestas morbi dignissim gravida mi. Id lobortis nisl vitae cras pretium cursus id elit ut. Tincidunt tincidunt pharetra dignissim aenean pellentesque tristique tristique. Non in eros purus id enim. Lacus mi vel bibendum a egestas eu dictum nunc tellus. Orci sit amet malesuada eget praesent risus. Rhoncus ipsum.." },
  { question: "Lorem ipsum dolor sit amet consectetur. Urna.", answer: "  Lorem ipsum dolor sit amet consectetur. Egestas morbi dignissim gravida mi. Id lobortis nisl vitae cras pretium cursus id elit ut. Tincidunt tincidunt pharetra dignissim aenean pellentesque tristique tristique. Non in eros purus id enim. Lacus mi vel bibendum a egestas eu dictum nunc tellus. Orci sit amet malesuada eget praesent risus. Rhoncus ipsum." },
  { question: "Lorem ipsum dolor sit amet consectetur. Urna.", answer: "Lorem ipsum dolor sit amet consectetur. Egestas morbi dignissim gravida mi. Id lobortis nisl vitae cras pretium cursus id elit ut. Tincidunt tincidunt pharetra dignissim aenean pellentesque tristique tristique. Non in eros purus id enim. Lacus mi vel bibendum a egestas eu dictum nunc tellus. Orci sit amet malesuada eget praesent risus. Rhoncus ipsum." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white rounded-xl py-12 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#474D6A] mt-5 mb-8">FAQ (Frequently Asked Question)</h2>
      <div className="w-full mt-5 max-w-3xl  space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
          >
            <div
              className="flex justify-between items-center p-5 text-gray-800 font-medium hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
            </div>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-5 text-gray-600 bg-gray-50"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
