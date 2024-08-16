import React from "react";
import { techs } from "../Data/Data";
import Skill from "./Skill";

const Skills = () => {
  const pl = techs.filter((tech) => tech.type === "Programming languages");
  const db = techs.filter((tech) => tech.type === "Database");
  const ds = techs.filter((tech) => tech.type === "Design");
  const fm = techs.filter((tech) => tech.type === "Framework");
  const en = techs.filter((tech) => tech.type === "Environment");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div name="Habilidades" className="bg-four w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full ">
        <div data-aos="fade-up">
          <p className="text-4xl md:text-4xl font-semibold text-five text-center py-8 text-primary ">
            Habilidades
          </p>
        </div>
        {/* Programming languages */}
        <Skill Title="Programming languages" data={pl} />
        <Skill Title="Database" data={db} />
        <Skill Title="Frameworks" data={fm} />
        <Skill Title="Environment" data={en} />
        <Skill Title="Design" data={ds} />
        <Skill Title="Others" data={othersTechs} />
      </div>
    </div>
  );
};

export default Skills;
