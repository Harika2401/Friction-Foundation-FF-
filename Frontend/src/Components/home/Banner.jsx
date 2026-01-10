import React from "react";
const Banner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-10 z-50 flex items-center justify-center text-sm font-medium text-orange-800 bg-linear-to-r from-orange-200 via-orange-100 to-orange-50">
      <span className="px-3 py-1 mr-2 rounded-lg bg-orange-600 text-white">
        New
      </span>
      Friction Foundation
    </div>
  );
};

export default Banner;
