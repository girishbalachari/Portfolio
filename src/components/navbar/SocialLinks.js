import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont mb-2">Find me in</h2>
      <div className="flex gap-4">
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

export default SocialLinks;
