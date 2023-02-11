import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Icon from "../assets/img/cards2/icon.png";
// import data
import { cards } from "../data";

const Chefs = () => {
  return (
    <div className="text-center mt-16 lg:mt-32">
      <h2 className="h2 lg:mb-[18px]">This is magic in the making</h2>
      <p className="max-w-[480px] mx-auto">
        Collaboration is our bread and butter. Have a great idea? Connect with
        us. Together, we can whip up something wonderful.
      </p>

      <section className="section-sm ">
        <div className="container mx-auto">
          {/* card list */}
          <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
            {cards.map((item, index) => {
              const { image, title, desc } = item;
              return (
                <div
                  className=" lg:pb-[38px] bg-white flex flex-col rounded-[14px] mx-auto transition"
                  key={index}
                >
                  <div className="mb-8 lg:mb-8">
                    <img
                      className="h-80 rounded-t-md w-full"
                      src={image}
                      alt="card"
                    />
                  </div>
                  <div className="text-left mx-8 mb-8 lg:mb-2">
                    <h4 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-4">
                      {title}
                    </h4>{" "}
                    <p className="mb-8 font-light ">{desc}</p>
                    <a
                      href="/"
                      className="flex text-orange  bg-transparent transition"
                    >
                      Learn more{" "}
                      <span className="ml-4 mt-1 ">
                        <IoIosArrowForward />
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="place-content-center flex h-20 text-center ">
          {" "}
          <img src={Icon} alt="icon" />
        </div>
      </section>
    </div>
  );
};

export default Chefs;
