import React from "react";

export default function Section1() {
  const bgImage = {
    backgroundImage: "url('assets/about-bg-img.webp')",
  };
  return (
    <div
      className="Section1 w-full h-[290px] md:h-[550px] bg-cover bg-no-repeat"
      style={bgImage}
    >
      <div className="flex items-center justify-center w-full h-full px-5 text-center section1-container">
        <div className="flex flex-col items-center text-white">
          <h1 className=" text-[32px] xl:text-7xl md:text-[45px] font-bold">About Mean3</h1>
          <hr className="w-1/4 mt-5 mb-3 md:mt-10 xl:mt-5"></hr>
          <p className="text-sm font-bold md:text-lg text-[#E2E2E2]">
            Mean3 Has A Technological Mind And A Digital Heart
          </p>
        </div>
      </div>
    </div>
  );
}
