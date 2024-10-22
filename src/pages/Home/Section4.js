import React, { useState } from "react";
import Slider from "react-slick";
import sliderJson from "../../data/slider.json";
import SliderBtn from "../../componets/SliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section4() {
    const [sliderData, setSliderData] = useState(sliderJson);
    
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SliderBtn direction={"next"} />,
        prevArrow: <SliderBtn direction={"prev"} />
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
                <div className="py-[35px]">
                    <Slider {...settings}>
                        {
                            sliderData.map((item, index) => {
                                return (
                                    <div key={index}> {/* Added key prop */}
                                        <a className="cursor-pointer inline-block px-4" href={item.link}> {/* Changed src to href */}
                                            <img className="inline-block w-full object-cover" height={100} src={item.image} alt={item.title} /> {/* Added alt attribute */}
                                            <p className="text-lg leading-5 mt-[10px]"><strong>{item.title}</strong></p>
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

