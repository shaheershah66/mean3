import { useEffect, useState } from "react";
import shopifyBrandsJson from "../../data/shopifyBrands.json";
import shopifyPlusBrandsJson from "../../data/shopifyPlusBrands.json";
import magentoBrandsJson from "../../data/magentoBrands.json";
import bigcommerceBrandsJson from "../../data/bigcommerceBrands.json";
import woocommerceBrandsJson from "../../data/woocommerceBrands.json";
import "./index.css";
import { useLocation } from "react-router-dom";
import { useCmsSlider } from "../../context/CmsSliderContext";

export default function CmsSliderOverlay() {
  const shopifyBrandsData = shopifyBrandsJson;
  const shopifyPlusBrandsData = shopifyPlusBrandsJson;
  const magentoBrandsData = magentoBrandsJson;
  const bigcommerceBrandsData = bigcommerceBrandsJson;
  const woocommerceBrandsData = woocommerceBrandsJson;
  const location = useLocation();
  const brandsData =
    location.pathname === "/shopify-plus"
      ? shopifyPlusBrandsData
      : location.pathname === "/ecommerce-shopify"
      ? shopifyBrandsData
      : location.pathname === "/magento-development"
      ? magentoBrandsData
      : location.pathname === "/bigcommerce-development"
      ? bigcommerceBrandsData
      : woocommerceBrandsData;
  const { isOpenSlider, setIsOpenSlider } = useCmsSlider();
  const [currentIndex, setCurrentIndex] = useState(isOpenSlider.index);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brandsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + brandsData.length) % brandsData.length
    );
  };

  useEffect(() => {
    if (isOpenSlider.show) {
      setCurrentIndex(isOpenSlider.index);
    }
  }, [isOpenSlider.show]);

  useEffect(() => {
    document.body.style.overflow = isOpenSlider.show ? "hidden" : "";
  }, [isOpenSlider.show]);

  return (
    <>
      <div
        className={`${
          isOpenSlider.show ? "visible" : "invisible"
        } fixed top-0 left-0 z-40 w-full h-full bg-[#333] opacity-95 transition-all duration-[0.2s] ease-out delay-75`}
      ></div>

      <div
        className={`${
          isOpenSlider.show ? "visible" : "invisible"
        } fixed top-0 left-0 z-50 w-full h-full transition-all duration-[0.2s] delay-75 ease-out`}
      >
        <div className="absolute px-[8px] left-0 top-0 text-center w-full h-full before:content-[''] before:inline-block before:h-full before:align-middle">
          <div className="relative inline-block w-auto h-[auto]">
            <span
              onClick={() => setIsOpenSlider({ show: false, index: 0 })}
              className="text-white opacity-65 absolute text-[25px] right-[4px] font-bold -top-[32px] hover:opacity-100 cursor-pointer font-arial"
            >
              x
            </span>
            <img
              onClick={goToNext}
              className="inline-block object-cover w-auto h-auto cursor-pointer"
              src={brandsData[currentIndex]?.imgUrl}
              alt={`Brand Logo ${currentIndex + 1}`}
            />
            <div className="block text-[#ccc] text-[12px] absolute -bottom-[25px] font-open right-0">{`${
              currentIndex + 1
            } of ${brandsData.length}`}</div>
          </div>
          <button onClick={goToPrevious} className="btn btn-left"></button>
          <button onClick={goToNext} className="btn btn-right"></button>
        </div>
      </div>
    </>
  );
}
