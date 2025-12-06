import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { FaBars } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Build on Web technologies" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Expert in modern frontend development using HTML5, CSS3 with Tailwind CSS, JavaScript (ES6+), React.js (functional components with Hooks), Next.js (App Router & Server Components), and TypeScript for building performant, type-safe, and responsive web applications."
          icon={<FaBars />}
        />
        <Card
          title="Backend Development"
          des="Proficient in backend development using Node.js, Express.js, and Next.js (API routes & server actions) to build scalable RESTful APIs and full-stack applications, with extensive experience in MongoDB for CRUD operations, schema design, aggregation pipelines, and indexes—no Python, Java, C#, or database administration involved."
          icon={<SiProgress />}
        />
        <Card
          title="Full stack Development"
          des="Specialized in MERN stack (MongoDB, Express.js, React.js, Node.js) development, delivering end-to-end web applications with React.js functional components for responsive frontends, Node.js + Express.js for robust RESTful APIs and server-side logic, and MongoDB for efficient CRUD operations, schema modeling, and scalable data management."
          icon={<AiFillAppstore />}
        />
        <Card
          title="AI agent Development"
          des="Experienced in building intelligent AI agents using OpenAI API, LangChain/LangGraph for agent orchestration, prompt engineering, memory management, and tool integration on the backend, with React.js and TypeScript for interactive frontend and MongoDB for storing conversation history and user preferences."
          icon={<SiFrontendmentor />}
        />
        <Card
          title="Progressive Web Apps"
          des="Specialized in developing Progressive Web Apps (PWAs) using React.js, Next.js, and Workbox, delivering native app-like experiences with offline functionality, push notifications, background sync, and installable home-screen icons across all platforms and operating systems."
          icon={<SiAntdesign />}
        />
        <Card
          title="Cross-Platform"
          des="Experienced in cross-platform application development using React Native and Expo, enabling a single TypeScript/JavaScript codebase to build high-performance native mobile apps for iOS, Android, and web platforms with consistent functionality and UI."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
