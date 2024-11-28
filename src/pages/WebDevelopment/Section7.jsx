export default function Section7() {
  const bgImageMacbook = {
    backgroundImage: "url('assets/macbook-web-development.png')",
  };
  const bgImageIphone = {
    backgroundImage: "url('assets/iphone-web-development.png')",
  };

  return (
    <div className="w-full Sectiont pb-[35px] md:pt-[35px] bg-[#F5F5F5]">
      <div className="flex flex-col w-full md:flex-row section7-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] min-h-[600px] self-center">
        <div className="w-full md:w-1/2 md:px-[15px]">
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

        <div className="w-full md:w-1/2 md:px-[15px]">
          <div className="w-full lg:mt-[150px]">
            <h1 className="text-[24px] md:text-[34px] font-bold text-[#DA2128] my-[0.67em] leading-[40px]">
              Custom Web Design Services
            </h1>
            <p className="text-base mb-[20px] text-[#535353] font-open">
              Our experience and highly skilled workforce together has enabled
              us to provide a wide array of web designs for all kinds of
              enterprises. The look and feel of a particular website plays a
              significant role in determining for how long someone stays on it.
              <br />
              We at Mean3 use latest technologies and new strategies to get your
              message across clearly, and with an impact. We create and promote
              websites in a way that it reaches more people and converts your
              visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
