import magentoSolutionsJson from "../../data/magentoSolutions.json";

export default function Section4() {
  const magentoSolutionsData = magentoSolutionsJson;
  const bgImage = {
    backgroundImage: "url('assets/magento-rectangle.png')",
  };
  return (
    <div className="w-full Section4 p-[2%] my-[40px] md:my-0 md:mb-[5%]  text-center" style={bgImage}>
      <div className="w-full section4-container">
        <h1 className="text-[24px] leading-[32px] md:text-[34px] font-bold md:leading-[41px] text-white my-[0.67em]">
          Magento Solutions That We Offer
        </h1>
        <div className="md:pt-5 w-[90%] flex flex-wrap mb-[25px] justify-center mx-auto">
          {magentoSolutionsData.map(({title}) => {
            return (
              <div key={title} className="bg-white rounded-[10px] flex justify-center items-center w-full xs:w-[45%] md:w-[20%] m-[5px] py-[15px] px-5">
                <h1 className="text-base leading-[20px] font-bold capitalize my-[0.67em]">
                  {title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="w-full">
            <a className="w-[200px] leading-[1.15] cursor-pointer inline-block bg-white rounded-[3px] border-none p-[10px_30px] text-[#DA2128] font-[600]">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}
