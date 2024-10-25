import { useState } from "react";
import valuesJson from "../../data/values.json";

export default function Section5() {
  const [valuesData, setValuesData] = useState(valuesJson);
  console.log(valuesData);

  return (
    <div className="Section5 w-full">
      <div className="section5-container w-full">
        <div className="w-[55%] mx-auto text-center mb-[1.5%]">
          <h1 className="text-[34px] font-bold mb-2">Our Values</h1>
          <p>
            Our Leadership Values go beyond being motivational wall art. Every
            day, our debates and decisions are guided by the 11 principles.
          </p>
        </div>

        <div className="w-[90%] flex mx-auto gap-5 justify-center flex-wrap">
          {valuesData.map((item, index) => {
            return (
              <div className="box-container flex justify-start items-center flex-col py-[4%] px-[1.5%] w-[20%] shadow-box">
                <img
                  className="inline-block mb-4"
                  src={item.imageUrl}
                  height={61}
                  width={61}
                ></img>
                <div className="text-container text-center">
                  <h3 className="text-base font-bold uppercase">
                    {item.primaryTitle}
                  </h3>
                  <h1 className="text-[23px] font-bold text-[#DA2128] mb-[1%] uppercase">
                    {item.secondaryTitle}
                  </h1>
                  <p className="w-[80%] mb-[3%] mx-auto">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="line my-[5%] mx-auto w-[61%] shadow-line h-2 pt-[0.5%] rounded-full"></div>
    </div>
  );
}
