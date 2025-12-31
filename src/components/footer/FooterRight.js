import React from "react";

const FooterRight = () => {
  return (
    <div className="w-full h-full">
      <h3 className="text-xl uppercase text-designColor tracking-wider">
        Quick Link
      </h3>
      <ul className=" flex flex-wrap lgl:gap-8 gap-4 font-titleFont font-medium overflow-hidden py-4 lgl:py-6">
        <a href="/home" rel="noreferrer">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              About
            </span>
          </li>
        </a>
        <a href="/#features" rel="noreferrer">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio
            </span>
          </li>
        </a>
        <a href="/#projects" rel="noreferrer">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Services
            </span>
          </li>
        </a>
        <a href="/#testimonial" rel="noreferrer">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Blog
            </span>
          </li>
        </a>
        <a href="/#contact" rel="noreferrer">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              contact
            </span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default FooterRight;
