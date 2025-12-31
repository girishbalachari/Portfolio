import React from "react";
import { logo } from "../../assets/index";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterLeft = () => {
  return (
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
  );
};

export default FooterLeft;
