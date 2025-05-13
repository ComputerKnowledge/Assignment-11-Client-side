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
      <HomeFeatures></HomeFeatures>
      <HomeChart></HomeChart>
      <Testimonials></Testimonials>
      <FaqSection></FaqSection>
    </div>
  );
};

export default HomePage;
