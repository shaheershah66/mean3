import { useState, useEffect } from "react";
import "./index.css";

export default function Section2() {
  const sliderImages = [
    "assets/andriod-mobile-app.png",
    "assets/apple-mobile-app.png",
    "assets/unity-mobile-app.png",
    "assets/php-mobile-app.png",
  ];
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(2);
  const imageTransform = isMobile ? `translateY(${-scrollY * 0.1}px)` : "none";
  const activeSliderImages = Array.from({ length: visibleImages }, (_, i) => {
    return sliderImages[(activeIndex + i) % sliderImages.length];
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Update the screen size on resize
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    const updateVisibleImages = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleImages(2);
      } else if (width >= 768) {
        setVisibleImages(1);
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

  return (
    <div className="w-full Section2 py-[35px] bg-[#F5F5F5]">
      <div className="section2-container w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        <h1 className="text-[24px] md:text-[34px] font-bold text-[#da2128] leading-[40px] text-center my-[0.67em]">
          Game Design And Development
        </h1>
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-full md:w-[58.33333%] text-[#535353] font-open px-[15px]">
            <h4 className="text-[18px] leading-[28px] my-[10px]">
              Mean3 offers a range of cross platform gaming solutions for
              Android, IOS & Desktop. We offer complete solutions for those who
              want to hire Game Development companies. So what are you waiting
              for? Together, your creative ideas and our expertise can create
              forth exceptional gaming.
            </h4>
            <ul className="list-disc pl-[40px] md:mb-[55px] xl:mb-0">
              <li className="text-[13px]">
                <h4 className="text-[18px] leading-[28px] my-[10px]">
                  Android Games
                </h4>
              </li>
              <li className="text-[13px]">
                <h4 className="text-[18px] leading-[28px] my-[10px]">
                  IOS Games
                </h4>
              </li>
              <li className="text-[13px]">
                <h4 className="text-[18px] leading-[28px] my-[10px]">
                  Desktop Games
                </h4>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[41.66666667%] px-[15px]">
            <div
              className="w-full image-box mb-[30px] rounded-[2px] relative"
              style={{
                transform: imageTransform,
              }}
            >
              <div className="image-box-wrapper">
                <img
                  className="block rounded-[14px]"
                  src="assets/floating-image-game-development.jpg"
                  alt="Floating Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] px-[15px] flex flex-col lg:flex-row">
          <div className="w-full mb-[30px] lg:mb-0 lg:w-[22%] text-[#181818] text-[18px] relative opacity-60 leading-[1.2] font-open after:bg-[#181818] after:content-[''] after:w-[50px] after:h-[3px] after:absolute after:left-0 after:-bottom-[15px]">
            <strong>Technologies We Use</strong>
          </div>
          <div className="w-full lg:w-[78%] flex overflow-hidden">
            {activeSliderImages.map((url) => (
              <div
                className="flex justify-center w-full min-[410px]:w-1/2 md:w-full xl:w-1/2 animate-slide-up"
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
