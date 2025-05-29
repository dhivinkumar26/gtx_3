import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Eimg1 from "../../assets/E2.png";
import Eimg2 from "../../assets/E3.png";
import Eimg3 from "../../assets/E4.png";
import Eimg4 from "../../assets/E5.png";
import Eimg5 from "../../assets/E6.png";
import Eimg6 from "../../assets/E7.png";

const filters = [
  "All", "Panel Discussion", "Webinar", "In-Person HR Networking", "In-Person Candidate-Client Networking", "Multi-Company Job Fair for NRIs"
];

const events = [
    {
      title: "Leaders Exchange Series",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg1,
    },
    {
      title: "Technology Game Changers Series",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg2,
    },
    {
      title: "Client Specific",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg3,
    },
    {
      title: "Leaders Exchange HR Social",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg4,
    },
    {
      title: "TalConnect",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg5,
    },
    {
      title: "Billion Dreams",
      date: "20 November 2024 | 3:00 PM Onwards",
      location: "G P Birla Centre, Bangalore",
      registrations: "1.4k+",
      image: Eimg6,
    },
  ];

const EventList = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${
                selectedFilter === filter
                  ? "bg-orange-500 text-white"
                  : "border-gray-300 text-gray-600"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Title, Keywords"
            className="border rounded-full px-4 py-2 w-64 md:w-80 focus:outline-none"
          />
          <FiSearch className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <FaMapMarkerAlt /> {event.location}
              </p>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="text-gray-500 text-sm">{event.registrations} Registrations</p>
              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
