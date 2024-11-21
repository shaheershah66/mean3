import { Link } from "react-router-dom";
import CmsSlider from "../../componets/CmsSlider";
import magentoBrandsJson from "../../data/magentoBrands.json";

export default function Section6() {
  const magentoBrandsData = magentoBrandsJson;
  const settings = {
    touchMove: false,
    arrows: false,
    dots: true, // Enable dots for navigation
    infinite: false, // Infinite scroll for the slider
    slidesToShow: 3, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Autoplay disabled
    cssEase: "linear", // Use linear transition for sliding
  };

  return (
    <div className="w-full Section6">
      <div className="w-full section6-container">
        <div className="w-[90%] md:w-[61%] mx-auto pb-[1%] text-center">
          <h1 className="md:text-[34px] text-[24px] leading-[32px] font-bold md:leading-[41px] my-[0.67em]">
            Brands That Choose Us
          </h1>
          <p className="leading-[20px] text-base text-[#373737] w-full md:w-[75%] mx-auto font-open">
            Our experience over the past 7 years encompasses a portfolio of 500+
            website projects.
          </p>
        </div>
        <div className="w-full pt-[35px] pb-[60px] px-0 md:px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <CmsSlider settings={settings} slides={magentoBrandsData} />
        </div>
        <div className="text-center">
          <Link
            to="/clients"
            className="inline-block cursor-pointer rounded-[3px] py-[10px] px-[15px] bg-[#DA2128] text-white border-none font-bold"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
