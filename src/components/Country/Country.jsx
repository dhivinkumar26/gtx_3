import React from 'react';
import Home1 from './Header1.jsx';
import Overview1 from './../Country/Overview.jsx';
import JobListings from './../Country/Joblisting.jsx';
import SalaryCalculator from './../Country/Salarycal.jsx';
import CTA from './../Country/CTAsection.jsx';
import SectionPage from './../Country/Section.jsx';
import Cities from './../Country/Cities.jsx';
import Blogdata from './../Country/Blogdata.jsx';
import FAQSection from './../Country/Faqs.jsx';

const Country = () => {
  return (
    <div>
      <Home1 />
      <Overview1 />
      <JobListings />
      <SalaryCalculator />
      <CTA />
      <SectionPage />
      <Cities />
      <Blogdata />
      <FAQSection />
      
    </div>
  );
};

export default Country;
