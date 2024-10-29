import React from "react";

export default function Section1() {
  const bgImage = {
    backgroundImage: "url('about-bg-img.webp')",
  };
  return (
    <div
      className="Section1 w-full h-[550px] bg-cover bg-no-repeat"
      style={bgImage}
    >
      <div className="section1-container w-full h-full px-5 text-center flex items-center justify-center">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-7xl font-bold pb-2">About Mean3</h1>
          <hr className="mt-5 mb-3 w-1/4"></hr>
          <p className="text-lg font-bold">
            Mean3 Has A Technological Mind And A Digital Heart
          </p>
        </div>
      </div>
    </div>
  );
}
