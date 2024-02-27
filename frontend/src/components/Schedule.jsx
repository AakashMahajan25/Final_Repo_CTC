import React from "react";
import Vector from '../assets/Vector.png'
import Vector2 from '../assets/Vector2.png'

const Schedule = () => {
  return (
    <div className="relative">
        <img src={Vector} alt="" className="absolute left-0 scale-95 w-1/5 -z-10 hidden lg:block" />
        <img src={Vector2} alt="" className="absolute right-0 top-60 w-1/5 scale-95 -z-10 hidden lg:block" />
      <div className="py-10">
        <div className="lg:text-7xl text-5xl text-blue-500 font-bold text-center">
          SCHEDULE
        </div>
        <p className="lg:w-1/2 m-auto  text-center  lg:py-8 pt-6 px-2 lg:px-0 lg:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat
          quaerat iusto perspiciatis sunt, cum sapiente sit molestias maxime hic
          illum
        </p>

        <div className="border-gradient lg:mt-0 mt-10   w-fit m-auto lg:px-2 bg-blue-50 ">
          <div className="flex p-6 border-b ">
            <div className="lg:px-10 font-semibold lg:text-lg lg:text-left">
              11:00 - <div>11:30 IST</div>
            </div>
            <div className="lg:px-10 text-center lg:text-left">
              <p className="lg:text-sm text-xs">
                Tech For Social Impact: Startups Driving Change In Communities
              </p>
              <div className=" text-xl lg:text-2xl font-semibold text-blue-600">
                Rohit Sardana
              </div>
              <p className="lg:text-sm text-xs">Founder & CEO, Reskill</p>
            </div>
          </div>
          <div className="flex p-6 ">
            <div className="lg:px-10 font-semibold text-lg">
              11:00 - <div>11:30 IST</div>
            </div>
            <div className="lg:px-10 text-center lg:text-left">
              <p className="lg:text-sm text-xs">
                Tech For Social Impact: Startups Driving Change In Communities
              </p>
              <div className="text-xl lg:text-2xl font-semibold text-blue-600">
                Rohit Sardana
              </div>
              <p className="lg:text-sm text-xs">Founder & CEO, Reskill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
