import React from "react";
import { Link } from "react-router-dom";

export default function Section6() {
  return (
    <div className="Section6 w-full">
      <div className="section6-container w-full flex flex-col items-center">
        <h1 className="text-[34px] font-bold mb-2">Our Team</h1>
        <p className="w-[55%] pb-[3%]">
          At Mean3, you will work with a dedicated team of 100+ developers,
          digital marketers, and thought leaders who aspire to shape the future
          of Ecommerce globally.
        </p>
        <img
          className="inline-block w-[76%] object-cover pb-8"
          src="team.webp"
        ></img>
        <div className="btn-container pb-11">
          <Link
            to="/"
            className="py-2 px-[51px] font-bold bg-[#DA2128] text-white rounded-[3px] border-none"
          >
            Reach us out
          </Link>
        </div>
      </div>
    </div>
  );
}
