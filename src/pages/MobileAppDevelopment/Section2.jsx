import mobileAppQualitiesJson from "../../data/mobileAppQualities.json";

export default function Section2() {
  const mobileAppQualitiesData = mobileAppQualitiesJson;
  return (
    <div className="w-full Section2 py-[35px] bg-[#F5F5F5]">
      <div className="section2-container w-full px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <h1 className="text-[24px] md:text-[34px] font-bold leading-[30px] md:leading-[40px] text-center my-[0.67em] text-[#cd2122]">
          Why Choose Us?
        </h1>
        <div className="flex flex-col boxes md:flex-row">
          {mobileAppQualitiesData.map((item) => {
            return (
              <div className="w-full md:w-1/4 box md:px-[15px] font-open">
                <h4 className="text-[13px] md:text-[14px] font-bold leading-[28px] my-[10px] text-[#cd2122] uppercase">
                  <img src={item.imgUrl} alt={item.title} className="mr-[10px] inline-block"></img>
                  <span className="inline-block md:block xl:inline-block">{item.title}</span>
                </h4>
                <p className="mb-[20px] text-[#535353] text-[13px]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
