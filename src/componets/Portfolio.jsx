import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio({bgImage, objectPosition, customer , altText}) {
    return (
        <div className="relative w-full h-full overflow-hidden section1-container">
          <img
            className={`absolute top-0 left-0 items-center block object-cover w-full h-full ${objectPosition} -z-10`}
            src={bgImage} alt={altText}
          ></img>
          <div className="text-white font-sans top-auto bottom-[35px]  mx-auto w-[95%]  absolute left-1/2 -translate-x-1/2 -translate-y-1/2  md:w-[750px]  md:mt-0 lg:w-[970px] lg:top-1/2 lg:bottom-auto lg:mt-[70px] xl:w-[1170px]">
              <h2 className={`${customer ? "inline-block" : "hidden"} py-[25px] font-mont px-4 mb-5 md:mb-[40px] min-[1280px]:mb-[80px] mt-5 relative before:rounded-lg before:-z-10 before:skew-x-[20deg]  before:rounded-r-lg before:content-[''] before:w-full before:h-full before:bg-black/[0.6] before:absolute before:left-0 before:top-0`}>
                <span className="text-[22px] lg:text-[28px]">SERVING 100+ CUSTOMERS</span>
              </h2>
              <div className="flex flex-wrap">
                <h3 className="text-lg mb-2 lg:text-[28px] z-10  relative py-[15px] pr-[20px] -ml-[2000px] pl-[2000px] before:-z-10 before:skew-x-[20deg] text-right  before:rounded-r-lg inline-block before:content-[''] before:w-full before:h-full before:bg-black/[0.6] before:absolute before:left-0 before:top-0">
                  WE DELIVER<strong> RESULTS</strong>
                </h3>
                <Link to="/clients" className="lg:text-[18px] text-[13px] md:text-sm mb-2 p-[18px] xl:text-[21px] xl:px-[48px] before:skew-x-[20deg] transition-all inline-block relative text-center before:-z-10 z-10 cursor-pointer before:rounded-lg ml-[5px] before:bg-[#cd2122]/[0.7] hover:before:bg-[#cd2122]/[1] before:content-[''] before:w-full before:h-full  before:absolute before:left-0 before:top-0">
                  SEE PORTFOLIO
                </Link>
              </div>
              <h3 className="relative text-sm md:text-base py-[15px] pr-[16px] hidden xs:inline-block before:-skew-x-[20deg] before:-z-10 z-10 p-4 -ml-[2000px] pl-[2000px] text-right before:rounded-r-lg before:content-[''] before:w-full before:h-full before:bg-black/[0.4] before:absolute before:left-0 before:top-0">
                FOR HUNDREDS OF SUCCESSFUL BUSINESSES WORLDWIDE
              </h3>
          </div>
        </div>
    );
}

