import React from "react";
import FaqSection from "./FaqSection";
import Banner from "./Banner";
import HomeFeatures from "./HomeFeatures";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeFeatures></HomeFeatures>
      <FaqSection></FaqSection>
    </div>
  );
};

export default HomePage;
