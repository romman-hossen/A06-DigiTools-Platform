import React from "react";
import { MdDone } from "react-icons/md";

const Pricing = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-30 px-8 md:px-0">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-5xl font-extrabold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card flex bg-base-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-purple-200">
            <div className="p-6 flex-1 flex flex-col gap-6">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Starter</h2>
                <p className="text-gray-400">Perfect for getting started</p>
              </div>
              <div className="text-xl">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="flex flex-1 flex-col gap-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">
                    High-resolution image generation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Basic templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Community support</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">1 project per month</span>
                </li>
              </ul>
              <button className=" py-3 font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block">
                Get Started Free
              </button>
            </div>
          </div>
             <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm relative tramsition-all duration-300 nd:hover:shadow-2xl hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:shadow-purple-300 ">
            <div className="p-6 flex flex-1 flex-col gap-6">
              <span className="badge rounded-full bg-orange-100 text-orange-400 py-4 absolute right-35 -top-3">Most Popular</span>
              <div className="space-y-2 text-white">
                <h2 className="text-3xl font-bold">Pro</h2>
                <p className="text-white/80">Best for professionals</p>
              </div>
              <div className="text-xl text-white">
                <span className="text-4xl font-bold">$29</span>
                <span className="">/Month</span>
              </div>
              <ul className="flex-1 flex flex-col gap-2 text-white/90">
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">
                   Access to all premium tools
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">Unlimited templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">Cloud sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-2xl" />
                  <span className="font-medium">Advanced analytics</span>
                </li>
              </ul>
              <button className=" py-3 font-bold rounded-full bg-white text-purple-500 btn-block">
               Start Pro Trial
              </button>
            </div>
          </div>
             <div className="card  bg-base-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-purple-200">
            <div className="p-6 flex flex-col gap-6">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p className="text-gray-400">For teams and businesses</p>
              </div>
              <div className="text-xl">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="flex-1 flex flex-col gap-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">
                    Everything in Pro
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">SLA guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdDone className="text-green-600 text-2xl" />
                  <span className="font-medium">Custom branding</span>
                </li>
              </ul>
              <button className=" py-3 font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block">
               Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
