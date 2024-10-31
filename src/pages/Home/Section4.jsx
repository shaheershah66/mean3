import React, { useState } from "react";
import Slider from "react-slick";
import sliderImageJson from "../../data/sliderImage.json";
import SliderBtn from "../../componets/SliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section4() {
  const [sliderData, setSliderData] = useState(sliderImageJson);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderBtn direction="next" position={{ right: "20px", opacity: "1"}} />,
    prevArrow: <SliderBtn direction="prev" position={{ left: "20px", opacity: "1"}} />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <div className="Section4 w-full py-[35px]">
      <div className="section3-container w-full xl:w-[1170px] mx-auto px-[15px]">
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold text-red-800 md:text-4xl">News</h3>
          <h4 className="mb-2 text-base text-center text-black">
            We’re proud to be consistently recognized as the fastest-growing
            technology company, earning a variety of awards and recognition in
            several key areas.
          </h4>
        </div>

        {/* carousel */}
        <div className="py-[35px]">
          <Slider {...settings}>
            {sliderData.map((item, index) => {
              return (
                <div key={index}>
                  <a
                    className="inline-block px-4 cursor-pointer"
                    href={item.link}
                  >
                    <img
                      className="inline-block object-cover w-full"
                      height={100}
                      src={item.image}
                      alt={item.title}
                    />
                    <p className="text-lg leading-5 mt-[10px]">
                      <strong>{item.title}</strong>
                    </p>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
