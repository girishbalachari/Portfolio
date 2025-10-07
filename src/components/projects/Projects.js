import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center text-center">
        <Title
          title="THANKS FOR VISITING MY PORTFOLIO and GIVE YOUR FEEDBACK"
          des="My personal Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Book Store App"
          des=" This project was built using MERN stack and the modern technologies like Tailwind CSS, Redux, RTK Query Toolkit, Mongoose, and JWT"
          src={projectThree}
        />
        <ProjectsCard
          title="Uber Clone App"
          des="Uber Clone App using MERN Stack and used Microservices Architecture, Tailwind css.  Implemented authentication using JWT tokens and implemented Socket.io for real-time communication."
          src={projectOne}
        />
        <ProjectsCard
          title="Restaurant App"
          des="Build using MERN Stack and using Typescript.  To manage global state with Zustand, integrate Stripe for secure payment processing and implement best practices for SEO optimization. "
          src={projectTwo}
        />
        <ProjectsCard
          title="YouTube Clone"
          des="Youtube clone using MERN stack.  Not all youtube app features are implemented and only the video features such as video upload and download playing and creating channels are implemented."
          src={projectFour}
        />
        <ProjectsCard
          title="WhatsApp Clone"
          des="WhatsApp Clone includes Chatting and video calling features. Using Socket.io for real-time communication between clients and server.  Implemented authentication using OTP and JWT tokens."
          src={projectFive}
        />
        <ProjectsCard
          title="Grocery Delivery App"
          des="Grocery Delivery App includes admin panel features, product management, dynamic cart system, Stripe checkout, and a fully responsive UI.  Used MERN stack and Tailwind CSS for styling."
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
