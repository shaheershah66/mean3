import CustomSlider from "../../componets/CustomSlider";
import webdevelopmentSliderJson from "../../data/webdevelopmentSlider.json"

export default function Section9() {
  const webdevelopmentSliderData = webdevelopmentSliderJson;
  return (
    <div
      className="w-full section9 bg-[#db4437]"
      style={{
        backgroundColor: "linear-gradient(180deg,transparent 0,rgba(0,0,0,.5))",
      }}
    >
      <div className="w-full h-full section9-container">
        <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] pt-[35px] xl:pt-0">
          <h1 className="text-[24px] md:text-[34px] font-bold text-white leading-[40px] text-center py-[0.67em]">
            Our Portfolio
          </h1>
        </div>
        <div className="relative w-full h-full overflow-hidden pt-[25px]">
          <CustomSlider slides={webdevelopmentSliderData} />
        </div>
      </div>
    </div>
  );
}
