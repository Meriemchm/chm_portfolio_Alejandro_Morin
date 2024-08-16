import React from "react";
import { resumeItem } from "../Data/Data";

const ResumeContainer = ({ category }) => {
  const items = resumeItem.filter((item) => item.category === category);

  return (
    <div className="p-4">
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex md:contents ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`relative p-4 my-6 text-gray-800 bg-white rounded-xl ${
                index % 2 === 0 ? "col-start-1 col-end-5 mr-auto" : "col-start-6 col-end-10 mr-auto"
              }`}
            >
              <h3 className="text-lg font-semibold lg:text-xl">{item.title}</h3>
              <p className="mt-2 leading-6">{item.description}</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                {item.date}
              </span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7  md:mx-auto">
              <div className="flex items-center justify-center w-6  h-full">
                <div className="w-1 h-full bg-second rounded-t-full bg-gradient-to-b from-second to-second"></div>
              </div>
              <div className="absolute z-10 w-6 h-6 -mt-3 bg-white border-4 border-second rounded-full top-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeContainer;
