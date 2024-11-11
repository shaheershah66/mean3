import { useState } from "react";
import testimonials2Json from "../../data/testimonials2.json";

export default function Section4() {
  const testimonials2Data = testimonials2Json;
  const [textOpen, setTextOpen] = useState(new Array(testimonials2Data.length).fill(false));

  const handleTextOpen = (index) => {
    setTextOpen((prevTextOpen) => {
        const newTextOpen = [...prevTextOpen];
        newTextOpen[index] = !newTextOpen[index];
        return newTextOpen;
      });
  };
  return (
    <div className="w-full Section4 bg-[#F5F5F5] pb-32">
      <div className="w-full flex flex-wrap mx-auto px-[15px] section4-container md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        {testimonials2Data.map((item, index) => {
          const text2 = item.hasOwnProperty("text2");
          const isTextOpen = textOpen[index];
          return (
            <div key={item.name} className="flex font-sans text-[#535353] flex-col items-center w-full lg:w-1/3 md:px-[15px]">
              <a
                href={item.imgUrl}
                className="block mb-5 img-container"
              >
                <img src={item.img} alt="Brand Logos"></img>
              </a>
              <p className="text-[13px] text-justify mb-5 w-full">
                {item.text}
                {
                    text2 ? 
                    <>
                        <span className={`${isTextOpen ? "hidden" : "inline"}`}>...</span> 
                        <span className={`${isTextOpen ? "inline" : "hidden"}`}>
                        {" "}
                        {item.text2}
                        </span>
                    </>
                    : 
                    ""
                }
                
              </p>
              {
                text2 ?
                <button
                onClick={() => handleTextOpen(index)}
                className="self-start inline-block px-[6px] underline text-[13px]"
                >{`${isTextOpen ? "Read Less" : "Read More"}`}</button>
                :
                ""
              }
              <p className="self-start mb-5 font-bold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
