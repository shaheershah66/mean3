import { useState, useEffect } from "react";
import reviewsJson from "../../data/reviews.json";

export default function Section7() {
  const [reviewsData, setReviewsData] = useState(reviewsJson);
  const bgImage = {
    backgroundImage: "url('bg-reviews.jpg')",
  };

  const sliderImages = [
    "andriod-logo.png",
    "unity-logo.png",
    "apple-logo.png",
    "magento-logo.png",
    "andriod-logo.png",
    "unity-logo.png",
    "apple-logo.png",
    "magento-logo.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 4) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeSliderImages = Array.from({ length: 4 }, (_, i) => {
    return sliderImages[(activeIndex + i) % sliderImages.length];
  });

  return (
    <div
      className="Section7 w-full text-white pt-[35px] pb-[70px] h-screen bg-cover bg-center bg-fixed"
      style={bgImage}
    >
      <div className="section7-container xl:w-[1170px] mx-auto px-[15px]">
        <div className="flex items-center w-full flex-col mt-[35px] mb-[60px]">
          <h3 className="text-4xl font-bold mb-[10px] text-white text-center">
            CLIENT TESTIMONIALS
          </h3>
          <div className="w-[40px] h-[3px] bg-white mb-[20px]"></div>
        </div>

        <div className="flex gap-14 text-base w-full">
          {reviewsData.map((item, index) => {
            return (
              <div className="w-[20%]" key={index}>
                <p className="italic">{item.review}</p>
                <h4 className="mt-14 font-bold">{item.name}</h4>
              </div>
            );
          })}
        </div>

        <div className="w-full h-[1px] bg-white opacity-20 mt-[50px] mb-16"></div>

        <div className="w-full flex">
          <div className="w-[20%]">
            <div className="text-lg opacity-60 relative after:content-[''] after:absolute after:left-0 after:top-[35px] after:border-solid after:border-[2px] after:w-1/3 after:border-white after:bg-white">
              TECHNOLOGIES
            </div>
          </div>

          <div className="w-[80%] flex overflow-hidden">
            {activeSliderImages.map((url, index) => {
              return (
                <div
                  className="w-[25%] animate-slide-up"
                  key={`${url}-${activeIndex}`} 
                >
                  <a href="#">
                    <img className="w-full h-auto object-contain" src={url}/>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
