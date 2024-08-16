import React, { useState } from "react";
import { sideBarItem } from "../Data/Data";
import ResumeContainer from "../Resume/ResumeContainer";

const activeButton = "bg-four";
const activeColor = "bg-four/50";
const activetext = "text-four";
const activebg = "bg-second";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(
    sideBarItem.map((item, index) => index === 0)
  );

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = sideBarItem.map((item, i) => i === index);
    setActive(newActive);
  };
  return (
    <div name="Currículum" className="bg-white min-h-screen">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center items-center h-full ">
        <div data-aos="fade-up">
          <p className="text-4xl md:text-4xl font-semibold text-five text-center py-5 ">
            Mi <span className="text-primary">Currículum</span>{" "}
          </p>
        </div>
        <div data-aos="fade-up" className="flex justify-center items-center  ">
          <div className="flex  gap-5 p-2 select-none ">
            {sideBarItem.map((item, id) => {
              return (
                <div key={id} onClick={() => handleClick(id)}>
                  <li
                    className={`flex flex-col border md:py-5 px-3 py-3 md:px-5 justify-start items-center md:gap-5 gap-2 w-44 rounded-lg cursor-pointer  
                  ${active[id] ? activebg : "bg-third"}`}
                  >
                    {item.icon}
                    <p
                      className={` text-bold capitalize 
                    text-white
                    `}
                    >
                      {" "}
                      {item.title}
                    </p>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <>
        <ResumeContainer category={sideBarItem[activeTab].title} />
      </>
    </div>
  );
};

export default SideBar;
