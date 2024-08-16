import React, { useState } from "react";
import { projects } from "../Data/Data";
import share from "../../assets/share.svg";

const Project = ({ category }) => {
  const items = projects.filter((item) => item.category === category);
  return (
    <div className="mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6 text-center py-8 px-0 justify-center items-center ">
      {items.map(({ id, src, title, description, hdemo }) => {
        const [isTruncated, setIsTruncated] = useState(true);

        const toggleTruncate = () => {
          setIsTruncated(!isTruncated);
        };
        return (
          <div
            data-aos="fade-up"
            key={id}
            className="shadow-md shadow-gray-600 bg-white rounded-lg self-start"
          >
            <div className="relative group ">
              {src}
              <a href={hdemo} target="_blank" className="flex">
                <div className="absolute inset-0 rounded-t-lg bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer select-none">
                  Saber más
                </div>
              </a>
            </div>

            <div className="mx-5 flex flex-col text-gray-800 my-4 justify-between">
              <h2 className="text-bold text-2xl capitalize mb-2 self-start">
                {title}
              </h2>

              <p className="text-start text-sm ">
                {description.length > 150 && (
                  <button
                    className="text-bold pl-1"
                    onClick={(e) => {
                      e.stopPropagation(); // Arrête la propagation de l'événement
                      toggleTruncate();
                    }}
                  >
                    {isTruncated ? "Voir plus" : "Voir moins"}
                  </button>
                )}
              </p>

              <div className="flex justify-end items-end gap-3 mt-4">
                {hdemo !== "" && (
                  <button className="flex  px-6 py-3 rounded-lg border-[2px] border-gray-200  duration-200 hover:scale-105">
                    <a href={hdemo} target="_blank" className="flex">
                      Demo{" "}
                      <span className="self-center pl-2">
                        <img src={share} alt="share" />
                      </span>{" "}
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
