import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
// import { EducationData, JobData } from "./ResumeData";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-titleFont py-12"
    >
      <div>
        <div className=" px-4 py-3 lgl:py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1984 - 2001</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science"
            subTitle="Kuvempu University( 2010 - 2011 )"
            result="75%"
            des=" Master of Science in Information Technology – Kuvempu University, Karnataka, India "
          />
          <ResumeCard
            title="Bachelor of Science"
            subTitle="Kuvempu University( 2008 - 2009 )"
            result="75%"
            des=" Bachelor of Science in Information Technology – Kuvempu University, Karnataka, India "
          />
          <ResumeCard
            title="Diploma in Computer Science"
            subTitle="Dayananda Sagar Polytechnic(1996-2001)"
            result="50%"
            des=" Diploma in Computer Science – Dayananda Sagar Polytechnic, Karnataka, India "
          />
        </div>
      </div>
      <div>
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2005- Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH( 2022 - 2023)"
            result="Germany"
            des="Led secure MERN stack (React.js + TypeScript, Node.js) projects for banking client, ensuring regulatory compliance and robust authentication."
          />
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH( 2019 - 2020)"
            result="Germany"
            des="Led automation of OTRS ticketing system using React.js frontend and Node.js backend, improving team efficiency and ticket resolution speed."
          />
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD( 2010 - 2019)"
            result="India"
            des="Advanced from L3 Infrastructure Engineer role to full-time Software Engineer in 2015, specializing in MERN stack development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
