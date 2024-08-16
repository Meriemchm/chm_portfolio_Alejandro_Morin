import React, { useState } from "react";
import { menuItemProject } from "../Data/Data";
import Project from "../Projects/Project";

const activeButton = "bg-four";
const activeColor = "bg-four/50";
const activetext = "text-second";
const activebg = "border-second";

const ProjectTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(
    menuItemProject.map((item, index) => index === 0)
  );

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuItemProject.map((item, i) => i === index);
    setActive(newActive);
  };
  return (
    <>
      <div className="mx-auto md:h-full max-w-screen-2xl  overflow-x-scroll md:overflow-x-hidden  w-full ">
        <div className="flex flex-row  gap-5 select-none   ">
          {menuItemProject.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex border md:py-5 px-3 py-3 md:px-5 justify-start items-center md:gap-5 gap-2 bg-gray-100/50 rounded-lg cursor-pointer w-28  md:w-44
                    ${active[id] ? activebg : "border-gray-200"}`}
                >
                  <p
                    className={` font-semibold capitalize md:text-lg  ${
                      active[id] ? activetext : "text-gray-500"
                    }`}
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
      <>
        <Project category={menuItemProject[activeTab].title} />
      </>
    </>
  );
};

export default ProjectTab;
