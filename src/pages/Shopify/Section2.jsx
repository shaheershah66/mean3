import React from "react";

export default function Section2({ plus }) {
  return (
    <div className="w-full Section2">
      <div
        className={`${
          plus ? "block" : "hidden"
        } md:w-[95%] w-[80%] text-center pt-5 mx-auto`}
      >
        <h1 className="text-[26px] md:text-[34px] leading-[40px] font-bold pb-[2%] my-[0.67em] -mb-[1%]">
          Introduction
        </h1>
        <p className="leading-[20px] text-[#373737] pb-[1%] text-base mb-[20px]">
          We help you uplift your eCommerce store to the next level by
          leveraging the strength of Shopify Plus that is an industry-leading
          platform for eStores.
        </p>
      </div>

      <div className={`w-[90%] flex justify-center items-center section2-container mx-auto ${plus ? "" : "pt-5"}`}>
        <div className="mx-5">
          <img
            className="w-[120px]"
            alt="Awards Logos"
            src="assets/go-awards-logo.png"
          ></img>
        </div>

        <div className="mx-5">
          <img
            className="w-[97px]"
            alt="Awards Logos"
            src="assets/brand-of-the-logo.png"
          ></img>
        </div>

        <div className="mx-5">
          <img
            className="w-[119px]"
            alt="Awards Logos"
            src="assets/secp-logo.jpg"
          ></img>
        </div>

        <div className="mx-5">
          <img
            className="w-[116px]"
            alt="Awards Logos"
            src="assets/pasha-logo.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}
