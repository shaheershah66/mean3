import React from "react";

export default function Section1() {
  return (
    <div className="Section1 w-full h-screen">
      <div className="section1-container w-full h-full relative">
        <img
          className="w-full h-full items-center object-cover object-top absolute top-0 left-0 -z-10"
          src="mean3-bg-picture.jpg"
        ></img>
        <div className="text-white w-1/2 flex  h-full flex-col justify-center">
          <div className="w-full mb-9 md:mb-0">
            <div className="flex">
              <h3 className="text-2xl p-4 opacity-70 w-[65%] text-right bg-black rounded-r-lg">
                WE DELIVER<strong> Results</strong>
              </h3>
              <a className="text-2xl text-center cursor-pointer p-4 w-[35%] opacity-70 rounded-lg ml-2 bg-[#cd2122]">
                See Portfolio
              </a>
            </div>
            <h3 className="text-md w-[85%] p-4 opacity-65 text-right bg-black rounded-r-lg mt-2">
              FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
