import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { JobExperience, PersonalProjects } from "./ResumeData";

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
          {JobExperience.map((item) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-3 px-4 lgl:py-12">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Personal Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {PersonalProjects.map((item) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
