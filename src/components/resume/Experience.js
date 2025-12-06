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
            des="Began career in 2015 as a Backend Developer specializing in Node.js, Express.js, and MongoDB, building scalable RESTful APIs and microservices; progressed to the E-commerce team, delivering high-traffic transactional systems with payment integrations and inventory management; later contributed to internal tools and platform teams, developing full-stack solutions, admin dashboards, and cross-functional productivity applications."
          />
          <ResumeCard
            title="IT Manager(software dept)"
            subTitle="Tentamus Analytics GmbH - (2019 - 2020)"
            result="GERMANY"
            des="Served as IT Manager overseeing the software development team, while leading the automation and modernization of the OTRS ticketing system by rebuilding it with a custom full-stack solution using React.js for an intuitive frontend interface and Node.js + Express.js with MongoDB for a robust, scalable backend, resulting in streamlined ticket management, enhanced team productivity, and improved support workflows."
          />
          <ResumeCard
            title="Technical Lead"
            subTitle="HCL Technologies Germany GmbH- (2022 - 2023)"
            result="GERMANY"
            des="Served as Technical Lead for a major banking client, directing multiple projects built on the MERN stack (MongoDB, Express.js, React.js, Node.js) while aligning with the client’s primary frontend technology, Lit-Component (Web Components), for reusable, standards-compliant UI development; enforced code quality through comprehensive unit testing with Jest, ensuring high-performance delivery in a regulated financial environment."
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
            des="Engineered a full-stack Uber clone using MERN stack with microservices architecture, Node.js + Express.js for backend services, React.js + Tailwind CSS for responsive frontend, MongoDB for data persistence, JWT-based authentication, and Socket.IO for real-time driver-rider tracking, ride requests, live location updates, and notifications."
          />
          <ResumeCard
            title="Facebook Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Developed a full-stack Facebook clone using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and MongoDB, implementing secure authentication with Google OAuth, real-time friend requests and notifications, responsive reusable components for posts, stories, comments, likes, and shares, Cloudinary for video/image uploads for complete social media functionality."
          />
          <ResumeCard
            title="Whatsapp Clone"
            subTitle="MERN Stack"
            result="PERSONAL"
            des="Built a full-stack real-time WhatsApp clone using MERN stack with TypeScript, featuring one-to-one chatting, media sharing, and WebRTC-based video calling, powered by Socket.IO for live messaging, typing indicators, online/offline status, and call signaling, with secure OTP-based (email/phone) authentication and JWT tokens stored in HTTP-only cookies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
