import React from "react";

export default function Section5() {
  return (
    <div className="Section5 w-full text-white">
      <div className="section5-container w-full flex">
        {/* Left Section */}
        <div className="w-1/2 flex bg-[#693535] p-[10%] items-center">
          <div className="flex flex-col text-right">
            <h3 className="mb-[15px] text-3xl font-bold">
              WE SERVE CLIENTS WORLDWIDE
            </h3>
            <p className="mb-[15px]">
              We have served over 200+ clients internationally such as USA,
              Canada, Australia, Europe, MENA region & Asia.
            </p>
          </div>
          <div className="ml-3">
            <img
              className=""
              src="https://mean3.com/wp-content/uploads/2015/11/ico-world.svg"
              alt="World Icon"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex bg-[#C91F21] p-[10%] items-center">
          <div className="mr-3">
            <img
              className=""
              src="https://mean3.com/wp-content/uploads/2015/11/ico-results.svg"
              alt="Results Icon"
            />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="mb-[15px] text-3xl font-bold">
              INSTANT RESULTS
            </h3>
            <p>
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

