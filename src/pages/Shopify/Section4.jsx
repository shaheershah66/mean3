import React from "react";
import shopifySolutionsJson from "../../data/shopifySolutions.json";

export default function Section4() {
  const shopifySolutionsData = shopifySolutionsJson;
  
  return (
    <div className="w-full Section4">
      <div className="w-full mx-auto section4-container">
        <h1 className="w-[61%] mx-auto text-center text-[34px] leading-[41px] text-[#151515] font-bold my-[0.67em]">
          We've Got The Solution If You're Ready To Design Build On Scale On
          Shopify
        </h1>
        <div className="boxes w-[85%] flex justify-center gap-x-[2%] gap-y-[30px] flex-wrap mx-auto p-[2%_0px_4%_0px]">
          {shopifySolutionsData.map(({ title, list }, index) => {
            return (
              <div key={title} className={`box-${index+1} w-[30%] p-[3%] ${(index + 1) % 2 === 0 ? "text-[#373737] bg-[#F5F5F5]" : "bg-[#E42E35] text-white"}`}>
                <h1 className="text-[25px] capitalize font-bold leading-[30px] my-[0.67em] pb-[4%]">
                  {title}
                </h1>
                {list.map((item) => {
                  return (
                    <li key={item} className="pl-[4%] capitalize leading-[20px]">{item}</li>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
