import React from "react";

export const QuickLinkItem = ({ title, link }) => (
  <a href={`/#${link}`} rel="noreferrer">
    <li>
      <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
        {title}
      </span>
    </li>
  </a>
);

export const quickLinksData = [
  {
    id: 1,
    title: "About",
    link: "home",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "features",
  },
  {
    id: 3,
    title: "Services",
    link: "projects",
  },
  {
    id: 4,
    title: "Resume",
    link: "resume",
  },
  {
    id: 5,
    title: "Blog",
    link: "testimonial",
  },
  {
    id: 6,
    title: "Contact",
    link: "contact",
  },
];
