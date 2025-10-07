import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 py-12 font-titleFont"
    >
      <div>
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            IT System Administrator
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2005 - 2007)"
            result="INDIA"
            des="Worked as IT Administrator to the US based HP datacenter office. Support from remote locations and a team of 200 engineers.  We are supporting HP server and window servers that support hardware and software as well. "
          />
          <ResumeCard
            title="Infrastructure Management Analyst"
            subTitle="AFFILIATED COMPUTER Service India P LTD - (2007 - 2010)"
            result="INDIA"
            des="Worked as End to End infrastructure support engineer for US base HCS clients.  Complete planning of Disaster recovery for client application.  Worked on VMware infrastructure installation and configuration and maintenance"
          />
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2010 - 2019)"
            result="INDIA"
            des="Worked as a VMware, Window and Cloud administrator until 2015.  After 2015 Full time software engineer as Backend and front end developer"
          />
        </div>
      </div>
      <div>
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">WEB DEVELOPER</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Worked as IT manager in software department and automated OTRS tool using React from frontend and node.js from backeend."
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH- (2020 - 2011)"
            result="GERMANY"
            des="Worked as Lead for our Banking client.  The MERN is the technology used to work on different projects and Lit-Element web component developing and integrating Client customized web components and its primary technology used by clients."
          />
          <ResumeCard
            title="Personal Project"
            subTitle="MERN Stack - (2023 - Present)"
            result="Success"
            des="Worked on MERN stack web apps such as Authentication App, Video call and Realtime chat app, Movie ticket booking app, Learning Management system app, Uber clone app and Grocery Delivery app."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
