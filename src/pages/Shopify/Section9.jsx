import shopifyBrandsJson from "../../data/shopifyBrands.json";

export default function Section9() {
  const shopifyBrandsData = shopifyBrandsJson;
  return (
    <div className="w-full Section9 h-[65vh]">
      <div className="w-full section9-container">
        <div className="w-[61%] pb-[1%] mx-auto text-center">
          <h1 className="leading-[41px] text-[34px] text-[#151515] font-bold my-[0.67em]">
            Brands That Choose Us
          </h1>
          <p className="leading-[20px] text-[#373737] text-base font-open w-[71%] mx-auto">
            Our experience over the past 7 years encompasses a portfolio of 500+
            website projects.
          </p>
        </div>
        <div className="w-full flex py-[35px] px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          {shopifyBrandsData.map(({ imgUrl }) => {
            return (
              <div key={imgUrl} className="w-[20%] px-5 cursor-pointer">
                <img className="inline-block object-cover w-full" src={imgUrl} alt="Brand Logos"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
