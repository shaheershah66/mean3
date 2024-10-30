import { useState } from "react";
import Slider from "react-slick";
import SliderBtn from "../../componets/SliderBtn"; // Ensure correct path
import sliderVideoJson from "../../data/sliderVideo.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section6() {
  const [sliderData] = useState(sliderVideoJson);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    nextArrow: <SliderBtn direction="next" position={{ right: "5%", opacity: "0.4" }} />,
    prevArrow: <SliderBtn direction="prev" position={{ left: "5%", opacity: "0.4" }} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
    ]
  };

  return (
    <div className="Section6 w-full text-white pt-28 pb-[45px]">
      <div className="w-full section6-container">
        <h3 className="text-4xl font-bold mb-10 text-[#da2128] text-center">
          CLIENT TESTIMONIALS
        </h3>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <div className="w-full xl:w-[1200px] h-[190px] md:h-auto mx-auto">
                <video
                  className="object-cover w-full h-full"
                  src={item.url}
                  controls
                  autoPlay
                  muted
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
