import React from "react";

import Home from "./Pages/Home";
import Recipe from "./Components/Recipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
