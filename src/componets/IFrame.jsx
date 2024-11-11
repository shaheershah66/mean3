import React from "react";

export default function IFrame({ iFrame, setIFrame }) {
  return (
    <>
      <div
        className={`${
          iFrame ? "visible" : "invisible"
        } absolute top-0 left-0 z-40 w-full h-full bg-[#333] opacity-95 transition-opacity duration-1000 ease-out`}
      ></div>

      <div
        className={`${
          iFrame ? "block" : "hidden"
        } fixed top-0 left-0 flex justify-center items-center z-50 w-full h-full py-[40px] px-2`}
      >
        <div
          className={`w-full relative h-auto max-w-[900px] aspect-video bg-black`}
        >
          {/* Cross button */}
          <svg
            onClick={() => setIFrame("")}
            fill="none"
            viewBox="0 0 15 15"
            height="20px"
            width="20px"
            className="absolute right-0 cursor-pointer -top-7"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
              clipRule="evenodd"
            />
          </svg>
          {/* cross button ends here */}
          <iframe
            className="w-full h-full"
            src={iFrame}
            title="Testimonial Video"
            allowFullScreen={true}
          />
        </div>
      </div>
    </>
  );
}
