import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 lgl:w-1/2 flex justify-center items-center relative">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[550px] lgl:h-[700px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
