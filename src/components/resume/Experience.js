import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 py-12 font-titleFont"
    >
      <div>
        <div className="flex flex-col gap-4 py-3 px-4 lgl:py-12">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2010 - 2019)"
            result="INDIA"
            des="Worked as Software from 2015 onwards.  Started as a backend using Node.js, Express.js and MongoDB.  Later moved into E-commerce team and lated internal team as well"
          />
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Worked as IT manager in software department and automated OTRS tool using React from frontend and node.js from backeend."
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH- (2022 - 2023)"
            result="GERMANY"
            des="Worked as Lead for our Banking client.  The MERN is the technology used to work on different projects and Lit-Component is the primary technology used by clients.  Jest is used for unit testing."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-6 px-4 lgl:py-12">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Personal Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Uber Clone"
            subTitle="MERN and MicroServices"
            result="PERSONAL"
            des="Uber Clone App using MERN Stack and used Microservices Architecture, Tailwind css.  Implemented authentication using JWT tokens and implemented Socket.io for real-time communication."
          />
          <ResumeCard
            title="YouTube Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Used MERN stack to build YouTube Clone.  Other framework using in this project are TailwindCSS, React-typewriter scroll icons and Framer-motion."
          />
          <ResumeCard
            title="Whatsapp Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Used MERN stack to build Whatsapp Clone.  Other framework using in this project are TailwindCSS, React-typewriter scroll icons and Framer-motion.  Socket.io framework for real-time messaging."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
