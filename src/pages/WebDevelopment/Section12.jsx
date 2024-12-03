import { useState, useEffect } from "react";

export default function Section12() {
  const sliderImages = [
    "assets/html-web-development.png",
    "assets/css-web-development.png",
    "assets/wordpress-slider-web-development.png",
    "assets/magento-slider-web-development.png",
    "assets/shopify-slider-web-development.png",
    "assets/opencart-web-development.png",
    "assets/nop-web-development.png",
    "assets/druplicon-web-development.png",
    "assets/angular-slider-web-development.png"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);

  useEffect(() => {
    const updateVisibleImages = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
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
      setActiveIndex(
        (prevIndex) => (prevIndex + visibleImages) % sliderImages.length
      );
    }, 3000);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
      clearInterval(interval);
    };
  }, [visibleImages]);

  const activeSliderImages = Array.from({ length: visibleImages }, (_, i) => {
    return sliderImages[(activeIndex + i) % sliderImages.length];
  });

  return (
    <div className="w-full Section12 bg-[#050a05] text-[white] pb-[35px]">
      <div className="w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="w-full opacity-20 h-[1px] bg-white mb-[70px] "></div>
      </div>
      <div className="section12-container flex md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="w-full mb-[30px] lg:w-[22%] lg:mb-0">
            <div className="text-lg font-open leading-[1.2] opacity-60 relative after:content-[''] after:inline-block after:absolute after:h-[3px] after:w-[50px] after:bg-white after:left-0 after:-bottom-[15px]">
              TECHNOLOGIES WE USE
            </div>
          </div>

          <div className="w-full lg:w-[78%] flex overflow-hidden">
            {activeSliderImages.map((url) => (
              <div
                className="flex justify-center w-full min-[410px]:w-1/2 xl:w-1/3 animate-slide-up"
                key={`${url}-${activeIndex}`}
              >
                <img
                  className="inline-block object-contain w-auto h-[60px] mx-auto text-black"
                  src={url}
                  alt="Tech Logos"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
