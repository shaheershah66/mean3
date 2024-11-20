import shopifyBrandsJson from "../../data/shopifyBrands.json";
import shopifyPlusBrandsJson from "../../data/shopifyPlusBrands.json";
import { Link } from "react-router-dom";
import CmsSlider from "../../componets/CmsSlider";

export default function Section9({ plus }) {
  const shopifyBrandsData = shopifyBrandsJson;
  const shopifyPlusBrandsData = shopifyPlusBrandsJson;

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

  // Select the appropriate brand data based on the 'plus' prop
  const brandsData = plus ? shopifyPlusBrandsData : shopifyBrandsData;

  return (
    <div className="w-full Section9">
      <div className="w-full section9-container">
        <div className="w-[90%] md:w-[61%] pb-[1%] mx-auto text-center">
          <h1 className="leading-[29px] md:leading-[41px] text-[24px] md:text-[34px] text-[#151515] font-bold my-[0.67em]">
            Brands That Choose Us
          </h1>
          <p className="leading-[20px] text-[#373737] text-base font-open w-full md:w-[71%] mx-auto">
            Our experience over the past 7 years encompasses a portfolio of 500+
            website projects.
          </p>
        </div>

        <div className="w-full pt-[35px] pb-[60px] px-0 md:px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <CmsSlider settings={settings} slides={brandsData} />
        </div>

        <div className="text-center">
          <Link
            to="/clients"
            className="inline-block cursor-pointer rounded-[3px] py-[10px] px-[15px] bg-[#DA2128] text-white border-none font-[600]"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-full"></div>
    </div>
  );
}
