import React from "react";
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

const SocialSkills = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-3">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/girish-balachary"
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
  );
};

export default SocialSkills;
