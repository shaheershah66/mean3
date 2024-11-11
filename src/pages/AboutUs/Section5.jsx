import valuesJson from "../../data/values.json";

export default function Section5() {
  const valuesData = valuesJson;

  return (
    <div className="w-full Section5">
      <div className="w-full section5-container">
        <div className="w-[85%] md:w-[55%] mx-auto text-center mb-[1.5%]">
          <h1 className="text-[26px] md:text-[34px] font-bold mb-5 md:mb-2">Our Values</h1>
          <p className="mb-5 text-xs md:text-sm md:mb-0 font-open text-[#373737]">
            Our Leadership Values go beyond being motivational wall art. Every
            day, our debates and decisions are guided by the 11 principles.
          </p>
        </div>

        <div className="w-full xs:w-[90%] flex mx-auto gap-5 justify-center flex-wrap font-open">
          {valuesData.map((item, index) => {
            return (
              <div className="box-container flex justify-start items-center flex-col py-[4%] px-[1.5%] w-[85%] xs:w-[40%] md:w-[31.33%] xl:w-[20%] shadow-[0px_0px_25px_0px_#0000001A]">
                <img
                  className="inline-block mb-4 leading-tight"
                  src={item.imageUrl}
                  height={61}
                  width={61}
                  alt="Values Logos"
                ></img>
                <div className="text-center text-container">
                  <h3 className="text-base font-bold uppercase">
                    {item.primaryTitle}
                  </h3>
                  <h1 className="text-lg md:text-[23px] font-mont font-bold text-[#DA2128] mb-[1%] uppercase">
                    {item.secondaryTitle}
                  </h1>
                  <p className=" text-xs md:text-sm w-[80%] mb-[3%] mx-auto text-[#373737]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="line my-[55px] md:my-[5%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 pt-[0.5%] rounded-full"></div>
    </div>
  );
}
