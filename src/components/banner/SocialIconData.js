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

export const SocialIconData = [
  {
    id: 1,
    anchorHref: "https://www.linkedin.com/in/girish-balachary",
    ariaLabel: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    anchorHref: "https://www.facebook.com/girishbalachari",
    ariaLabel: "FaceBook",
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    anchorHref: "https://www.instagram.com/girishbalachary/",
    ariaLabel: "Instagram",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    anchorHref: "https://github.com/girishbalachary",
    ariaLabel: "Github",
    icon: <FaGithub />,
  },
];

export const SocialSkillsData = [
  {
    id: 1,
    anchorHref: "https://tailwindcss.com/",
    ariaLabel: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    id: 2,
    anchorHref: "https://www.mongodb.com/",
    ariaLabel: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 3,
    anchorHref: "https://expressjs.com/",
    ariaLabel: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    id: 4,
    anchorHref: "https://legacy.reactjs.org/",
    ariaLabel: "ReactJS",
    icon: <SiReact />,
  },
  {
    id: 5,
    anchorHref: "https://nodejs.org/en",
    ariaLabel: "NodeJs",
    icon: <FaNode />,
  },
  {
    id: 6,
    anchorHref: "https://www.typescriptlang.org/",
    ariaLabel: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 7,
    anchorHref: "https://nextjs.org/",
    ariaLabel: "NextJS",
    icon: <SiNextdotjs />,
  },
];

export const SocialIcon = ({ anchorHref, ariaLabel, icon }) => {
  return (
    <>
      <span className="bannerIcon">
        <a
          href={anchorHref}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
        >
          {icon}
        </a>
      </span>
    </>
  );
};
