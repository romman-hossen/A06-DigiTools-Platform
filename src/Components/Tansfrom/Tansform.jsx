import React from "react";

const Tansform = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
      <div className="text-white p-8 text-center">
        <h2 className="text-5xl mb-4 font-extrabold mt-30">
          Ready To Transform Your Workflow?
        </h2>
        <p className="opacity-60">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="btn rounded-full w-40 text-purple-800">
          Explore Products
        </button>
        <button className="btn bg-transparent w-40 rounded-full text-white hover:bg-purple-600">
          View Pricing
        </button>
      </div>
      <div className="py-10">
        <p className="text-center mt-4 text-white/60 text-md flex flex-col md:flex-row gap-1 justify-center items-center">
        <span>14-day free trial </span>
        <span>•</span>
        <span> No credit card required</span>
        <span>•</span>
        <span> Cancel anytime</span>
  
        </p>
      </div>
    </div>
  );
};

export default Tansform;
