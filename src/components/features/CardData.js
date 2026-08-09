import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiBackendless } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

export const cardData = [
  {
    id: 1,
    icon: <CgWebsite />,
    title: "Frontend Development",
    des: "Expert in modern frontend development using HTML5, CSS3 with Tailwind CSS, JavaScript (ES6+), React.js (functional components with Hooks), Next.js (App Router & Server Components), and TypeScript for building performant, type-safe, and responsive web applications.",
  },
  {
    id: 2,
    icon: <SiBackendless />,
    title: "Backend Development",
    des: "Proficient in backend development using Node.js, Express.js (API routes & server actions) to build scalable RESTful APIs and full-stack applications, with extensive experience in MongoDB for CRUD operations, schema design, aggregation pipelines, and indexes—no Python, Java, C#, or database administration involved.",
  },
  {
    id: 3,
    icon: <AiFillAppstore />,
    title: "Full stack Development",
    des: "Specialized in MERN stack (MongoDB, Express.js, React.js, Node.js) development, delivering end-to-end web applications with React.js functional components for responsive frontend, Node.js + Express.js for robust RESTful APIs and server-side logic, and MongoDB for efficient CRUD operations, schema modeling, and scalable data management.",
  },
  {
    id: 4,
    icon: <GiArtificialIntelligence />,
    title: "Gen-AI and Multi-Agent AI Development",
    des: "Experienced in building Gen-AI and Multi-Agent AI systems using OpenAI API, advanced prompt engineering, memory management, and tool integration on the backend, with React.js and TypeScript for interactive frontend and MongoDB for storing conversation history and user preferences.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Progressive and Dynamic Web Apps",
    des: "Specialized in developing dynamic web applications using React.js and TypeScript, delivering interactive, real-time, and data-driven user experiences with seamless performance, responsive design, state management, and cross-platform compatibility across all devices and operating systems.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "System Design & Solution Architecture",
    des: "Experienced in System Design and Solution Architecture for scalable web platforms, defining end-to-end architecture, microservices, API design, data models, and high-performance solutions using React.js, Node.js, and TypeScript to deliver maintainable and efficient enterprise systems.",
  },
];

export const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base text-[11px]">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
