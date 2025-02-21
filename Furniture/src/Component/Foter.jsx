import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-6 flex flex-col items-center text-center">
      <p className="text-lg font-semibold mb-4">CONTACT US</p>
      <p className="text-lg mb-4">Suresh Panchal</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-2">
            <IoMdCall className="text-2xl text-yellow-400" />
            <p className="text-lg">+91 992-58 4-6029</p>
          </div>
          <div className="flex items-center space-x-2">
            <IoMail className="text-2xl text-blue-400" />
            <p className="text-lg">info@majesticwoodcrafts.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <SiWebauthn className="text-2xl text-green-400" />
            <p className="text-lg">www.majesticwoodcrafts.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-2">
            <FaLocationDot className="text-2xl text-red-400" />
            <p className="text-lg">426 Indiranagar, Oganaj, Gota, Ahmedabad-382481</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;