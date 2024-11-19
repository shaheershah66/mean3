import React from "react";
import Form from "../../componets/Form";

export default function Section10() {
  return (
    <div id="contact-us-sect" className="w-full Section10">
      <div className="w-full section-container">
        <div className="mx-auto w-[90%] md:w-[61%] text-center pb-[1%] -mb-[2.5%]">
          <h1 className="text-[24px] md:text-[34px] leading-[29px] md:leading-[41px] font-bold text-[#151515] my-[0.67em]">
            Contact Us
          </h1>
          <p className="leading-[20px] text-[#373737] w-full md:w-[75%] mx-auto text-base font-open">
            Grow your eCommerce brand with some expert help
          </p>
        </div>
        <div className="w-full py-[35px] px-0 md:px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <Form />
        </div>
      </div>
    </div>
  );
}

