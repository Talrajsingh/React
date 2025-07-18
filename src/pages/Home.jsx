import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Offers from "../components/offers";
import Testim from "../components/Testim";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <Feature />
        <Offers />
        <Testim/>
        <Newsletter/>
        
      </>
    </div>
  );
};

export default Home;
