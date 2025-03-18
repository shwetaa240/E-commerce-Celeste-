import React from "react";
import Hero from "../components/Hero";
import Latest from "../components/latest";
import Bestseller from "../components/Bestseller";
import Exchange from "../components/Exchange";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Bestseller/>
      <Exchange/>
      <Newsletter/>
     
    </div>
  );
};

export default Home;
