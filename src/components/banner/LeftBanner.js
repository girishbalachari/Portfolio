import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialSkills from "./SocialSkills";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Backend Developer.",
      "MERN Stack Developer.",
      "Full Stack Developer.",
      "Gen-AI Developer.",
      "Multi-AI Agents Developer.",
      "System Design.",
      "System Architecture.",
      "Solution Architecture.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col justify-between gap-20">
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-normal">
          Thanks for visiting my portfolio.
        </h4>
        <h1 className="text-3xl lgl:text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor">GIRISH BALACHARY</span>
        </h1>
        <h2 className="text-2xl lgl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-[12px] font-bodyFont leading-6 tracking-wide">
          Results-driven Full Stack Developer and System Designer with 16+ years
          of experience designing and developing scalable web platforms,
          AI-powered applications, and complex enterprise systems using the MERN
          stack, React.js, Node.js, and TypeScript. Proven expertise in
          end-to-end Solution architecture, modern frontend architecture
          (Next.js, LitElement, Tailwind CSS, Redux), microservices, real-time
          systems, REST APIs, and cloud-native solutions. Skilled in leading
          technical design, defining system boundaries, integrating AI
          capabilities (Open Router, Google Gemini), and delivering
          high-performance, maintainable platforms with Docker, Kubernetes,
          CI/CD pipelines, and international experience across Germany and
          India.
        </p>
        <p className="text-[12px]">
          MERN Stack : JavaScript/Typescript – MongoDB – Express – React – Node
        </p>
      </div>
      <SocialSkills />
    </div>
  );
};

export default LeftBanner;
