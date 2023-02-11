import React from "react";

// import data
import { chefs } from "../data";

const Chefs = () => {
  return (
    <div className="text-center mt-16 lg:mt-32">
      <h2 className="h2 lg:mb-[18px]">Meet the 2023 Culinary Coalition</h2>
      <p className="max-w-[480px] mx-auto">
        Unique perspectives from chefs, baristas, and registered dietitians in
        the industry who seek to redefine culinary trends. Refresh your menu
        with inspiration, insights, and insider tips from our members.
      </p>

      <section className="section-sm lg:section-lg container mx-auto">
        {/* chef list */}
        <div className="flex flex-col  gap-x-[10px] lg:gap-x-[32px]  lg:flex-row  gap-y-20 ">
          {chefs.map((item, index) => {
            const { image, title, desc } = item;
            return (
              <div
                className="w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px]  bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition"
                key={index}
              >
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img className="lg:h-72 rounded-md" src={image} alt="chefs" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Chefs;
