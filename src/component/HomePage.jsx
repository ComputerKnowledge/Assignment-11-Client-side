import React from "react";
import FaqSection from "./FaqSection";
import Banner from "./Banner";
import HomeFeatures from "./HomeFeatures";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeFeatures></HomeFeatures>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
