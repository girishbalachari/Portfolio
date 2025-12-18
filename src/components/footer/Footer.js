import React from "react";
import { logo } from "../../assets/index";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="w-full lgl:py-6 py-4 h-auto border-b-[1px] border-b-black flex flex-col lgl:flex-row items-center justify-center gap-4">
          <div className="w-full h-full flex gap-9">
            <img className="w-20" src={logo} alt="logo" />
            <div className="flex gap-5 xs:gap-3">
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
                  href="https://x.com/Girish02081980"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </span>
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
            </div>
          </div>
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
        </div>
      </div>
      <div>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
