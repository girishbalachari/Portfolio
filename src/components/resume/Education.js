import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { EducationData, JobData } from "./ResumeData";

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
          {EducationData.map((item) => (
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
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2005- Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {JobData.map((item) => (
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

export default Education;
