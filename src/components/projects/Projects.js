import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center text-center">
        <Title
          title="THANKS FOR VISITING MY PORTFOLIO and GIVE YOUR FEEDBACK"
          des="My Personal Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Book Store App"
          des=" Developed a full-stack e-commerce Book Store application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for responsive UI, Redux Toolkit + RTK Query for efficient state management and data fetching, Mongoose for schema-based modeling, and JWT-based authentication for secure user login, cart management, and order processing."
          src={projectThree}
        />
        <ProjectsCard
          title="Uber Clone App"
          des="Engineered a full-stack Uber clone using MERN stack with microservices architecture, Node.js + Express.js for backend services, React.js + Tailwind CSS for responsive frontend, MongoDB for data persistence, JWT-based authentication, and Socket.IO for real-time driver-rider tracking, ride requests, live location updates, and notifications."
          src={projectOne}
        />
        <ProjectsCard
          title="Restaurant App"
          des="Developed a full-stack restaurant management and online ordering application using MERN stack with TypeScript, featuring Zustand for lightweight global state management, Stripe integration for secure payment processing, responsive UI with Tailwind CSS, and SEO-optimized server-side rendering via Next.js for improved discoverability and performance."
          src={projectTwo}
        />
        <ProjectsCard
          title="Facebook Clone App"
          des="Developed a full-stack Facebook clone using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and MongoDB, implementing secure authentication with Google OAuth, real-time friend requests and notifications, responsive reusable components for posts, stories, comments, likes, and shares, Cloudinary for video/image uploads for complete social media functionality."
          src={projectFour}
        />
        <ProjectsCard
          title="WhatsApp Clone"
          des="Built a full-stack real-time WhatsApp clone using MERN stack with TypeScript, featuring one-to-one chatting, media sharing, and WebRTC-based video calling, powered by Socket.IO for live messaging, typing indicators, online/offline status, and call signaling, with secure OTP-based (email/phone) authentication and JWT tokens stored in HTTP-only cookies."
          src={projectFive}
        />
        <ProjectsCard
          title="Grocery Delivery App"
          des="Developed a full-stack Grocery Delivery platform using MERN stack with TypeScript and Tailwind CSS, featuring a comprehensive admin panel for product and inventory management, dynamic cart system with real-time updates, secure Stripe checkout integration, order tracking, and a fully responsive UI for seamless customer and delivery partner experience."
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
