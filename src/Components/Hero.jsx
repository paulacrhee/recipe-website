import React from "react";
// import parallax
import { Parallax } from "react-parallax";
// import image
import Image from "../assets/img/hero/guy.png";

const Hero = () => {
  return (
    <section className=" min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32 lg:pt-32 top-0">
          <div className="flex-1 lg:mt-12">
            <h1 className="h1 mb-3 lg:mb-[22px]">
              Culinary <br /> Coalition any time
            </h1>
            <p className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg">
              We’re partnering with dynamic chefs, baristas, and registered
              dietitians in the culinary industry to bring innovative ideas,
              fresh content, and menu inspiration to you all year long.
            </p>
            <div className="mb-12 space-x-4">
              <button className="btn btn-sm lg:btn-lg btn-orange">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-28 lg:p-16"
                  bgImage={Image}
                  bgImageAlt="guy"
                  strength={200}
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
