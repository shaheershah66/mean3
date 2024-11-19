import React from "react";
import { NavLink } from "react-router-dom";
import shopifyReviewsJson from "../../data/shopifyReviews.json";
import shopifyPlusReviewsJson from "../../data/shopifyPlusReviews.json";

export default function Section5({ plus }) {
  const shopifyReviewsData = shopifyReviewsJson;
  const shopifyPlusReviewsData = shopifyPlusReviewsJson;
  
  const bgImage = {
    backgroundImage: "url('assets/bg-reviews-shopify.webp')",
  };

  return (
    <div
      className="w-full Section5 mt-[40px] md:mt-0 p-[2%] text-center mb-[40px] md:mb-[3%] bg-cover"
      style={bgImage}
    >
      <div className="w-full section4-container">
        <h1 className="text-[24px] md:text-[34px] font-bold leading-[41px] my-[0.67em] text-white">
          Our Reviews
        </h1>
        
        <div className="flex flex-col md:flex-row pt-0 md:pt-5 boxes mx-auto w-[80%] mb-[25px] justify-around">
          {(plus ? shopifyPlusReviewsData : shopifyReviewsData).map((item) => (
            <div
              key={item.title}
              className="w-full md:w-1/3 bg-white box-1 py-[15px] px-5 rounded-[10px] my-[8px] md:mx-[8px]"
            >
              <h1 className="text-base leading-[26px] font-bold my-[0.67em] uppercase">
                {item.title}
              </h1>
              <p className="text-[#373737] mb-5 font-open">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <NavLink
            to="/testimonial"
            className="inline-block py-[10px] px-[30px] bg-white rounded-[3px] font-bold text-[#DA2128] border-none leading-[1.15]"
          >
            View Our Clientele
          </NavLink>
        </div>
      </div>
    </div>
  );
}
