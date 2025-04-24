import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Foter";
import WhatsAppButton from "./Whatsapp";
import Maps from "./Maps";
import Button from '@mui/material/Button';


const Product = () => {
 
  const categories = {
    All: [
      "./badset1.png", "./badset2.png", "./badset3.png",
      "./chair.png", "./chair2.png", "./chair3.png",
      "./white_kitchen.png", "./kitchen2.png", "./kitchen3.png",
      "./sofa1.png", "./sofa2.png", "./sofa3.png", "./sofa4.png",
      "./wardrow1.png", "./wardrow2.png", "./wardrow3.png",
      "./holl.png",
    ],
    Beds: ["./badset1.png", "./badset2.png", "./badset3.png"],
    Chairs: ["./chair.png", "./chair2.png", "./chair3.png"],
    Kitchens: ["./white_kitchen.png", "./kitchen2.png", "./kitchen3.png"],
    Sofas: ["./sofa1.png", "./sofa2.png", "./sofa3.png", "./sofa4.png"],
    Wardrobes: ["./wardrow1.png", "./wardrow2.png", "./wardrow3.png"],
    LivingRoom: ["./holl.png"],
  };

 
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Nav />
      <WhatsAppButton />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-24 px-4">
        {Object.keys(categories).map((category) => (
          <Button variant="outlined" color="secondary"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium text-teal-300 text-sm transition-all sm:text-base md:text-lg
            `}
          >
            {category}
          </Button>
        ))}
      </div>

    
      <div className="grid grid-cols-2 mb-4 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-8 px-3 sm:px-6">
        {categories[selectedCategory].map((imgSrc, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
            <img src={imgSrc} alt="Product" className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl" />
          </div>
        ))}
      </div>
      <Maps />
      <Footer />
    </div>
  );
};

export default Product;
