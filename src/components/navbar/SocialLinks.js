import React from "react";
import {
  SocialIconData,
  SocialIcon,
} from "../../components/socialicons/SocialIcon";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont mb-2">Find me in</h2>
      <div className="flex gap-4">
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

export default SocialLinks;
