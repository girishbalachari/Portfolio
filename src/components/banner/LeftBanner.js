import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialSkills from "./SocialSkills";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Backend Developer.",
      "MERN Stack Developer.",
      "Full Stack Web Developer.",
      "AI-Agent Developer.",
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
          Hi, I'm{" "}
          <span className="text-designColor capitalize">GIRISH BALACHARY</span>
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
          Results-driven Full-Stack Web Developer with 16+ years of IT
          experience and 9+ years of hands-on software development expertise
          specializing in MERN stack (MongoDB, Express.js, React.js, Node.js)
          and modern JavaScript ecosystems including TypeScript, Next.js, Redux,
          and Lit-Elements. Proficient in building scalable web applications
          with CRUD operations using MongoDB and PostgreSQL, implementing
          RESTful APIs, server-side rendering, and responsive frontend with
          Tailwind CSS and component libraries. Demonstrated strength in
          end-to-end project delivery, from architecture design to production
          deployment, with excellent English communication skills and basic
          proficiency in German.
        </p>
        <p className="text-[12px]">
          MERN Stack: JavaScript/Typescript – MongoDB – Express – React – Node
        </p>
      </div>
      <SocialSkills />
    </div>
  );
};

export default LeftBanner;
