import React from "react";
import Dot from "../../assets/dot.png";
import Play from "../../assets/play.png";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl flex-col md:flex-row mx-auto flex gap-14 items-center mt-20  ">
        <div className="flex-1 space-y-5 text-center md:text-left flex flex-col">
          <div className="flex gap-1 items-center justify-center mx-auto md:mx-0 rounded-full bg-indigo-100 py-3 w-[294px] hover:cursor-pointer hover:shadow-lg shadow-indigo-300 transition duration-300">
            <img className="w-4 h-4" src={Dot} alt="" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</span>
          </div>
          <h1 className="text-6xl font-extrabold">Supercharge Your Digital Workflow</h1>
          <h3 className="text text-gray-500">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </h3>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Explore Products</button>
            <button className="btn border border-purple-500  rounded-full "> <img src={Play} alt="" /><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Watch Demo</span></button>
          </div>
        </div>
        <div className=" animate-pulse relative px-5 md:px-0 ">
            <img className="shadow-2xl shadow-blue-200 rounded-lg transition duration-1000" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
