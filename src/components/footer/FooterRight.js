import React from "react";
import { quickLinksData, QuickLinkItem } from "./Footerquickdata";
const FooterRight = () => {
  return (
    <div className="w-full h-full">
      <h3 className="text-xl uppercase text-designColor tracking-wider">
        Quick Link
      </h3>
      <ul className=" flex flex-wrap lgl:gap-8 gap-4 font-titleFont font-medium overflow-hidden py-4 lgl:py-6">
        {quickLinksData.map((item) => (
          <QuickLinkItem key={item.id} title={item.title} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterRight;
