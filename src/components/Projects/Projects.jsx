import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div
      
      name="Proyecto"
      className="md:px-20 mx-auto p-4 flex flex-col  h-full w-full"
    >
      <div data-aos="fade-up">
        <p className="text-4xl md:text-4xl font-semibold text-five text-center py-8 text-primary ">
          Proyecto
        </p>
      </div>

      <Project />
    </div>
  );
};

export default Projects;
