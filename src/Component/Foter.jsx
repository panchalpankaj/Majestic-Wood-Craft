import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 flex flex-col items-center text-center w-full">
      <p className="text-xl font-bold mb-4 text-yellow-400">CONTACT US</p>
      <p className="text-lg font-medium mb-6">Suresh Panchal</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="flex flex-col space-y-4 p-4 border-r border-gray-700">
          <a
            href="tel:+919925846029"
            className="flex items-center gap-3 text-lg no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <IoMdCall className="text-2xl text-yellow-400" />
            <span className="whitespace-nowrap">+91 992-58 4-6029</span>
          </a>
          <a
            href="mailto:info@majesticwoodcrafts.com"
            className="flex items-center gap-3 text-lg no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <IoMail className="text-2xl text-blue-400" />
            <span className="whitespace-nowrap">info@majesticwoodcrafts.com</span>
          </a>
          <a
            href="https://www.majesticwoodcrafts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <SiWebauthn className="text-2xl text-green-400" />
            <span className="whitespace-nowrap">www.majesticwoodcrafts.com</span>
          </a>
        </div>
        <div className="flex flex-col justify-center space-y-4 p-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/majesticwoodcrafts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <FaInstagram className="text-2xl text-pink-500" />
            <span className="whitespace-nowrap">@majesticwoodcrafts</span>
          </a>

          {/* Location Link */}
          <a
            href="https://maps.app.goo.gl/ksbhfXcifFPbbUvu8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <FaLocationDot className="text-2xl text-red-400" />
            <div className="flex flex-col">
              <span className="whitespace-nowrap">426 Indiranagar, Oganaj</span>
              <span className="whitespace-nowrap">Gota, Ahmedabad-382481</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
