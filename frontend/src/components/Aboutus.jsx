import React from "react";
import Grp from "../assets/grp.png";
import { FaCheck } from "react-icons/fa";
import Tick from "../assets/tick.png";

const Aboutus = () => {
  return (
    <div className="pt-40 pb-20  bg-blue-50">
      <div className="pt-40  md:grid md:grid-flow-col md:grid-cols-5 md:gap-10">
        <div className="h-[0vh] md:col-span-2 md:opacity-100 opacity-20 w-full">
          <img src={Grp} alt="" className="m-auto hidden sm:block" />
        </div>
        <div className="col-span-3 ">
          <div className="font-bold text-blue-500 text-5xl pb-5 mt-6 lg:mt-0 text-center">
            ABOUT US
          </div>
          <div className="pr-10 font-semibold text-sm ml-5">
            <div className="pb-2">
              Welcome to C2C, a vibrant and inclusive community dedicated to
              fostering learning, collaboration, and innovation in the world of
              technology.
            </div>
            <div className="pt-4 py-1">
              C2C is a dynamic space where technology enthusiasts,
              professionals, students, and curious minds come together to
              exchange ideas, share knowledge, and explore the latest trends and
              innovations in the tech industry.
            </div>
            <div className="py-1">
              C2C is a vibrant community dedicated to fostering learning,
              collaboration, and innovation in the field of technology. Through
              events like the C2C Open Source Cohort, we strive to empower
              individuals to explore their passions, expand their skills, and
              make a positive impact in the tech industry and beyond.
            </div>
            <div className="py-1 pb-4">
              Join us at the C2C Open Source Cohort and embark on an exciting
              journey of collaboration, learning, and growth in the world of
              Open Source technology.
            </div>
          </div>
          <div className="font-bold text-2xl text-left pl-6">Benefits</div>
          <div className="text-sm font-semibold pl-5 py-2">
            <span className="pr-8 flex items-center">
              <img src={Tick} alt="" className="w-5 m-1" /> Discover different Open Source projects and learn how to join and contribute.
            </span>
            <span className="flex items-center">
              <img src={Tick} alt="" className="w-5 m-1" /> Join practical sessions led by experienced developers to learn key Open Source skills.

            </span>
            <div className="text-sm flex items-center font-semibold">
              <img src={Tick} alt="" className="w-5 m-1" /> Work with others in the cohort, mentors, and project leaders to solve real-world problems
together
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
