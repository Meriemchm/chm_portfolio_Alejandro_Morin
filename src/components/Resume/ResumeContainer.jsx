import React from "react";
import { resumeItem } from "../Data/Data";

const ResumeContainer = ({ category }) => {
  const items = resumeItem.filter((item) => item.category === category);

  return (

      <div className="flex flex-col grid-cols-9  mx-auto md:grid p-5 md:p-20">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex md:contents ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              data-aos="fade-left"
              className={`relative p-4 my-6 text-gray-800 bg-white rounded-xl ${
                index % 2 === 0
                  ? "col-start-1 col-end-5 mr-auto"
                  : "col-start-6 col-end-10 mr-auto"
              }`}
            >
              <h3 className="font-semibold lg:text-xl">{item.title}</h3>
              <p className=" text-lg text-primary font-bold  whitespace-nowrap">
                {item.date}
              </p>
              <p className="mt-2 leading-6">{item.description}</p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7  md:mx-auto">
              <div className="flex items-center justify-center w-6  h-full">
                <div className="w-1 h-full rounded-t-full bg-second"></div>
              </div>
              <div className="absolute z-10 w-6 h-6 -mt-3 bg-white border-4 border-second rounded-full top-1/2"></div>
            </div>
          </div>
        ))}
      </div>

  );
};

export default ResumeContainer;
