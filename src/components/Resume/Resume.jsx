import React from "react";
import SideBar from "../SideBar/SideBar";

const Resume = () => {
  <div name="Currículum" className="bg-white w-full min-h-screen">
    <div className="max-w-screen-lg p-4 mx-auto  flex flex-col w-full h-full ">
      <p className="text-4xl text-black font-bold p-2 inline">
        Mi <span className="text-primary">Currículum</span>{" "}
      </p>

      <div className="flex flex-col md:flex-row">
        <SideBar />
      </div>
    </div>
  </div>;
};

export default Resume;
