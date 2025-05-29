import React, { useState } from "react";
import Modal from "./Modal"; // Importing the modal component

const plans = [
  {
    title: "Basic",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "$50",
    features: ["3 Job Posts", "1 Month Duration", "Pre-Screening & Vetting", "Diversity Filter"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Pro",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "$100",
    features: ["8 Job Posts", "3 Month Duration", "Talent Mapping", "Sourcing Support", "Basic Microsite"],
    buttonText: "Get Started",
    popular: true, // Orange border and button
  },
  {
    title: "Elite",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "$200",
    features: ["Unlimited Job Posts", "6 Month Duration", "Custom Talent Branding", "Company Microsite", "Custom Microsite"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Enterprise",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "Custom",
    features: ["Unlimited Job Posts", "Custom Duration", "Advanced Features", "Admin Tools & API Access"],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 sm:py-11 bg-gray-99 bg-white">
      <div className="container mx-auto text-center px-1">
        {/* Currency Selector - Left Aligned */}
        <div className="flex flex-col pl-10 items-end space-y-1 mb-10">
          <span className="text-gray-600">Choose Your Currency</span>
          <select className="border border-gray-300 rounded px-3 py-2 font-semibold">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Pricing Plans</h2>
        <p className="text-gray-600 mb-8">Choose the plan that works best for your business.</p>

        {/* Pricing Grid (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg shadow-lg bg-white flex flex-col justify-between min-h-[500px] h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${
                plan.popular ? "border-2 border-orange-500" : ""
              }`}
            >
              {/* "Most Popular" Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-center">{plan.title}</h3>
              <p className="text-gray-500 text-center leading-relaxed">{plan.description}</p>
              <p className="text-3xl font-bold text-center mt-4">
                {plan.price}{" "}
                <span className="text-sm font-normal text-gray-600">
                  {plan.price !== "Custom" && "/per month"}
                </span>
              </p>
              <ul className="mt-4 space-y-2 leading-relaxed text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    ✔ <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal} // Open modal on button click
                className={`mt-6 py-3 px-4 w-full font-semibold rounded-lg ${
                  plan.popular ? "bg-orange-500 text-white" : "border border-gray-500 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Pricing;
