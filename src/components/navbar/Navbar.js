import React, { useState } from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor flex items-center justify-between mx-auto h-24 font-titleFort border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="Logo" className="rounded-xl" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-y-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-6 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-[12px] text-gray-400 mt-6">
                  Experienced Full-Stack Web Developer specializing in MERN
                  stack with expertise in React.js, TypeScript, Lit-Element,
                  Node.js, Express.js, Next.js, JavaScript, MongoDB, and
                  PostgreSQL for building scalable, modern web applications with
                  seamless CRUD operations and responsive frontend.
                </p>
                <p className="text-[12px] text-gray-400 mt-6">
                  MERN Stack: JavaScript/Typescript – MongoDB – Express – React
                  – Node
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base front-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-2">
                  Find me in
                </h2>
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
                      href="https://www.linkedin.com/in/girish-balachary-a4982814"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
