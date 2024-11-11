import React from "react";

export default function Section4() {
  return (
    <div className="Section4 w-full my-[45px] mx-auto pt-[38px] pb-5 md:py-[62px] px-5 bg-[#F5F5F5]">
      <div className="flex flex-col items-center smd:items-start smd:flex-row justify-center smd:gap-[5%] w-full h-full section4-container">
        <div className="w-full xxs:w-[330px] text-center">
          <h1 className="text-[26px] mb-5 md:mb-0 md:text-[34px] font-bold text-[#DA2128] pb-2">
            Our Mission
          </h1>
          <p className="mb-5 smd:mb-0 pb-[3%] font-open text-xs md:text-sm mx-auto text-[#373737] leading-5">
            Our mission is to empower businesses worldwide to reach their full
            potential by providing exceptional IT, E-commerce solutions, and
            digital services. We are committed to creating cutting-edge
            solutions that enable our clients to excel in the digital landscape,
            helping them thrive and succeed in their respective industries by
            treating their businesses as our own.
          </p>
        </div>

        <div className="line hidden md:block h-[1px] w-[146px] bg-[#D7D7D7] border-[1px] rotate-90 mt-[7%]"></div>

        <div className="w-full xxs:w-[330px] text-center">
          <h1 className="text-[26px] mb-5 md:mb-0 md:text-[34px] font-bold text-[#DA2128] pb-2">
            Our Vision
          </h1>
          <p className="mb-5 smd:mb-0 pb-[3%] text-xs md:text-sm mx-auto font-open text-[#373737] leading-5">
            Our vision is to build long-lasting client partnerships by providing
            a comprehensive and integrated solution to fuel the success of their
            businesses.
          </p>
        </div>
      </div>
    </div>
  );
}
