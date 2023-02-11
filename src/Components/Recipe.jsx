import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChefImage3 from "../assets/img/chefs/chef-3.png";

var id = "";
const Recipe = () => {
  const [item, setItem] = useState();
  const { recipeId } = useParams();
  const ingredients = [];
  if (recipeId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  if (item) {
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  }
  if (item) {
    for (let i = 1; i < 20; i++) {
      if (
        item[`strIngredient${i}`] === "" ||
        item[`strIngredient${i}`] === null ||
        item[`strIngredient${i}`] === undefined
      ) {
        break;
      } else {
        ingredients.push(
          item[`strMeasure${i}`] + " " + item[`strIngredient${i}`]
        );
      }
    }
  }
  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="text-center mt-44">
          <h2 className="h2 lg:mb-[18px]">{item.strMeal}</h2>
          <div className="max-w-[480px] mx-auto my-2">
            <p
              className=" text-orange p-2 
            "
            >
              {" "}
              {item.strArea} Food{" "}
            </p>{" "}
            Category: {item.strCategory}
          </div>
          <div className="flex  place-content-center  my-8">
            {" "}
            <img
              className=" h-12 w-12 rounded-full ring-2 ring-white mr-4"
              src={ChefImage3}
              alt="chef"
            />
            <p className="mt-4">
              Recipe by <span className="font-bold">SAM SMITH</span>{" "}
            </p>
          </div>

          <section className="section-sm ">
            <div className="container mx-auto">
              <div className="mb-16">
                {/* setVurl(item.strYoutube)
                                //const str=item.strYoutube.split("=");
                                //state=str[str.length-1];
                                //state="hj"    */}

                <iframe
                  width="
                        100%"
                  height="515"
                  title="recipeVideo"
                  src={`https://www.youtube.com/embed/${id}`}
                ></iframe>
              </div>
              <div className="bg-white p-8 mb-16 font-bold ">
                <div className="place-content-center flex gap-8">
                  <div>
                    YIELDS: <div className="mt-2 text-orange">3 - 4</div>
                  </div>
                  <di className="mt-2.5">|</di>
                  <div>
                    TOTAL TIME: <div className="mt-2 text-orange">45 mins</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap  text-left leading-8">
                <div className="lg:w-1/4 mb-8">
                  <h2 className="font-bold text-xl mb-8">Ingredients</h2>

                  {ingredients.length > 0 &&
                    ingredients.map((item) => (
                      <>
                        <div className="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 0 focus:ring-2 "
                          />
                          <label
                            for="default-checkbox"
                            className="ml-2 text-sm  text-gray-900 font-bold"
                          >
                            {item}
                          </label>
                        </div>
                      </>
                    ))}
                </div>
                <div className="lg:w-3/4">
                  <h2 className="font-bold text-xl">Directions</h2>
                  <br />
                  <p>
                    {item.strInstructions.replace("Step 2", "Step 2 \n\n \n")}
                  </p>
                  <img className="mt-8" src={item.strMealThumb} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default Recipe;
