export default function Section2() {
  return (
    <div className="w-full Section2">
      <div className="flex flex-col items-center w-full md:flex-row section2-container justify-evenly px-5 mb-[7%] mt-[3.2%] md:my-0 md:p-[5%_3%_1%_3%]">
        <div className="w-full md:w-[36%]">
          <h1 className="text-[24px] leading-[32px] md:text-[34px] font-bold md:leading-[41px] pb-[2%] text-[#DA2128] my-[0.67em]">
            We Help Companies Unlock Big Capabilities Of{" "}
            <img
              className="inline-block object-cover w-[30%] md:w-1/4"
              src="assets/bigcommerce-logo.png"
              alt="Bigcommerce Logo"
            ></img>
          </h1>
          <p className="text-base leading-[20px] text-[#373737] pb-[1%] mb-5 font-open">
            Leverage Mean3’s 7+ years of eCommerce development expertise to get
            bigger results with big capabilities of the BigCommerce Open SaaS
            ecosystem. We specialize in building visually appealing storefronts
            and robust back-office solutions to maximize the performance of your
            online retail operations.
          </p>
        </div>
        <div>
          <img
            className="block w-[80%] xs:w-[60%] md:w-auto mx-auto"
            src="assets/bigcommerce-shop.png"
            alt="Shop Logo"
          ></img>
        </div>
      </div>
      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
