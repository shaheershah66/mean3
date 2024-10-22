import React from "react";

export default function Section1() {
  return (
    <div className="Section1 w-full h-screen">
      <div className="section1-container w-full h-full relative">
        <img
          className="w-full h-full items-center object-cover object-top absolute top-0 left-0 -z-10"
          src="mean3-bg-picture.jpg"
        ></img>
        <div className="text-white w-[80%] lg:w-1/2 flex  h-full flex-col lg:justify-center justify-end">
          <div className="lg:min-w-[485px] xl:min-w-[585px] mb-9 md:mb-0">
            <div className="flex">
              <h3 className="text-xl p-2 lg:text-2xl lg:p-4 opacity-70 w-[64%] text-right bg-black rounded-r-lg">
                WE DELIVER<strong> Results</strong>
              </h3>
              <a className="text-xl  p-2  lg:text-2xl text-center cursor-pointer lg:p-4 w-[35%] opacity-70 rounded-lg ml-2 bg-[#cd2122]">
                See Portfolio
              </a>
            </div>
            <h3 className="text-sm w-full p-2  lg:w-[85%] lg:p-4 opacity-65 text-right bg-black rounded-r-lg mt-2">
              FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
