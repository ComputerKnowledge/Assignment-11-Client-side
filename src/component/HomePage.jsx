import React from "react";
import FaqSection from "./FaqSection";
import Banner from "./Banner";
import HomeFeatures from "./HomeFeatures";
import Testimonials from "./Testimonials";
import HomeChart from "./HomeChart";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-4 lg:px-0">
        <HomeFeatures></HomeFeatures>
        <HomeChart></HomeChart>
        <Testimonials></Testimonials>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default HomePage;
