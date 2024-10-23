import { useState } from "react";
import Slider from "react-slick";
import SliderBtn from "../../componets/SliderBtn";
import sliderVideoJson from "../../data/sliderVideo.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section6() {
  const [sliderData, setSliderData] = useState(sliderVideoJson);
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    nextArrow: <SliderBtn direction={"next"} />,
    prevArrow: <SliderBtn direction={"prev"} />,
  };

  return (
    <div className="Section6 w-full text-white pt-28 pb-[35px]">
      <div className="section6-container w-full justify-center">
        <h3 className="text-4xl font-bold mb-10 text-red-800 text-center">
          CLIENT TESTIMONIALS
        </h3>
        <div className="xl:w-[1170px] mx-auto px-[15px]">
          <Slider {...settings}>
            {sliderData.map((item) => {
              return (
                <video
                  className=""
                  src={item.url}
                  controls
                  autoPlay
                  muted
                ></video>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
