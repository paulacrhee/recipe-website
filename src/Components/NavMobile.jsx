import React, { useState } from "react";
import { Link } from "react-router-dom";
// import menu btn
import { BiMenu } from "react-icons/bi";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden"
      >
        <BiMenu />
      </div>
      <ul
        className={`${
          isOpen ? "max-h-60 p-8" : "max-h-0 p-0"
        } flex flex-col absolute w-full top-24 left-0 bg-white rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}
      >
        <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
          Sign In
        </button>
        <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition">
          Sign Up
        </button>
      </ul>
    </nav>
  );
};

export default NavMobile;
