import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import IFrame from "./IFrame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import shopifyBrandsJson from "../data/shopifyBrands.json";
import SliderBtn from "./SliderBtn";

export default function Layout() {
  const shopifyBrandsData = shopifyBrandsJson;

  const settings = {
    dots: false,
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: (
      <SliderBtn direction="next" position={{ right: "2%", opacity: "0.65" }} />
    ),
    prevArrow: (
      <SliderBtn direction="prev" position={{ left: "2%", opacity: "0.65" }} />
    ),
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="relative Layout">
      <div className="absolute top-0 left-0 px-[8px] overflow-hidden z-40 w-screen h-screen bg-[#333] opacity-95 transition-opacity duration-1000 ease-out">
        <Slider {...settings}>
          {shopifyBrandsData.map((item, index) => {
            return (
              <div key={index} className="relative w-full h-screen">
                <div className="relative inline-block transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <span className="text-white opacity-65 absolute text-[28px] right-0 -top-[30px] cursor-pointer">
                    x
                  </span>
                  <img
                    className="object-cover w-auto h-auto m-auto"
                    src={item.imgUrl}
                    alt="Brand Logos"
                  />
                  <div className="absolute -bottom-[20px] right-0 inline-block font-open text-xs text-[#ccc]">
                    <div>
                      {index + 1} of {shopifyBrandsData.length}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <IFrame />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
