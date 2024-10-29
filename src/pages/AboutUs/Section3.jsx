import React from "react";

export default function Section3() {
  return (
    <div className="Section3 w-full">
      <div className="section3-container w-full text-center">
        <h1 className="text-[34px] font-bold mb-2">
          What does <span className="text-[#DA2128]">Mean</span> stands for?
        </h1>
        <p className="pb-[3%]">
          Mean3’s name is derived from a technology stack called ‘MeanStack’
          Which means
        </p>
        <div className="flex justify-center items-center gap-14">
          <div className="mean">
            <div className="img-cont w-[142px] h-[140px] shadow-box">
              <img src="m-logo.png" className="w-full h-full"></img>
            </div>
            <img src="monogoDB-logo.png"></img>
          </div>

          <div className="mean">
            <div className="img-cont w-[142px] h-[140px] shadow-box">
              <img src="e-logo.png" className="w-full h-full"></img>
            </div>
            <img src="express-logo.png"></img>
          </div>

          <div className="mean">
            <div className="img-cont w-[142px] h-[140px] shadow-box">
              <img src="a-logo.png" className="w-full h-full"></img>
            </div>
            <img className="inline-block mt-[7px]" src="angular-logo.png"></img>
          </div>

          <div className="mean">
            <div className="img-cont w-[142px] h-[140px] shadow-box">
              <img src="n-logo.png" className="w-full h-full"></img>
            </div>
            <img className="inline-block mt-[3px]" src="nodejs-logo.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
