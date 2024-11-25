import woocommerceBenefitsJson from "../../data/woocommerceBenefits.json";

export default function Section4() {
  const woocommerceBenefitsData = woocommerceBenefitsJson;
  const bgImage = {
    backgroundImage: "url('assets/magento-rectangle.png')",
  };
  return (
    <div
      className="w-full Section4 p-[2%] my-[66px] md:my-0 md:mt-[4%] md:mb-[5%]"
      style={bgImage}
    >
      <div className="w-full text-center text-white section4-container">
        <h1 className="text-[24px] md:text-[34px] font-bold leading-[41px] my-[0.67em]">
          WooCommerce Online Store Benefits
        </h1>
        <div className="md:pt-5 w-[80%] mx-auto mb-[25px] block md:flex md:flex-row">
          {woocommerceBenefitsData.map((item) => {
            return (
              <div key={item.title} className="w-full my-[20px] p-[5px] md:my-0 md:w-[33.33%] md:p-[15px_20px] md:m-[10px_8px] text-center">
                <img
                  className="inline-block object-cover mx-auto"
                  src={item.imgUrl}
                  alt="Benefits Logos"
                ></img>
                <h1 className="text-[24px] capitalize md:text-base leading-[26px] font-bold my-[0.67em]">
                  {item.title}
                </h1>
                <p className="mb-5 font-open">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
