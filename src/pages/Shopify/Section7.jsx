export default function Section7() {
  const bgImage = {
    backgroundImage: "url('assets/shopify-banner2.webp')",
  };

  return (
    <div
      className="w-full Section7 p-[7.5%_0px_5.5%_0px] bg-cover"
      style={bgImage}
    >
      <div className="flex items-center w-full justify-evenly section7-container">
        <h1 className="text-white text-[38px] leading-[46px] my-[0.67em] w-[610px]">
          We Create High Performance ECommerce Sites That Convert
        </h1>
        <div>
          <img className="block" src="assets/expert-shopify.png"></img>
          <img className="block ml-[203px]" src="assets/expert-shopify2.png"></img>
        </div>
      </div>
    </div>
  );
}
