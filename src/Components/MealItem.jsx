import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="max-w-sm bg-white rounded-lg shadow hover:shadow-primary cursor-pointer"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img
                  className="rounded-t-lg"
                  src={item.strMealThumb}
                  alt="food"
                />

                <div class="p-4">
                  <p className=" text-gray-700  mb-2">{item.strMeal}</p>
                  <p className="text-gray-200 text-sm italic font-thin">
                    {item.strCategory}
                  </p>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default MealItem;
