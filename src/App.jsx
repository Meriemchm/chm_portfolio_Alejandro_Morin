import React from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import SideBar from "./components/SideBar/SideBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <NavBar />
      <Home />
      <SideBar />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
