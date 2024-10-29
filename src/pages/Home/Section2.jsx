import React from "react";

export default function Section2() {
  return (
    <div className="Section2 w-full pb-[35px]">
      <div className="section2-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="flex w-full relative bg-[#CD2122] text-white p-[35px] items-center -mt-10 rounded-md after:absolute after:block after:rounded after:bg-[#CD2122] after:skew-y-[1.5deg] after:-z-10 after:w-full after:h-full after:left-0 after:top-[-6px] before:content-[''] before:absolute before:block before:rounded before:right-[5%] before:top-[-20px] before:-z-10 before:bg-black/20 before:w-[90%] before:h-[30%] before:-skew-y-2">
          <div className="flex flex-col w-[75%]">
            <h4 className="my-[10px] text-2xl">
              We provide all kinds of <strong>IT Solutions</strong> by
              constantly pushing ourselves and our approach to the edge, and
              combining all our creative backgrounds to create an experience
              tailored to your specific needs. We believe in doing what we love,
              and we do love what we do.
            </h4>
            <h5 className="my-[10px] text-[#E17979]">
              E-Commerce Solution, Staff Augmentation, Web Development, Graphic
              Designing, Mobile App Development & Social Media Marketing.
            </h5>
          </div>
          <div className="w-[25%] flex justify-center items-center">
            <a
              href="#"
              className="py-[7px] px-[20px] text-white bg-transparent border-2 border-white border-solid font-bold"
            >
              Join Our NewsLetter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
