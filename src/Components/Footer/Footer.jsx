import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="max-w-7xl mx-auto footer sm:footer-horizontal text-white p-10 md:p-0 md:pt-30 md:pb-20">
        <aside>
          <h3 className="text-5xl font-extrabold pb-4">DigiTools</h3>
          <p className="text-[16px] text-gray-400">
           Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <aside>
             <h6 className="footer-title">Resources </h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>

        </aside>
        <aside>
          <h3 className="text-xl font-medium">Social Links</h3>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              {/* <AiFillInstagram /> */}
              <RiInstagramFill className="text-black text-2xl"/>

              {/* <AiFillInstagram */}
            </div>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <FaSquareFacebook className="text-black text-2xl"/>
            </div>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <FaXTwitter className="text-black text-2xl"/>

            </div>
          </div>
        </aside>
   
      </footer>
      <hr className="max-w-7xl mx-auto items-center"/>
      <div className="text-gray-400 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center max-w-7xl mx-auto py-8 px-8 md:px-0">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service </span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
