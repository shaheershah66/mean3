export default function Section5() {
  const bgImageMacbook = {
    backgroundImage: "url('assets/macbook-web-development.png')",
  };
  const bgImageIphone = {
    backgroundImage: "url('assets/iphone-web-development.png')",
  };

  return (
    <div className="w-full Section5 pb-[35px] lg:pt-[35px] bg-[#F5F5F5] overflow-hidden">
      <div className="flex flex-col w-full md:flex-row section5-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="w-full md:w-1/2 md:px-[15px]">
          <div className="w-full lg:mt-[100px]">
            <h1 className="text-[24px] md:text-[34px] font-bold text-[#DA2128] my-[0.67em] leading-[40px]">
              Dynamic Websites
            </h1>
            <p className="text-base mb-[20px] text-[#535353] font-open">
              Your website is essentially the center of your company`s online
              presence and a key tool through which you market your business
              around the world.
              <br />
              We put in a lot of effort and thoughts to create an aesthetically
              appealing, highly functional and interactive website for you, by
              understanding your potential customers to help you grow
              significantly.
              <br />
              We extend our services to all kinds of businesses and individuals,
              including:
            </p>
            <ul className="text-base mb-[10px] font-open text-[#535353] list-disc pl-[40px]">
              <li>E-commerce</li>
              <li>Entertainment</li>
              <li>Company Portfolio</li>
              <li>MarketPlaces</li>
              <li>Blogging</li>
              <li>Insurance</li>
              <li>Custom Portals</li>
              <li>SAAS Products</li>
              <li>Travel</li>
              <li>Education, and beyond</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-[15px]">
          <div className="relative w-full" style={{ direction: "ltr" }}>
            <div
              className="w-full pb-[57.77%] md:pb-0 md:w-[720px] md:h-[416px] lg:w-[850px] lg:h-[490px] xl:w-[1170px] xl:h-[670px] bg-no-repeat relative bg-contain"
              style={bgImageMacbook}
            >
              <img
                className="absolute left-[14%] top-[7.6%] w-[calc(100%-27.9%)] h-[calc(100%-20.9%)] object-cover rounded-[3px] bg-no-repeat"
                src="assets/macbook-inner2-web-development.png"
                alt="Macbook Inner Image"
              ></img>
            </div>
            <div
              className="absolute bg-contain bg-no-repeat hidden md:block md:left-[40px] lg:left-[70px] md:h-[274px] md:w-[167px] lg:h-[324px] lg:w-[197px] xl:h-[403px] xl:w-[245px] -bottom-[20px]"
              style={bgImageIphone}
            >
              <img
                className="absolute left-[15.9%] top-[11.6%] w-[calc(100%-30.7%)] h-[calc(100%-25.4%)] object-cover rounded-[3px] bg-no-repeat"
                src="assets/iphone-inner2-web-development.png"
                alt="Iphone Inner Image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
