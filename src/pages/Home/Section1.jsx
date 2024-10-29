import React from "react";

export default function Section1() {
  return (
    <div className="w-full h-screen Section1">
      <div className="relative w-full h-full section1-container">
        <img
          className="absolute top-0 left-0 items-center object-cover object-center w-full h-full -z-10"
          src="mean3-bg-picture.jpg"
        ></img>
        <div className="text-white top-auto bottom-[35px] mb-0 mx-auto w-[95%] absolute left-1/2 -translate-x-1/2 md:w-[750px]  md:mt-0 lg:w-[970px] lg:top-1/2 lg:mt-[70px] xl:w-[1170px] ">
          <div className="w-full">
            <div className="flex flex-wrap">
              <h3 className="text-[32px] text-lg mb-2 lg:text-[28px] z-10  relative py-[15px] pr-[20px] -ml-[2000px] pl-[2000px] before:-z-10 before:skew-x-[20deg] text-right  before:rounded-r-lg inline-block before:content-[''] before:w-full before:h-full before:bg-black/[0.6] before:absolute before:left-0 before:top-0">
                WE DELIVER<strong> RESULTS</strong>
              </h3>
              <a className="text-[21px] text-sm mb-2 p-[18px] lg:text-lg before:skew-x-[20deg] inline-block relative text-center before:-z-10 z-10 cursor-pointer before:rounded-lg ml-[5px] before:bg-[#cd2122]/[0.7] before:content-[''] before:w-full before:h-full  before:absolute before:left-0 before:top-0">
                SEE PORTFOLIO
              </a>
            </div>
            <h3 className="relative text-sm py-[15px] pr-[16px] hidden xs:inline-block before:-skew-x-[20deg] before:-z-10 z-10 p-4 -ml-[2000px] pl-[2000px] text-right before:rounded-r-lg before:content-[''] before:w-full before:h-full before:bg-black/[0.4] before:absolute before:left-0 before:top-0">
              FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
