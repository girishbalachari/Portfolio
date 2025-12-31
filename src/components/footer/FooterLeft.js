import React from "react";
import { logo } from "../../assets/index";
import {
  SocialIconData,
  SocialIcon,
} from "../../components/socialicons/SocialIcon";

const FooterLeft = () => {
  return (
    <div className="w-full h-full flex gap-9">
      <img className="w-20" src={logo} alt="logo" />
      <div className="flex flex-wrap gap-5 xs:gap-3">
        {SocialIconData.map((iconData) => (
          <SocialIcon
            key={iconData.id}
            anchorHref={iconData.anchorHref}
            ariaLabel={iconData.ariaLabel}
            icon={iconData.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterLeft;
