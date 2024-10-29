import React from "react";
import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <div className="Section2 w-full">
      <div className="section2-container w-[70.5%] pt-[60px] mx-auto flex">
        <div className="image-container w-1/2 h-[524px]">
          <img
            className="w-full object-contain h-full block mx-auto"
            src="section2-aboutus.webp"
          ></img>
        </div>
        <div className="w-1/2 pt-[34px]">
          <h1 className="text-[34px] font-bold pb-2">About Us</h1>
          <p className="pb-5">
            Mean3 is a distinguished software house and marketing agency that
            came into being in 2016 under the visionary leadership of Abdul Hadi
            Siraj. Our aim is to revolutionize businesses worldwide, propelling
            them towards prosperity while optimizing costs. With numerous
            accolades adorning our journey, including an award for Emerging Web
            Application Development Agency, Mean3 has fostered partnerships with
            over 200 global enterprises, powered by a dynamic in-house team of
            more than 100 experts with offices strategically situated in New
            York and Pakistan.
          </p>
          <p className="pb-5">
            Our portfolio boasts an array of notable clients, and we take pride
            in having worked with prominent names like Now and Forever,Zashko
            INC, e-commerce giants such as Carters, and renowned automobile
            brands including KIA, Hyundai, and PEUGEOT. Currently, Mean3 stands
            as a preeminent E-commerce solution provider in Pakistan,
            particularly acclaimed for our expertise in Shopify Plus. Our
            incessant drive to exceed limits propels us to craft tailored
            solutions, revolutionizing the Global Information Technology
            industry as we orchestrate a seamless symphony of technology and
            innovation
          </p>
          <div className="btn-container">
            <Link
              to="/"
              className="py-2 px-[51px] font-bold bg-[#DA2128] text-white rounded-[3px] border-none"
            >
              Reach us out
            </Link>
          </div>
        </div>
      </div>
      <div className="line my-[5%] mx-auto w-[61%] shadow-line h-2 pt-[0.5%] rounded-full"></div>
    </div>
  );
}
