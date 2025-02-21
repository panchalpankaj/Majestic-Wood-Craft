import React from "react";

const MetingTable = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-7 border shadow-2xl">
        <p className="text-2xl text-teal-700 font-serif pl-3">
          MEETING TABLE SET 1
        </p>
        <img src="./metingtab1.png" className="shadow-2xl"></img>
      </div>

      <div className="flex flex-col justify-center px-7 border shadow-2xl mt-5">
        <p className="text-2xl text-teal-700 font-serif pl-3">
        DESK TABLE SET 2
        </p>
        <img src="./tabelset2.png" className="shadow-2xl"></img>
      </div>

      <div>
        <img src="./soffa1.png"></img>
      </div>
      <div className="px-3">
        <img src="./soffa2.png"></img>
      </div>
      <div className="">
        <img src="./soffa3.png"></img>
      </div>
      <div className="w-full flex justify-center">
        <img src="./holl.png"></img>
      </div>
    </div>
  );
};

export default MetingTable;
