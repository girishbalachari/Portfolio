import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { FaNode } from "react-icons/fa6";
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
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-normal">
          Thanks for visiting my portfolio.
        </h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">GIRISH BALACHARY</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-[14px] font-bodyFont leading-6 tracking-wide">
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
        <p className="text-[14px]">
          MERN Stack: JavaScript/Typescript – MongoDB – Express – React – Node
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-3">
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/girish-balachary-a4982814"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.facebook.com/girishbalachari"
                target="_blank"
                rel="noreferrer"
                aria-label="FaceBook"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/girishbalachary/"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://github.com/girishbalachari"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill on
          </h2>
          <div className="flex gap-3">
            <span className="bannerIcon">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Tailwind"
              >
                <SiTailwindcss />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="MongoDB"
              >
                <SiMongodb />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="ExpressJS"
              >
                <SiExpress />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://legacy.reactjs.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="ReactJS"
              >
                <SiReact />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://nodejs.org/en"
                target="_blank"
                rel="noreferrer"
                aria-label="NodeJs"
              >
                <FaNode />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="Typescript"
              >
                <SiTypescript />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="NextJS"
              >
                <SiNextdotjs />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
