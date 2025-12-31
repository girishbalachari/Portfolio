import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialIconData = [
  {
    id: 1,
    anchorHref: "https://www.linkedin.com/in/girish-balachary",
    ariaLabel: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    anchorHref: "https://github.com/girishbalachary",
    ariaLabel: "Github",
    icon: <FaGithub />,
  },
  {
    id: 3,
    anchorHref: "https://www.instagram.com/girishbalachary/",
    ariaLabel: "Instagram",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    anchorHref: "https://www.facebook.com/girishbalachari",
    ariaLabel: "FaceBook",
    icon: <FaFacebookF />,
  },
  {
    id: 5,
    anchorHref: "https://twitter.com/Girish02081980",
    ariaLabel: "Twitter",
    icon: <FaXTwitter />,
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
