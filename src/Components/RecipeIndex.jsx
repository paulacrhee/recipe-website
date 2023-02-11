import React from "react";

const ReacipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "Side",
    "Starter",
    "Vegetarian",
    "Seafood",
    "Beef",

    "Chicken",

    "Pork",
    "Pasta",
    "Dessert",
  ];
  let num = 0;
  return (
    <>
      {alpha.map((item) => {
        return (
          <div
            className="flex gap-4"
            key={num++}
            onClick={() => alphaIndex(item)}
          >
            <p className="cursor-pointer space-x-4 hover:text-orange">{item}</p>
          </div>
        );
      })}
    </>
  );
};
export default ReacipeIndex;
