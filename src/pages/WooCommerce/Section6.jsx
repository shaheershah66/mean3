import woocommerceBrandsJson from "../../data/woocommerceBrands.json";
import { Link } from "react-router-dom";
import CmsSlider from "../../componets/CmsSlider";

export default function Section6() {
  const woocommerceBrandsData = woocommerceBrandsJson;
  const settings = {
    touchMove: false,
    arrows: false,
    dots: true, // Enable dots for navigation
    infinite: false, // Infinite scroll for the slider
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Autoplay disabled
    cssEase: "linear", // Use linear transition for sliding
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          touchMove: true,
          infinite: true, // Infinite scroll for the slider
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchMove: true,
          infinite: true, // Infinite scroll for the slider
        },
      },
    ],
  };

  return (
    <div className="w-full Section6">
      <div className="w-full section6-container">
        <div className="w-[90%] md:w-[61%] pb-[1%] mx-auto text-center">
          <h1 className="leading-[29px] md:leading-[41px] text-[24px] md:text-[34px] text-[#151515] font-bold my-[0.67em]">
            Trusted Over 150 Leading Brands
          </h1>
          <p className="leading-[20px] text-[#373737] text-base font-open w-full">
            Leading brands turn to Mean3 as the go-to digital agency for their
            branding, web development, and marketing needs..
          </p>
        </div>

        <div className="w-full pt-[35px] pb-[60px] px-0 md:px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <CmsSlider settings={settings} slides={woocommerceBrandsData} />
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