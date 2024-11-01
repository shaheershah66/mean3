import React from "react";
import clientsJson from "../../data/clients.json";

export default function Section2() {
  const clientsData = clientsJson;

  return (
    <div className="w-full Section2 py-[25px] bg-[#F5F5F5]">
      <div className="section2-container mx-auto w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] px-[15px]">
        <h1 className="font-bold text-center leading-7  text-[#da2128] mt-[4%] mb-[7%] text-[24px] md:text-[34px] w-full">
          Our Respected Clients
        </h1>
        <div className="flex flex-wrap justify-center min-[501px]:justify-start w-full">
          {clientsData.map(({ imgUrl, url }) => {
            return (
              <div className="box w-full min-[501px]:w-[50%] min-[801px]:w-[33.33%] min-[1101px]:w-[25%] px-[15px] mb-[30px]">
                <a href={url}>
                  <img
                    className="block w-full h-[170px] shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)]"
                    src={imgUrl}
                    alt="clients-logos"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
