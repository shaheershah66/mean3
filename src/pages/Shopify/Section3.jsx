import React from "react";

export default function Section3() {
  return (
    <div className="w-full Section3 px-5 md:px-0 pt-[2%]">
      <div className="flex flex-col items-center w-full md:flex-row justify-evenly section3-container">
        <div className="w-full md:w-[36%] text-[#373737]">
          <h1 className="text-[26px] md:text-[34px] font-bold leading-[32px] md:leading-[41px] text-[#DA2128] my-[0.67em] pb-[2%]">
            We Are Experts In Shopify And Shopify Plus
          </h1>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            We are experts in Shopify and Shopify Plus. Everything related to
            Shopify and eCommerce is what we live and breathe.
          </p>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            We are among the oldest and highest rated official Shopify Experts
            in the entire world. We also have the top ranking for Shopify
            experts
          </p>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            We began working with Shopify for development at the very beginning
            and have since assisted hundreds of firms in becoming successful on
            the platform. Today, we are known as the agency to turn to for all
            things Shopify and e-commerce.
          </p>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            90% of our new customers are brought in via word of mouth. Shopify
            frequently recommends us.
          </p>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            Why? because we complete the task. In time. on a budget. to the
            greatest requirements.
          </p>
          <p className="leading-[20px] pb-[1%] text-base mb-5">
            That certainly is something.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <img
            src="assets/computer-shopify.png"
            alt="Computer Logo"
            className="w-full md:w-auto cover"
          ></img>
        </div>
      </div>
      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-full"></div>
    </div>
  );
}
