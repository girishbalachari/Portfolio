import React from "react";
import FooterBottom from "./FooterBottom";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="w-full lgl:py-6 py-4 h-auto border-b-[1px] border-b-black flex flex-col lgl:flex-row items-center justify-center gap-4">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
      <div>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
