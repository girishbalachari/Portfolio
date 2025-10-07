import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pb-20 pt-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont border-b-[1px] border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
