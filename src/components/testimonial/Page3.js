import React from "react";
import { testimonialThree, quote } from "../../assets";
import { RiStarFill } from "react-icons/ri";

const Page3 = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto lgl:h-[500px] flex flex-col lgl:flex-row justify-between">
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
          <img
            className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
            src={testimonialThree}
            alt="testimonial"
          />
          <div className="w-full flex flex-col justify-end">
            <p className="text-sm uppercase text-designColor tracking-wider mb-2">
              HEWLETT PACKARD Global Soft India LTD
            </p>
            <h3 className="text-2xl font-bold">Harsha Gurnani</h3>
            <p className="text-base tracking-wide text-gray-300">
              IT Operation Manager
            </p>
          </div>
        </div>
        <div className="w=full lgl:w-[65%] h-full flex flex-col justify-between">
          <img className="w-20 lgl:w-32" src={quote} alt="quote" />
          <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8">
            <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
              <div>
                <h3 className="text-2xl font-medium tracking-wide">
                  Web Developer
                </h3>
                <p className="text-base text-gray-400 mt-3">
                  Via Upwork - Mar 4, 2009 - May 13, 2016
                </p>
              </div>
              <div className="text-yellow-500 flex gap-2 mt-2">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
            <p className="text-base font-titleFont text-gray-300 font-medium tracking-wide leading-6">
              "Girish Balachary's team demonstrated exceptional professionalism
              throughout the project, actively listening to our vision and
              delivering a seamless, high-performance online experience using
              modern MERN/Next.js technologies that significantly contributed to
              our client's user engagement and business growth."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
