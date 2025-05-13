import React from "react";
import FaqSection from "./FaqSection";
import Banner from "./Banner";
import HomeFeatures from "./HomeFeatures";
import Testimonials from "./Testimonials";
import HomeChart from "./HomeChart";
import ContactUs from "./ContactUs";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-4 lg:px-0">
        <HomeFeatures></HomeFeatures>
        <HomeChart></HomeChart>
        <Testimonials></Testimonials>
        <FaqSection></FaqSection>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default HomePage;
