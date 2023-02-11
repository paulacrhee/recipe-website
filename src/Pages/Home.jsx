import React from "react";
import Hero from "../Components/Hero";
import Meal from "../Components/Meal";
import Cards from "../Components/Cards";
import Newsletter from "../Components/Newsletter";
import Chefs from "../Components/Chefs";
import Cards2 from "../Components/Cards2";
const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Cards2 />
      <Meal />
      <Chefs />
      <Newsletter />
    </>
  );
};
export default Home;
