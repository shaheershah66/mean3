import { useEffect, useState } from "react";
import shopifyBrandsJson from "../../data/shopifyBrands.json";
import { useShopifySlider } from "../../context/ShopifySliderContext";
import "./index.css";

export default function ShopifySlider() {
  const shopifyBrandsData = shopifyBrandsJson;
  const { isOpenSlider, setIsOpenSlider } = useShopifySlider();
  const [currentIndex, setCurrentIndex] = useState(isOpenSlider.index);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shopifyBrandsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + shopifyBrandsData.length) % shopifyBrandsData.length
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

      <div className={`${isOpenSlider.show ? "visible" : "invisible"} fixed top-0 left-0 z-50 w-full h-full transition-all duration-[0.2s] delay-75 ease-out`}>
        <div className="absolute px-[8px] left-0 top-0 text-center w-full h-full before:content-[''] before:inline-block before:h-full before:align-middle">
          <div className="relative inline-block w-auto h-[auto]">
            <span
              onClick={() => setIsOpenSlider({show: false, index: 0})}
              className="text-white opacity-65 absolute text-[25px] right-[4px] font-bold -top-[32px] hover:opacity-100 cursor-pointer font-arial"
            >
              x
            </span>
            <img
              onClick={goToNext}
              className="inline-block object-cover w-auto h-auto cursor-pointer"
              src={shopifyBrandsData[currentIndex]?.imgUrl}
              alt={`Brand Logo ${currentIndex + 1}`}
            />
            <div className="block text-[#ccc] text-[12px] absolute -bottom-[25px] font-open right-0">{`${currentIndex + 1} of ${shopifyBrandsData.length }`}</div>
          </div>
          <button onClick={goToPrevious} className="btn btn-left"></button>
          <button onClick={goToNext} className="btn btn-right"></button>
        </div>
      </div>
    </>
  );
}
