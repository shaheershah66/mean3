export default function Section7() {
  const bgImage = {
    backgroundImage: "url('assets/shopify-banner2.webp')",
  };

  return (
    <div
      className="w-full Section7 mt-[20px] md:mt-0 py-5 p-0 md:p-[7.5%_0px_5.5%_0px] bg-cover"
      style={bgImage}
    >
      <div className="flex flex-wrap items-center w-full text-center justify-evenly section7-container">
        <h1 className="text-white text-[22px] md:text-[38px] leading-[33px] md:leading-[46px] my-[0.67em] w-full md:w-[610px]">
          We Create High Performance ECommerce Sites That Convert
        </h1>
        <div className="p-[30px_0px_0px_20px] md:p-0">
          <img className="block cover w-[65%] md:h-auto" src="assets/expert-shopify.png"></img>
          <img className="block cover w-[45.5%] md:h-auto ml-[120px] md:ml-[203px]" src="assets/expert-shopify2.png"></img>
        </div>
      </div>
    </div>
  );
}
