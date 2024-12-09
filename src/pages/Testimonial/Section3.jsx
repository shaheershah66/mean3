import React from "react";
import testimonialsJson from "../../data/testimonials.json";
import { useIFrame } from "../../context/IFrameContext";

export default function Section3() {
  const testimonialsData = testimonialsJson;
  const {setIFrame} = useIFrame();

  return (
    <div className="w-full Section3 bg-[#F5F5F5]">
      <div className="w-full mx-auto px-[15px] text-center section3-container md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        {testimonialsData.map((item, index) => {
          return (
            <div key={item.videoImg + item.videoUrl} className={`${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col flex w-full video-text-container py-[35px]`}>
              <div className="w-full md:w-[60%] mx-0 md:mx-[15px] relative video-container self-start before:content-[''] before:absolute before:block before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(23,23,25,.5)]">
                <img
                  className="block object-cover w-full object-center-center"
                  src={item.videoImg}
                  alt="Brand Videos"
                ></img>
                <div className="absolute w-full -translate-y-1/2 play-btn-container top-1/2">
                  <div
                    onClick={() => setIFrame(item.videoUrl)}
                    className="block w-[80px] relative h-[80px] cursor-pointer text-lg border-[2px] border-solid border-white mx-auto rounded-[50%]"
                  >
                    <svg
                      className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      fill="white"
                      viewBox="0 0 16 16"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-container relative mx-0 md:mx-[15px] w-full md:w-[40%]">
                <div className="img-container mb-[30px]">
                  <a className="inline-block w-full h-auto" href={item.imgUrl}>
                    <img
                      className="inline-block object-contain mx-auto w-auto h-[200px]"
                      src={item.img}
                      alt="Brand Logos"
                    ></img>
                  </a>
                </div>
                <div className="h-[1px] w-full bg-black mb-[30px]"></div>
                <div className="w-full">
                  <p className="text-left text-[13px] font-open text-[#535353]">
                    {item.imgText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
