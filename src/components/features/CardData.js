import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { FaBars } from "react-icons/fa";

export const cardData = [
  {
    id: 1,
    icon: <FaBars />,
    title: "Frontend Development",
    des: "Expert in modern frontend development using HTML5, CSS3 with Tailwind CSS, JavaScript (ES6+), React.js (functional components with Hooks), Next.js (App Router & Server Components), and TypeScript for building performant, type-safe, and responsive web applications.",
  },
  {
    id: 2,
    icon: <SiProgress />,
    title: "Backend Development",
    des: "Proficient in backend development using Node.js, Express.js, and Next.js (API routes & server actions) to build scalable RESTful APIs and full-stack applications, with extensive experience in MongoDB for CRUD operations, schema design, aggregation pipelines, and indexes—no Python, Java, C#, or database administration involved.",
  },
  {
    id: 3,
    icon: <AiFillAppstore />,
    title: "Full stack Development",
    des: "Specialized in MERN stack (MongoDB, Express.js, React.js, Node.js) development, delivering end-to-end web applications with React.js functional components for responsive frontend, Node.js + Express.js for robust RESTful APIs and server-side logic, and MongoDB for efficient CRUD operations, schema modeling, and scalable data management.",
  },
  {
    id: 4,
    icon: <SiFrontendmentor />,
    title: "AI agent Development",
    des: "Experienced in building intelligent AI agents using OpenAI API, LangChain/LangGraph for agent orchestration, prompt engineering, memory management, and tool integration on the backend, with React.js and TypeScript for interactive frontend and MongoDB for storing conversation history and user preferences.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Progressive Web Apps",
    des: "Specialized in developing Progressive Web Apps (PWAs) using React.js, Next.js, and Workbox, delivering native app-like experiences with offline functionality, push notifications, background sync, and installable home-screen icons across all platforms and operating systems.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Cross-Platform",
    des: "Experienced in cross-platform application development using React Native and Expo, enabling a single TypeScript/JavaScript codebase to build high-performance native mobile apps for iOS, Android, and web platforms with consistent functionality and UI.",
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
