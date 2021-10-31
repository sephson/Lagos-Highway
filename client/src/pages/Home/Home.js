import React from "react";
import FlexCards from "../../components/FlexCards/FlexCards";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Places from "../../components/Places/Places";
import Prefooter from "../../components/PreFooter/Prefooter";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Places />
      <FlexCards />
      <Prefooter />
    </div>
  );
};

export default Home;
