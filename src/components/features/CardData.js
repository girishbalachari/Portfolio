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
