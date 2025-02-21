import React from "react";
import Picturewithimage from "./Picturewithimage";

const Maine = () => {
  return (
    <div className="mt-14">
      <div className="relative h-auto text-cyan-900 text-9xl max-[635px]:text-lime-100">
        <img
          src="/home2.png"
          className="xl:w-full xl:h-2/3"
          alt="White Kitchen"
        />
        
      </div>

      <div className="flex flex-col sm:flex-row  mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 p-4 sm:p-8">
        <p className="w-full max-[635px]:text-lg sm:w-1/4 text-2xl sm:text-3xl md:text-4xl text-amber-950 mb-4 sm:mb-0">
          MODULAR FURNITURE
        </p>
        <p className="w-full max-[635px]:text-sm sm:w-3/4 text-base sm:text-lg md:text-xl text-amber-950">
          Crafting premium modular furniture designed to elevate your home &
          workspace. Modern offices demand furniture that is both stylish and
          functional. Modular office tables are the perfect solution for
          creating adaptable, efficient, and aesthetically pleasing workspaces.
        </p>
      </div>
      <Picturewithimage/>
    </div>
  );
};

export default Maine;
