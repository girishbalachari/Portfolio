import React from "react";
import { SocialIconData, SocialSkillsData, SocialIcon } from "./SocialIconData";

const SocialSkills = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-3">
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skill on
        </h2>
        <div className="flex gap-3">
          {SocialSkillsData.map((skill) => (
            <SocialIcon
              key={skill.id}
              anchorHref={skill.anchorHref}
              ariaLabel={skill.ariaLabel}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSkills;
