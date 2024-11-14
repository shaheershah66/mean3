import React from "react";
import { NavLink } from "react-router-dom";

export default function Section5() {
  const bgImage = {
    backgroundImage: "url('assets/bg-reviews-shopify.webp')",
  };
  return (
    <div className="w-full section5 p-[2%] text-center mb-[3%]" style={bgImage}>
      <div className="w-full section4-container">
        <h1 className="text-[34px] font-bold leading-[41px] my-[0.67em] text-white">
          Our Reviews
        </h1>
        <div className="flex pt-5 boxes mx-auto w-[80%] mb-[25px] justify-around">
          <div className="w-1/3 bg-white box-1 py-[15px] px-5 rounded-[10px] my-[10px] mx-[8px]">
            <h1 className="text-base leading-[26px] font-bold my-[0.67em]">
              MASARRAT MISBAH
            </h1>
            <p className="text-[#373737] mb-5 font-open">
              The best experience working with an agency. On top of it and
              extremely knowledgeable. Open to feedback always willing to go
              above and beyond to make the client super satisfied. Our first
              experience with Shopify has been great thanks to them.
            </p>
          </div>

          <div className="w-1/3 bg-white box-1 py-[15px] px-5 rounded-[10px] my-[10px] mx-[8px]">
            <h1 className="text-base leading-[26px] font-bold my-[0.67em]">
              OWNER OF HABITT
            </h1>
            <p className="text-[#373737] mb-5 font-open">
              Habitt always have been the pioneer and trend setter in the home
              decor and furniture industry in Pakistan. We wanted to move to a
              better website to enhance the customer experience and conversion
              rate. So we approached Mean3 and it was our best decision. Mean3
              helped us throughout the process and met all our business
              requirements to develop an amazing user friendly website.
            </p>
          </div>

          <div className="w-1/3 bg-white box-1 py-[15px] px-5 rounded-[10px] my-[10px] mx-[8px]">
            <h1 className="text-base leading-[26px] font-bold my-[0.67em]">
              OWNER OF ELITE CIGS
            </h1>
            <p className="text-[#373737] mb-5 font-open">
              We are very happy with the content and service provided by mean3,
              everything went very smooth and they have delivered what they
              committed. They even handled our old website problems which was
              not part of the contract. The guidance regarding apps was very
              helpful and it has increased our overall sales. We recommend
              everyone to try them out
            </p>
          </div>
        </div>
        <div className="w-full">
            <NavLink className="inline-block py-[10px] px-[30px] bg-white rounded-[3px] font-bold text-[#DA2128] border-none leading-[1.15]">View Our Clientele</NavLink>
        </div>
      </div>
    </div>
  );
}
