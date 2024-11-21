import bigcommerceExpertiseJson from "../../data/bigcommerceExpertise.json";

export default function Section3() {
  const bigcommerceExpertiseData = bigcommerceExpertiseJson;

  return (
    <div className="w-full Section3">
      <div className="w-full section3-container">
        <div className="text-center w-[90%] my-[24px] md:my-0 md:w-[61%] mx-auto">
          <h1 className="md:text-[34px] text-[24px] leading-[32px] md:leading-[41px] font-bold text-[#151515] my-[0.67em]">
            Our Expertise In{" "}
            <span className="text-[#DA2128]">BigCommerce Development</span>
          </h1>
        </div>
        <div className="boxes p-[2%_0%_1%_0%] flex justify-center flex-wrap w-[85%] xs:w-full md:w-[85%] mx-auto gap-x-[2%] gap-y-[19px] md:gap-y-[30px]">
          {bigcommerceExpertiseData.map((item, index) => {
            return (
              <div
                className={`${
                  (index + 1) % 2 === 0
                    ? "bg-[#f5f5f5] text-[#373737]"
                    : "bg-[#E42E35] text-white"
                } md:p-[2%] md:w-[30%] w-full p-[10%] xs:w-[40%] xs:p-[4%]`}
              >
                <h1 className="lg:text-[25px] text-[20px] leading-[24px] font-bold md:leading-[30px] pb-[4%] capitalize my-[0.67em]">
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
      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
