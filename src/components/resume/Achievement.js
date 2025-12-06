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
          <h2 className="text-3xl md:text-4xl font-bold">IT Engineer</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2005 - 2007)"
            result="INDIA"
            des="Provided 24/7 remote administration for HP servers and Windows infrastructure supporting 200+ engineers, ensuring maximum uptime through proactive monitoring, patch management, and performance optimization."
          />
          <ResumeCard
            title="Infrastructure Management Analyst"
            subTitle="AFFILIATED COMPUTER Service India P LTD - (2007 - 2010)"
            result="INDIA"
            des="Delivered end-to-end VMware vSphere infrastructure support and full-cycle disaster recovery planning for US-based HCS clients, ensuring high availability and optimal performance."
          />
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2010 - 2019)"
            result="INDIA"
            des="VMware/Windows/Cloud Administrator until 2015 → Full-time Full-Stack Software Engineer (2015–Present) specializing in MERN, TypeScript, Next.js, and scalable web applications."
          />
        </div>
      </div>
      <div>
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2015 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">WEB DEVELOPER</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Led team and automated OTRS ticketing system with React.js frontend + Node.js/Express/MongoDB backend, significantly reducing resolution time and boosting efficiency."
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
            des="Designed and delivered production-grade MERN applications including Facebook Clone, WhatsApp Clone (Socket.IO + WebRTC), Uber Clone, Grocery Delivery (Stripe + Admin), Restaurant App, and Book Store using TypeScript, Tailwind CSS, and scalable architectures."
          />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
