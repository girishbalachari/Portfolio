import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { FaBars } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Build on Web technologies" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="HTML version 5 CSS(TailwindCSS) Version 3 JavaScript ReactJS only Functional components NextJS Typescript"
          icon={<FaBars />}
        />
        <Card
          title="Backend Development"
          des="NodeJS ExpressJS and NextJS only backend no python, Java or C#.  MongoDB for CRUD operations and no DB administration"
          icon={<SiProgress />}
        />
        <Card
          title="Full stack Development"
          des="MERN Stack using ReactJS for frontend and NodeJS ExpressJS for backend and MongoDB for DB"
          icon={<AiFillAppstore />}
        />
        <Card
          title="AI agent Development"
          des="AI agent development using openAI API and Langchain for backend and ReactJS for frontend and MongoDB for DB"
          icon={<SiFrontendmentor />}
        />
        <Card
          title="Progressive Web Apps"
          des="Web applications built with web technologies that provide an app-like, platform-specific experience on different operating systems"
          icon={<SiAntdesign />}
        />
        <Card
          title="Cross-Platform"
          des="Cross-platform development means building a single application using a shared codebase that runs on multiple OS platforms"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
