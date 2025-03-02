import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SiWebauthn } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import Nav from "./Nav";
import Footer from "./Foter";
import WhatsAppButton from "./Whatsapp";
import Maps from "./Maps";

const Contactus = () => {
  return (
    <div>
      <Nav />
      <WhatsAppButton />

      <div className="bg-gray-100 py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600">Have questions? Reach out to us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          
          <a
            href="tel:+919925846029"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition !no-underline text-gray-900 hover:!no-underline"
            style={{ textDecoration: "none" }}
          >
            <IoMdCall className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-gray-900">+91 992-58 4-6029</p>
          </a>

        
          <a
            href="mailto:info@majesticwoodcrafts.com"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition !no-underline text-gray-900 hover:!no-underline"
            style={{ textDecoration: "none" }}
          >
            <IoMail className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-900">info@majesticwoodcrafts.com</p>
          </a>

      
          <a
            href="https://www.majesticwoodcrafts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition !no-underline text-gray-900 hover:!no-underline"
            style={{ textDecoration: "none" }}
          >
            <SiWebauthn className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Website</h3>
            <p className="mt-2 text-gray-900">www.majesticwoodcrafts.com</p>
          </a>
        </div>

       
        <a
          href="https://www.google.com/maps?ll=23.114301,72.516352&z=17&t=h&hl=en&gl=IN&mapclient=embed&q=23%C2%B006%2751.1%22N+72%C2%B031%2703.7%22E+23.114194,+72.517694@23.1141944,72.5176944"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-xl p-6 mt-12 max-w-4xl mx-auto text-center block hover:shadow-xl transition !no-underline text-gray-900 hover:!no-underline"
          style={{ textDecoration: "none" }}
        >
          <FaLocationDot className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold">Our Location</h3>
          <p className="mt-2 text-gray-900">426 Indiranagar, Oganaj, Gota, Ahmedabad-382481</p>
        </a>
      </div>

      <Maps />
      <Footer />
    </div>
  );
};

export default Contactus;
