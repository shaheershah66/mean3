import React from "react";

export default function Section3() {
  const mean = [
    { logo: "assets/m-logo.png", img: "assets/monogoDB-logo.png" },
    { logo: "assets/e-logo.png", img: "assets/express-logo.png" },
    { logo: "assets/a-logo.png", img: "assets/angular-logo.png" },
    { logo: "assets/n-logo.png", img: "assets/nodejs-logo.png" },
  ] 
  
  return (
    <div className="w-full Section3">
      <div className="w-full text-center section3-container">
        <h1 className="text-[26px] md:text-[34px] font-bold mb-5 md:mb-2">
          What does <span className="text-[#DA2128]">Mean</span> stands for?
        </h1>
        <p className="mb-8 text-xs font-open md:text-sm text-[#373737]">
          Mean3’s name is derived from a technology stack called ‘MeanStack’
          Which means
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-14">
          {mean.map((item) => (
            <div className="flex flex-col items-center mean">
              <div className="img-cont leading-tight shadow-box w-[70px] h-[70px] xxs:h-[100px] xxs:w-[100px] md:w-[142px] md:h-[140px]">
                <img src={item.logo} className="object-contain w-full h-full" alt="Mean Letters Logos"></img>
              </div>
              <img className="w-[70px] leading-tight h-[45px] md:h-[56px] object-contain xxs:w-[100px] md:w-[142px]" src={item.img} alt="Mean Tech Logos"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
