import React from "react";

const Officetabel = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <p className="text-4xl text-center font-semibold font-serif text-gray-800 mb-12">
        OFFICE & DECORATION
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 font-serif sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div
            className="border shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl bg-green-100 hover:bg-green-200"
          >
            <div className="p-6">
              <p className="font-bold text-lg text-gray-800 font-serif max-[635px]:text-center mb-4">Tables</p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>Modular Workstations</li>
                <li>Executive Table</li>
                <li>Metal Table</li>
                <li>Conference Tables</li>
                <li>Reception Table</li>
                <li>Boss/M.D. Table</li>
                <li>Cafeteria Table</li>
                <li>Center Table</li>
                <li>Educational Desks</li>
                <li>Storages & Desks</li>
              </ul>
            </div>
            <div className="flex justify-center p-6">
              <img src="./tabel1.png" alt="Tables" className="w-full max-w-xs transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

     
          <div
            className="border shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl bg-yellow-100 hover:bg-yellow-200"
          >
            <div className="flex justify-center p-6">
              <img src="./chair2.png" alt="Chairs" className="w-full max-w-xs transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <p className="font-bold text-lg text-gray-800 max-[635px]:text-center mb-4">Chairs</p>
              <ul className="space-y-2 text-gray-700">
                <li>Workstations Chairs</li>
                <li>Conference Chairs</li>
                <li>Reception Chairs</li>
                <li>Executive Chairs</li>
                <li>Sofa</li>
                <li>Boss/M.D. Chairs</li>
                <li>Cafeteria Chairs</li>
              </ul>
            </div>
          </div>

          {/* Third Card */}
          <div
            className="border shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl bg-red-100 hover:bg-red-200"
          >
            <div className="p-6">
              <p className="font-bold text-lg text-gray-800 max-[635px]:text-center mb-4">Chairs</p>
              <ul className="space-y-2 text-gray-700">
                <li>Workstations Chairs</li>
                <li>Conference Chairs</li>
                <li>Reception Chairs</li>
                <li>Executive Chairs</li>
                <li>Sofa</li>
                <li>Boss/M.D. Chairs</li>
                <li>Cafeteria Chairs</li>
              </ul>
            </div>
            <div className="flex justify-center p-6">
              <img src="./chair3.png" alt="Chairs" className="w-full max-w-xs transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officetabel;
