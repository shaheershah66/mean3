import React from "react";
import { Link } from "react-router-dom";

export default function Section6() {
  return (
    <div className="w-full Section6">
      <div className="flex flex-col items-center w-full text-center section6-container">
        <h1 className="text-[26px] md:text-[34px] font-bold mb-5 md:mb-2">Our Team</h1>
        <p className="text-xs md:text-sm w-[90%] md:w-[55%] pb-[3%] text-[#373737] font-open">
          At Mean3, you will work with a dedicated team of 100+ developers,
          digital marketers, and thought leaders who aspire to shape the future
          of Ecommerce globally.
        </p>
        <img
          className="inline-block w-[76%] object-cover pb-8 text-left"
          src="assets/team.webp"
          alt="Team Image"
        ></img>
        <div className="py-5 btn-container md:pb-11">
          <Link
            to="/"
          >
            <button className="py-2 px-[51px] font-bold bg-[#DA2128] text-white rounded-[3px] border-none">Join Our Team</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
