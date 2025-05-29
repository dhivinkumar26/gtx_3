import React, { useState } from "react";
import img from "../../assets/image.png";

const Fea = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-7">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            See all features and compare plans
          </h2>
          <button
            className="text-orange-500 font-semibold mt-2 flex items-center mx-auto"
            onClick={() => setShowFeatures(!showFeatures)}
          >
            {showFeatures ? "Compare all features ▲" : "Compare all features ▼"}
          </button>
        </div>

        {/* Feature List - Expands on click */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showFeatures ? "max-h-[3000px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6">
            {[
              {
                category: "Job Posts",
                details: [
                  { label: "Job Posts", basic: "3 Posts", pro: "8 Posts", elite: "Unlimited", enterprise: "Unlimited" },
                  { label: "Duration", basic: "1 Month", pro: "3 Months", elite: "6 Months", enterprise: "Custom" },
                ],
              },
              {
                category: "Talent Solutions",
                details: [
                  { label: "Pre-Screening & Vetting", basic: "✔", pro: "✔", elite: "✔", enterprise: "✔" },
                  { label: "Custom Talent Mapping", basic: "✗", pro: "✔", elite: "✔", enterprise: "✔" },
                  { label: "Sourcing Support", basic: "✗", pro: "✔", elite: "✔", enterprise: "✔" },
                  { label: "Diversity Filter", basic: "✔", pro: "✔", elite: "✔", enterprise: "✔" },
                ],
              },
              {
                category: "Employer Branding & Marketing",
                details: [
                  { label: "Company Microsite", basic: "✔", pro: "Basic Features", elite: "Customizable", enterprise: "✔" },
                  { label: "Employee Stories", basic: "✗", pro: "2 Features", elite: "2 Features", enterprise: "✔" },
                  { label: "Social Media Campaigns", basic: "2 Posts", pro: "5 Posts", elite: "12 Posts", enterprise: "✔" },
                ],
              },
              {
                category: "Thought Leadership",
                details: [
                  { label: "HR Podcast #FiresideChat", basic: "✗", pro: "✗", elite: "2 Features", enterprise: "✔" },
                  { label: "Custom Talent Engagement Webinar", basic: "✗", pro: "✗", elite: "1 Feature", enterprise: "✔" },
                ],
              },
              {
                category: "Analytics",
                details: [
                  { label: "Customized Analytics Report", basic: "✗", pro: "Insights", elite: "Advanced Analytics", enterprise: "✔" },
                  { label: "Candidate Feedback Report", basic: "✗", pro: "✗", elite: "✔", enterprise: "✔" },
                ],
              },
              {
                category: "Events",
                details: [
                  { label: "Billion Dreams 2025 & IdeaCon", basic: "Priority Invite", pro: "Priority + 1 Invite", elite: "Priority + 3 Invites", enterprise: "Unlimited" },
                  { label: "Leaders Exchange Series", basic: "1 Invite", pro: "3 Invites", elite: "5 Invites", enterprise: "✔" },
                  { label: "Technology Game Changers Series", basic: "1 Invite", pro: "3 Invites", elite: "5 Invites", enterprise: "✔" },
                  { label: "HR Social", basic: "✔", pro: "✔", elite: "✔", enterprise: "✔" },
                ],
              },
            ].map((feature, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-900">{feature.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 text-gray-700 text-sm mt-3 gap-2">
                  <div className="font-semibold">Feature</div>
                  <div className="text-center font-semibold">Basic</div>
                  <div className="text-center font-semibold">Pro</div>
                  <div className="text-center font-semibold">Elite</div>
                  <div className="text-center font-semibold">Enterprise</div>
                </div>
                {feature.details.map((item, j) => (
                  <div key={j} className="grid grid-cols-1 md:grid-cols-5 text-gray-700 text-sm mt-1 gap-2">
                    <div>{item.label}</div>
                    <div className="text-center text-black">{item.basic}</div>
                    <div className="text-center text-black">{item.pro}</div>
                    <div className="text-center text-black">{item.elite}</div>
                    <div className="text-center text-black">{item.enterprise}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Plan Section */}
      <div className="mt-16 bg-gray-900 text-white p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="text-left max-w-lg">
          <h3 className="text-3xl font-semibold mb-4">
            Need a Custom Plan or Unlimited Access?
          </h3>
          <p className="text-gray-300 text-lg">
            Unlock exclusive access to tailored solutions and unlimited job posts. Our team can help you find the perfect plan to meet your hiring goals.
          </p>
        </div>
        <div className="flex items-center gap-20 mt-8 sm:mt-0">
          {/* Box-Shaped Image */}
          <img
            src={img}
            alt="Schedule Call"
            className="w-64 h-24 object-cover rounded-lg shadow-lg"
          />
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-200 transition">
            Schedule a Call →
          </button>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-extrabold text-gray-800">
          Trusted by 500+ Companies Worldwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-60">
          <span className="text-gray-500 text-lg">🔳 Lightbox</span>
          <span className="text-gray-500 text-lg">⚡ Boltshift</span>
          <span className="text-gray-500 text-lg">🔲 Lightbox</span>
          <span className="text-gray-500 text-lg">📁 FeatherDev</span>
          <span className="text-gray-500 text-lg">🏦 GlobalBank</span>
          <span className="text-gray-500 text-lg">📁 FeatherDev</span>
        </div>
      </div>
    </section>
  );
};

export default Fea;
