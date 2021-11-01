import React from "react";
import Copyright from "../../components/Copyright/Copyright";
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
      <Copyright />
    </div>
  );
};

export default Home;
