import React, { useState, useEffect } from "react";

// import components

import NavMobile from "./NavMobile";

// import logo
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <div className="lg:ml-32 ml-4 md:ml-10">
      <header
        className={`${
          header ? "top-0 h-[80px]" : "top-9"
        } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
      >
        <div className="flex items-center">
          {/* logo */}
          <a href="/">
            <img className="h-12 " src={Logo} alt="logo" />
          </a>
          {/* nav */}
          <div className="hidden lg:flex"></div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex lg:gap-x-4 ">
            <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
              Sign In
            </button>
            <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition">
              Sign Up
            </button>
          </div>
          {/* nav mobile */}
          <NavMobile />
        </div>
      </header>
    </div>
  );
};

export default Header;
