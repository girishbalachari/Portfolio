import React from "react";
import { contactImg } from "../../assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-4 lgl:p-7 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Girish Balachary</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack (MERN) Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate Full-Stack MERN Developer with proven expertise in
          designing and delivering scalable, user-centric web applications using
          MongoDB, Express.js, React.js (functional components & hooks), and
          Node.js, specializing in end-to-end solutions that prioritize
          performance optimization, clean architecture, and innovative features
          from database modeling to responsive frontend experiences.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+4917630543219</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">girish.balachari@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
