import wordpressQualities2Json from "../../data/wordpressQualities2.json";

export default function Section5() {
  const wordpressQualities2Data = wordpressQualities2Json;

  return (
    <div className="w-full Section5">
      <div className="w-full section5-container">
        <div className="w-[90%] md:w-[61%] text-center m-[24px_20px] md:mx-auto">
          <h1 className="text-[24px] md:text-[34px] font-bold leading-[32px] md:leading-[41px] text-[#151515] my-[0.67em]">
            Why choose{" "}
            <span className="text-[#DA2128]">Mean3 For Wordpress Development</span>
          </h1>
        </div>
        <div className="boxes p-[2%_0%_3%_0%] flex justify-center flex-wrap w-[85%] mx-auto gap-x-[2%] gap-y-[19px] md:gap-y-[30px]">
          {wordpressQualities2Data.map((item, index) => {
            return (
              <div
                className={`${
                  (index + 1) % 2 === 0
                    ? "bg-[#f5f5f5] text-[#373737]"
                    : "bg-[#E42E35] text-white"
                } p-[10%] xs:p-[3%] xl:w-[26%] w-[90%] xs:w-[46%]`}
              >
                <h1 className="md:text-[25px] text-[20px] leading-[24px] font-bold md:leading-[30px] pb-[4%] capitalize my-[0.67em]">
                  {item.title}
                </h1>
                <p className="mb-5 font-open text-xs md:text-sm leading-[22px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="line mb-[55px] mt-[1%]  md:mt-[5%] md:mb-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
