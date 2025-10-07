import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className=" px-4 py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1984 - 2001</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science"
            subTitle="Kuvempu University(2010-2011)"
            result="75%"
            des="Completed Master of Science in Information Technology from Kuvempu University with B-grade Marks "
          />
          <ResumeCard
            title="Bachelor of Science"
            subTitle="Kuvempu University(2008-2009)"
            result="75%"
            des="Completed Bachelor of Science in Information Technology from Kuvempu University with B-grade Marks "
          />
          <ResumeCard
            title="Diploma in Computer Science"
            subTitle="Dayananda Sagar Polytechnic(1996-2001)"
            result="50%"
            des="Completed Diploma in Computer Science from Dayananda Sagar Polytechnic"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005- 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH(2022-2023)"
            result="Germany"
            des="Worked as Technical Lead to Banking client as contactor.  Worked on MERN stack projects."
          />
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH(2019-2020)"
            result="Germany"
            des="Worked as IT Manager for Software department and automated OTRS ticketing tool using React and Node.js"
          />
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD(2010-2019)"
            result="India"
            des="Worked as IT L3 Infrastrucuture Administrator until 2015.  After 2015 worked as full time software engineer."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
