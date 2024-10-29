import React from "react";

export default function Section5() {
  return (
    <div className="Section5 w-full text-white">
      <div className="section5-container w-full flex">
        {/* Left Section */}
        <div className="w-1/2 bg-[#747474] p-[10%] flex text-right">
          <div className="flex flex-col">
            <h3 className="mb-[15px] text-3xl font-bold mt-[55px]">
              WE SERVE CLIENTS WORLDWIDE
            </h3>
            <p className="text-[13px]">
              We have served over 200+ clients internationally such as USA,
              Canada, Australia, Europe, MENA region & Asia.
            </p>
          </div>
          <img
            className="w-[200px] inline-block ml-3"
            src="https://mean3.com/wp-content/uploads/2015/11/ico-world.svg"
            alt="World Icon"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-[#D96061] p-[10%] flex text-left">
          <img
            className="w-[200px] inline-block mr-3"
            src="https://mean3.com/wp-content/uploads/2015/11/ico-results.svg"
            alt="Results Icon"
          />
          <div className="text-left flex flex-col">
            <h3 className="mb-[15px] text-3xl font-bold mt-[55px]">INSTANT RESULTS</h3>
            <p className="text-[13px]">
              Completely predominate backend functionalities whereas
              professional convergence. Enthusiastically deploy multimedia based
              metrics with turnkey networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
