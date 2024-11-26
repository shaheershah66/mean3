export default function Section3() {
  const bgImageMacbook = {
    backgroundImage: "url('assets/macbook-web-development.png')",
  };
  const bgImageIphone = {
    backgroundImage: "url('assets/iphone-web-development.png')",
  };

  return (
    <div className="w-full Section3 py-[35px] bg-[#F5F5F5]">
      <div className="flex flex-col w-full md:flex-row section3-container">
        <div className="w-full md:w-1/2 px-[15px]">
          <div className="relative w-full" style={{ direction: "rtl" }}>
            <div
              className="w-full pb-[57.77%] md:pb-0 md:w-[720px] md:h-[416px] lg:w-[850px] lg:h-[490px] xl:w-[1170px] xl:h-[670px] bg-no-repeat relative bg-contain"
              style={bgImageMacbook}
            >
              <img
                className="absolute left-[14%] top-[7.6%] w-[calc(100%-27.9%)] h-[calc(100%-20.9%)] object-cover rounded-[3px] bg-no-repeat"
                src="assets/macbook-inner-web-development.png"
                alt="Macbook Inner Image"
              ></img>
            </div>
            <div
              className="absolute bg-contain bg-no-repeat hidden md:block md:right-[40px] lg:right-[70px] md:h-[274px] md:w-[167px] lg:h-[324px] lg:w-[197px] xl:h-[403px] xl:w-[245px] -bottom-[20px]"
              style={bgImageIphone}
            >
              <img
                className="absolute left-[15.9%] top-[11.6%] w-[calc(100%-30.7%)] h-[calc(100%-25.4%)] object-cover rounded-[3px] bg-no-repeat"
                src="assets/iphone-inner-web-development.png"
                alt="Iphone Inner Image"
              ></img>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-[15px]">
          <div className="w-full lg:mt-[150px]">
            <h1 className="text-[24px] md:text-[34px] font-bold text-[#DA2128] my-[0.67em] leading-[40px]">
              E-Commerce Development
            </h1>
            <p className="text-base mb-[20px] text-[#535353] font-open">
              Millions of businesses today are selling their products online
              through E-commerce websites, to maximize their reach in the
              market. Our team understands the psyche of your clients, and
              creates websites that resonate with their requirements. Not only
              that, we also ensure our services are cost-effective, 100% bug
              free and under strict testing at all times.
              <br />
              Our existing clients have grown their business up to 150% with the
              help of our IT support and responsive websites.
              <br />
              Discuss your project with our team? Maybe you're the next AMAZON ,
              EBAY OR DARAZ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
