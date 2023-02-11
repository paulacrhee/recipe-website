import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";

const Meal = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=s"
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (evt) => {
    evt.preventDefault();
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${alpha}`);
  };
  return (
    <>
      <div className="text-center mt-16 mb-16 lg:mt-24">
        <h2 className="h2 lg:mb-[18px]">Find a Recipe</h2>
        <p className="max-w-[480px] mx-auto">
          Together we’ll make the food you want to see in the world—seeking
          inspiration, creating dynamic new flavors, and above all sourcing the
          freshest, only natural ingredients.
        </p>

        <div className="grid  place-content-center  my-16">
          <div className="flex ">
            <input
              type="text"
              className="block w-full px-28 py-2 pl-8 bg-white  rounded-full focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search for recipes..."
              onChange={handleChange}
            />
            <button
              className="px-4 bg rounded-full text-white bg-orange"
              onClick={searchRecipe}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-wrap  gap-12 m-12">
        <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
      <div className="mx-8 grid lg:grid-cols-4 grid-cols-2 gap-4 text-center">
        {show ? <MealItem data={item} /> : "Not Found"}
      </div>
    </>
  );
};
export default Meal;
