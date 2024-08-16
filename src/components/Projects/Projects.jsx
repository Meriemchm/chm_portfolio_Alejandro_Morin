import React from "react";
import ProjectTab from "./ProjectTab";
const Projects = () => {
  return (
    <div
      
      name="Proyecto"
      className="xl:px-20 mx-auto p-5 flex flex-col  h-full w-full"
    >
      <div data-aos="fade-up">
        <p className="text-4xl md:text-4xl font-semibold text-five text-center py-8 text-primary ">
          Proyecto
        </p>
      </div>

      <ProjectTab />
    </div>
  );
};

export default Projects;
