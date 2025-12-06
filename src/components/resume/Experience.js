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
            des="Started in 2015 as Backend Developer (Node.js, Express.js, MongoDB), advanced to E-commerce and internal tools teams, delivering full-stack solutions with payment integrations, admin dashboards, and cross-functional productivity applications."
          />
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Led software team and modernized OTRS ticketing system with custom React.js frontend and Node.js + Express.js + MongoDB backend, boosting productivity and support efficiency."
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH- (2022 - 2023)"
            result="GERMANY"
            des="Led banking projects using MERN stack and Lit-Element Web Components, enforced Jest unit testing and CI/CD pipelines, ensuring secure, high-quality delivery in a regulated environment."
          />
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
          <ResumeCard
            title="Uber Clone"
            subTitle="MERN and MicroServices"
            result="PERSONAL"
            des="Built full-stack Uber clone using MERN stack with microservices, Socket.IO real-time tracking, JWT authentication, Tailwind CSS, and MongoDB."
          />
          <ResumeCard
            title="Facebook Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Developed full-stack Facebook clone using Next.js, TypeScript, Tailwind CSS, Shadcn UI, MongoDB, Google OAuth + email/password, real-time friend requests, and Cloudinary-powered media uploads"
          />
          <ResumeCard
            title="Whatsapp Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Built full-stack real-time WhatsApp clone using MERN + TypeScript, Socket.IO, WebRTC video calling, OTP/JWT authentication, and HTTP-only cookies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
