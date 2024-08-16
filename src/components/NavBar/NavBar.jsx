import React, { useState, useEffect } from "react";
import quite from "../../assets/quite.svg";
import bars from "../../assets/bars.svg";

import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`bg-second flex justify-between items-center w-full h-20  px-4 md:px-20 fixed z-50`}
    >
      <h2 className="text-white font-bold text-5xl">AM</h2>

      <ul className="hidden 2xl:flex items-center">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" 
               px-4 cursor-pointer hover:scale-105 duration-200 uppercase text-white"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10  2xl:hidden"
      >
        {show ? (
          <img src={quite} alt="quite" className="text-white" />
        ) : (
          <img src={bars} alt="bars" className="text-gray-500" />
        )}
      </div>
      {show && (
        <ul
          data-aos="fade-left"
          className={`bg-second text-white flex flex-col justify-start items-start absolute top-0 right-0 w-1/2 h-screen transition-transform transform ${
            show ? "translate-x-0" : "translate-x-full"
          } duration-300 ease-in-out`}
        >
          <div className=" flex flex-col justify-center items py-36">
            {Navlink.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="px-6 py-4 cursor-pointer md:text-xl hover:scale-105 duration-200 uppercase"
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    onClick={() => setShow(!show)}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
