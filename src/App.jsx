import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from './components/Country/Country';
import Footer from './components/Country/Footer';
import Pricing from './components/Pricing/Pricing1';
import Event from './components/Events/Events';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
