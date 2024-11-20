export default function Section3() {
  return (
    <div className="w-full Section3 mb-[4%] md:mb-0 px-5 md:px-0 md:pt-[9%] md:pb-[2%]">
      <div className="flex flex-col items-center w-full md:flex-row section3-container justify-evenly">
        <div className="md:w-[60%] md:pl-[5%] xl:pl-0 xl:w-[36%] mb-5 md:mb-0">
          <h1 className="text-[24px] md:text-[34px] font-bold leading-[32px] md:leading-[41px] my-[0.67em] pb-[1%] text-[#DA2128]">
            Why Choose{" "}
            <img
              className="inline-block w-[29%]"
              src="assets/magento-logo2.png"
              alt="Magento Logo"
            ></img>
          </h1>
          <p className="leading-[20px] pb-[1%] text-[#373737] text-base font-open">
            Magento is a basis for innovation, not merely a platform. Magento
            provides limitless opportunities for building attractive online
            stores thanks to its powerful features, flexibility, and
            scalability. Whether you're a startup or an established company,
            Magento gives you the tools to connect with clients around the world
            and achieve unrivaled growth.
          </p>
        </div>
        <div className="w-full h-auto md:w-auto">
          <img className="inline-block object-cover w-full h-auto md:w-auto" alt="Webite Images" src="assets/magento-websites.png"></img>
        </div>
      </div>
    </div>
  );
}
