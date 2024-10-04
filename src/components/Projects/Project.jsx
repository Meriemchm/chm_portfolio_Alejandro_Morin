import React, { useState } from "react";
import { projects } from "../Data/Data";
import share from "../../assets/share.svg";
import github from "../../assets/github2.svg";

const Project = ({ category }) => {
  const items = projects.filter((item) => item.category === category);
  const [truncatedStates, setTruncatedStates] = useState(
    items.map(() => true) 
  );
  const text_demo = category === 'Design' ? 'Demo' : 'Github'

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-center py-8 px-0 justify-center items-center min-h-screen ">
      {items.length === 0 ? (
        <div className="flex justify-center items-center mx-auto w-full h-full">
          <p className="text-center font-semibold text-lg">No projects yet on this category</p>
        </div>
      ) : (
        items.map(({ id, src, title, description, hdemo }) => {
          return (
            <div
              data-aos="fade-up"
              key={id}
              className="shadow-md shadow-gray-600 bg-white rounded-lg self-start"
            >
              <div className="relative group ">
                {src}
                <a
                  href={hdemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
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
                        e.stopPropagation(); 
                        toggleTruncate();
                      }}
                    >
                      {isTruncated ? "Voir plus" : "Voir moins"}
                    </button>
                  )}
                </p>

                <div className="flex justify-end items-end gap-3 mt-4">
                  {hdemo !== "" && (
                    <button className="flex px-6 py-3 rounded-lg border-[2px] border-gray-200 duration-200 hover:scale-105">
                      <a
                        href={hdemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex"
                      >
                        {text_demo}{" "}
                        {category === 'Design' ? <span className="self-center pl-2">
                          <img src={share} alt="share" />
                        </span> : <span className="self-center pl-2">
                          <img src={github} alt="share" />
                        </span> }{" "}
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Project;
