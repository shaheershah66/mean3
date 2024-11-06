import React from "react";

export default function Section2() {
  return (
    <div className="w-full Section2 py-[35px] bg-[#F5F5F5]">
      <div className="w-full mx-auto px-[15px] text-center section2-container md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h1 className="text-[#da2128] text-[24px] md:text-[34px] font-bold capitalize leading-10 my-[0.67em]">
          What Client's Have To Say About Mean3
        </h1>
        <div className="h-[6px] mb-[30px] border-none mx-auto w-[12%] bg-[#da2128]"></div>
        <p className="-mt-5 font-sans leading-10">
          We understand its difficult to select the most reliable agency for
          your first project. Also we understand the pain of moving to another
          agency after past bad experience. This is why we have curated our
          previous client experiences for you
        </p>
      </div>
    </div>
  );
}
