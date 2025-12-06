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
        <div className="py-3 px-4  lgl:py-8 xl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            IT System Administrator
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2005 - 2007)"
            result="INDIA"
            des="Provided remote IT administration and technical support for Hewlett Packard’s US-based data center operations, managing a fleet of HP servers and Windows-based infrastructure for a team of 200+ engineers; delivered 24/7 hardware and software troubleshooting, system monitoring, patch management, and performance optimization to ensure maximum uptime and operational reliability."
          />
          <ResumeCard
            title="Infrastructure Management Analyst"
            subTitle="AFFILIATED COMPUTER Service India P LTD - (2007 - 2010)"
            result="INDIA"
            des="Delivered comprehensive end-to-end infrastructure support for US-based HCS clients, including full-cycle disaster recovery planning, implementation, and testing for critical applications; expertly handled VMware vSphere installation, configuration, clustering, and ongoing maintenance, ensuring high availability, performance optimization, and seamless virtualization across enterprise environments."
          />
          <ResumeCard
            title="ITO SVC Delivery Consultant III – B"
            subTitle="HEWLETT PACKARD Global Soft India LTD - (2010 - 2019)"
            result="INDIA"
            des="Served as VMware, Windows Server, and Cloud Administrator until 2015, managing virtualization (vSphere/ESXi), server infrastructure, cloud migrations, and system administration for enterprise environments; transitioned in 2015 to full-time Software Engineer role, specializing in full-stack development with JavaScript/TypeScript, React.js, Node.js, Express.js, Next.js, and MongoDB/PostgreSQL to design and deliver scalable web applications."
          />
        </div>
      </div>
      <div>
        <div className="py-3 px-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">WEB DEVELOPER</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Led the software development team as IT Manager and spearheaded the automation of the OTRS ticketing system by engineering a modern full-stack replacement using React.js for a responsive, intuitive frontend and Node.js + Express.js with MongoDB for a scalable, high-performance backend, significantly improving ticket resolution time and overall departmental efficiency."
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
            des="Designed and developed multiple production-grade web applications using the MERN stack (MongoDB, Express.js, React.js with TypeScript/Hooks, Node.js), including a feature-rich Facebook Clone (social feed, real-time notifications, Cloudinary media), WhatsApp Clone (Socket.IO real-time chat & WebRTC video calling), Uber Clone (microservices, live tracking), Grocery Delivery App (admin panel, Stripe payments), Restaurant App (online ordering, SEO), and Book Store App (Redux Toolkit, RTK Query), demonstrating expertise in scalable architecture, secure authentication, and responsive UI with Tailwind CSS."
          />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
