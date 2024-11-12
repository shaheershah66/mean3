import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderBtn from "../../componets/SliderBtn";
import sliderVideoJson from "../../data/sliderVideo.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section6() {
  const sliderData = sliderVideoJson;

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.5,
    });

    videoRefs.current.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
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
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="Section6 w-full text-white pt-20 pb-[45px]">
      <div className="w-full section6-container">
        <h3 className="text-2xl md:text-4xl font-bold mb-10 text-[#da2128] text-center">
          CLIENT TESTIMONIALS
        </h3>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <div className="w-full xl:w-[1200px] h-[190px] md:h-auto mx-auto">
                <video
                  ref={(el) => videoRefs.current[index] = el}
                  className="object-cover w-full h-full"
                  src={item.url}
                  controls={true}
                  muted={true}
                  preload="auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

