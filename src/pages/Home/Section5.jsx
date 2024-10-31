import React from "react";

export default function Section5() {
  return (
    <div className="w-full text-white Section5">
      <div className="flex flex-col w-full md:flex-row section5-container">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[#747474] py-[15%] md:py-[10%] px-[5%] flex-col-reverse xs:flex-row  flex md:flex-col-reverse lg:flex-row text-right justify-end">
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
            className="w-[200px] inline-block xs:ml-3 self-end xs:self-start md:self-end lg:self-start"
            src="https://mean3.com/wp-content/uploads/2015/11/ico-world.svg"
            alt="World Icon"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#D96061] py-[15%] md:py-[10%] px-[5%] text-left flex-col flex xs:flex-row md:flex-col lg:flex-row">
          <img
            className="w-[200px] inline-block xs:mr-3 self-start"
            src="https://mean3.com/wp-content/uploads/2015/11/ico-results.svg"
            alt="Results Icon"
          />
          <div className="flex flex-col text-left">
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
