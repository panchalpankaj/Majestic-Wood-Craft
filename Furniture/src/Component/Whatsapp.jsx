import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "9925846029"; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white w-15 h-15 flex items-center justify-center rounded-2xl shadow-2xl shadow-green-600 hover:bg-green-600 transition-all duration-300"
      style={{
        animation: "floating 1.5s infinite ease-in-out",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
      <style>
        {`
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </a>
  );
};

export default WhatsAppButton;
