import React from "react";
import Title from "../layouts/Title";
// import ProjectsCard from "./ProjectsCard";
import { ProjectCardData, ProjectsCard } from "./ProjectCardData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center text-center">
        <Title
          title="THANKS FOR VISITING MY PORTFOLIO and GIVE YOUR FEEDBACK"
          des="My Personal Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {ProjectCardData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            des={project.des}
            src={project.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
