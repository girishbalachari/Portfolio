import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

export const ProjectCardData = [
  {
    id: 1,
    title: "Interview Preparation App using Generative-AI",
    des: " Developed a smart AI-powered Interview Preparation App using MERN stack (MongoDB, Express.js, React.js, Node.js) integrated with Google Gemini API. Features include JWT authentication, role-based interview question generation, AI-driven Q&A, dynamic concept explanations, and pinning important questions.",
    src: projectOne,
  },
  {
    id: 2,
    title: "Website Builder App using Generative-AI",
    des: "Developed a Gen-AI powered website builder using the MERN stack. Users describe their idea, and the AI instantly generates a fully functional website with one-click deployment. The platform features a credit-based system, Stripe payments, premium animations, and smooth UI. It uses OpenRouter for AI generation and Firebase for authentication.",
    src: projectTwo,
  },
  {
    id: 3,
    title: "Coding and Presentation app using Multi Agents-AI",
    des: "Built a production-ready multi-agent AI platform using the MERN stack and microservices architecture, integrating LangGraph, Redis, Docker, AWS S3, and Razorpay. Developed specialized AI agents for coding, web search, and PDF or presentation generation, with Firebase Google authentication, Redis session management, and an API Gateway for service routing.",
    src: projectThree,
  },
  {
    id: 4,
    title: "Resume review and Mock Interview app using Multi Agents-AI",
    des: "Built a Multi-Agent AI Interview Platform using MERN stack, microservices, and LangGraph with specialized agents for resume analysis, career roadmaps, and automated technical or HR interviews. Integrated Redis, Docker, Razorpay, and Firebase, featuring resume scoring, live coding environments, camera access, and downloadable PDF reports for a scalable full-stack solution.",
    src: projectFour,
  },
  {
    id: 5,
    title: "Facebook Clone App",
    des: "Developed a full-stack Facebook clone using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and MongoDB, implementing secure authentication with Google OAuth, real-time friend requests and notifications, responsive reusable components for posts, stories, comments, likes, and shares, Cloudinary for video/image uploads for complete social media functionality.",
    src: projectFive,
  },
  {
    id: 6,
    title: "WhatsApp Clone",
    des: "Built a full-stack real-time WhatsApp clone using MERN stack with TypeScript, featuring one-to-one chatting, media sharing, and WebRTC-based video calling, powered by Socket.IO for live messaging, typing indicators, online/offline status, and call signaling, with secure OTP-based (email/phone) authentication and JWT tokens stored in HTTP-only cookies.",
    src: projectSix,
  },
];

export const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full px-4 py-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
          </div>
          <p className="text-[11px] tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};
