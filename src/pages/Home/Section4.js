import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Section4() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="Section4 w-full py-[35px]">
      <div className="section3-container xl:w-[1170px] mx-auto px-[15px]">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2 text-red-800">News</h3>
          <h4 className="text-xl text-black mb-2 text-center">
            We’re proud to be consistently recognized as the fastest-growing
            technology company, earning a variety of awards and recognition in
            several key areas.
          </h4>
        </div>

        {/* carousel */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
