export default function Section4() {
  return (
    <div className="w-full Section4 pb-[35px] md:pt-[35px] -mb-[20px] bg-[#F5F5F5]">
      <div className="w-full section4-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="w-full">
          <h1 className="text-[#535353] pt-5 pb-[10px] text-[24px] leading-[30px] md:text-[34px] md:leading-[40px]">
            <strong>Technologies We Use</strong>
          </h1>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-x-[15px]">
          <div className="w-full md:w-1/4 my-[30px]">
            <img className="w-[200px] mx-auto block relative animate-float" src="assets/shopifyplus-web-development.png" alt="Tech Logo"></img>
          </div>

          <div className="w-full md:w-1/4 my-[30px]">
            <img className="w-[200px] mx-auto block relative animate-float" src="assets/woo-web-development.png" alt="Tech Logo"></img>
          </div>

          <div className="w-full md:w-1/4 my-[30px]">
            <img className="w-[200px] mx-auto block relative animate-float" src="assets/magento-web-development.png" alt="Tech Logo"></img>
          </div>

          <div className="w-full md:w-1/4 my-[30px]">
            <img className="w-[200px] mx-auto block relative animate-float" src="assets/big-web-development.png" alt="Tech Logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
