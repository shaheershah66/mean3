import { useState, useEffect } from "react";
import reviewsJson from "../../data/reviews.json";

export default function Section7() {
  const reviewsData = reviewsJson;
  const bgImage = {
    backgroundImage: "url('assets/bg-reviews.jpg')",
  };

  const sliderImages = [
    "assets/andriod-logo.png",
    "assets/unity-logo.png",
    "assets/apple-logo.png",
    "assets/magento-logo.png",
    "https://mean3.com/wp-content/uploads/2015/11/logo5.svg",
    "https://mean3.com/wp-content/uploads/2021/07/react.png",
    "assets/apple-logo.png",
    "assets/magento-logo.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); 

  useEffect(() => {
    const updateVisibleImages = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleImages(4);
      } else if (width >= 550) {
        setVisibleImages(3);
      } else if (width >= 410) {
        setVisibleImages(2);
      } else {
        setVisibleImages(1);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + visibleImages) % sliderImages.length);
    }, 2000);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
      clearInterval(interval);
    };
  }, [visibleImages]); 

  const activeSliderImages = Array.from({ length: visibleImages }, (_, i) => {
    return sliderImages[(activeIndex + i) % sliderImages.length];
  });

  return (
    <div
      className="Section7 w-full text-white pt-[35px] pb-[40px] bg-cover bg-center bg-fixed "
      style={bgImage}
    >
      <div className="section7-container w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="flex items-center w-full flex-col mt-[35px] mb-[60px]">
          <h3 className="text-2xl md:text-4xl font-bold mb-[10px] text-white text-center">
            OUR PARTNERS & REVIEWS
          </h3>
          <div className="w-[40px] h-[3px] bg-white mb-[20px]"></div>
        </div>

        <div className="flex flex-wrap w-full text-base lg:flex-nowrap gap-14">
          {reviewsData.map((item, index) => (
            <div className="w-full md:w-[46%] lg:w-[20%]" key={index}>
              <p className="italic">{item.review}</p>
              <h4 className="font-bold mt-14">{item.name}</h4>
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] bg-white opacity-20 mt-[50px] mb-16"></div>

        <div className="flex flex-col w-full p-2 lg:flex-row">
          <div className="w-[20%]">
            <div className="text-lg opacity-60 relative after:content-[''] after:absolute after:left-0 after:top-[35px] after:border-solid after:border-[2px] after:w-[50px] after:border-white after:bg-white">
              TECHNOLOGIES
            </div>
          </div>

          <div className="w-full mt-7 lg:mt-0 lg:w-[80%] flex overflow-hidden">
            {activeSliderImages.map((url, index) => (
              <div
                className="w-full flex justify-center min-[410px]:w-1/2 min-[550px]:w-1/3 xl:w-1/4 animate-slide-up"
                key={`${url}-${activeIndex}`}
              >
                <a href="#">
                  <img className="inline-block object-contain w-auto h-[60px] text-black" src={url} alt="Tech Logos" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

