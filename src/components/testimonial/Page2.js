import React from "react";
import { testimonialOne, quote } from "../../assets";
import { RiStarFill } from "react-icons/ri";

const Page2 = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto lgl:h-[500px] flex flex-col lgl:flex-row justify-between">
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
          <img
            className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
            src={testimonialOne}
            alt="testimonial"
          />
          <div className="w-full flex flex-col justify-end">
            <p className="text-sm uppercase text-designColor tracking-wider mb-2">
              Tentamus Analytics GmbH
            </p>
            <h3 className="text-2xl font-bold">Andreas Scholz</h3>
            <p className="text-base tracking-wide text-gray-300">
              Software Manager
            </p>
          </div>
        </div>
        <div className="w=full lgl:w-[65%] h-full flex flex-col justify-between">
          <img className="w-20 lgl:w-32" src={quote} alt="quote" />
          <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
            <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
              <div>
                <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                  Software Developer
                </h3>
                <p className="text-base text-gray-400 mt-3">
                  Via Upwork - Mar 4, 2015 - Aug 30, 2018
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
              "Collaborating with Girish Balachary transformed our project—he
              quickly grasped complex business requirements, leveraged
              cutting-edge libraries and modern frameworks (React.js, Next.js,
              TypeScript), and delivered a high-quality, performant website
              ahead of schedule with clean, maintainable code."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
