import React from "react";

export default function Section2() {
  return (
    <div className="w-full Section2 py-[35px] bg-[#F5F5F5]">
      <div className="section2-container relative w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] md:px-[15px] mx-auto">
        <h1 className="text-center text-[34px] font-bold text-[#DA2128] leading-10">
          Mean3 Blogs
        </h1>
        <div className="flex w-full">
          <div className="w-1/3 blog-container">
            <a className="inline-block after:transition-all after:duration-200 after:ease-out before:transition-all before:duration-200 before:ease-out rounded-sm relative after:content-['+'] after:absolute after:z-[2] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:font-bold after:opacity-0 hover:after:opacity-100 after:text-[50px] before:absolute before:block before:content-[''] before:w-full before:h-full before:z-[1] hover:before:bg-black/[0.4] before:rounded-[3px] hover:before:shadow-[inset_0_0_0_5px_red] shadow-[0_1px_1px_rgba(0,0,0,.22)] mb-[10px] cursor-pointer">
              <img
                src="assets/shopifyvswoo.png"
                className="inline-block w-full rounded-sm"
              ></img>
            </a>
            <h3 className="my-[10px] hover:text-[#cd2122] font-sans text-base italic leading-[1.4] cursor-pointer">
              <a className="inline-block">
                Comparing Shopify and WooCommerce: Make the Right Choice for
                Your Ecommerce Journey
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
