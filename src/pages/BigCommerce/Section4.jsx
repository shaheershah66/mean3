import bigcommerceQualitiesJson from "../../data/bigcommerceQualities.json";

export default function Section4() {
  const bigcommerceQualitiesData = bigcommerceQualitiesJson;

  return (
    <div className="w-full Section4">
      <div className="w-full section4-container">
        <div className="w-[90%] my-[24px] md:my-0 md:w-[61%] text-center mx-auto">
          <h1 className="text-[24px] leading-[32px] md:text-[34px] font-bold md:leading-[41px] my-[0.67em]">
            Why Choose{" "}
            <span className="text-[#DA2128]">
              Mean3 for BigCommerce Development
            </span>
          </h1>
        </div>
        <div className="boxes p-[2%_0%_1%_0%] flex justify-center flex-wrap w-[85%] xs:w-full md:w-[85%] mx-auto gap-x-[2%] gap-y-[19px] md:gap-y-[30px]">
          {bigcommerceQualitiesData.map((item, index) => {
            return (
              <div
                className={`${
                  (index + 1) % 2 === 0
                    ? "bg-[#f5f5f5] text-[#373737]"
                    : "bg-[#E42E35] text-white"
                } md:p-[2%] md:w-[30%] w-full p-[10%] xs:w-[40%] xs:p-[4%]`}
              >
                <h1 className="md:text-[25px] text-[20px] leading-[24px] font-bold md:leading-[30px] pb-[4%] capitalize my-[0.67em]">
                  {item.title}
                </h1>
                <p className="mb-5 text-xs md:text-sm leading-[22px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="line mx-auto my-[55px] md:my-[4%] w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
