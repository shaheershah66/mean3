import React from "react";

export default function Section1() {
  return (
    <div className="Section1 w-full h-screen">
      <div className="section1-container w-full h-full relative">
        <img
          className="w-full h-full items-center object-cover object-top absolute top-0 left-0 -z-10"
          src="mean3-bg-picture.jpg"
        ></img>
        <div className="text-white md:w-[750px] lg:w-[970px] xl:w-[1170px] mt-[70px] mb-0 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2">
          <div className="w-full">
            <div className="flex">
              <h3 className="text-[32px] z-10 before:-z-10 relative before:skew-x-[20deg] p-4 text-right -ml-[2000px] pl-[2000px] before:rounded-r-lg inline-block before:content-[''] before:w-full before:h-full before:bg-black/[0.6] before:absolute before:left-0 before:top-0">
                WE DELIVER<strong> RESULTS</strong>
              </h3>
              <a className="text-[21px] before:skew-x-[20deg] inline-block relative text-center before:-z-10 z-10 cursor-pointer p-4 before:rounded-lg ml-2 before:bg-[#cd2122]/[0.7] before:content-[''] before:w-full before:h-full  before:absolute before:left-0 before:top-0">
                SEE PORTFOLIO
              </a>
            </div>
            <h3 className="text-base relative before:-skew-x-[20deg] inline-block before:-z-10 z-10 p-4 -ml-[2000px] pl-[2000px] text-right before:rounded-r-lg mt-2 before:content-[''] before:w-full before:h-full before:bg-black/[0.4] before:absolute before:left-0 before:top-0">
              FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
