import { Link } from "react-router-dom";

export default function Section6({ plus }) {
  return (
    <div className="w-full Section6 pb-[4%]">
      <div className="w-full mx-auto section6-container">
        <div className="w-[90%] md:w-[61%] mx-auto text-center pb-[1%]">
          <h1 className="text-[24px] md:text-[34px] font-bold text-[#151515] leading-[29px] md:leading-[41px] my-[0.67em]">
            Our Shopify Stores Outperform The Competition
          </h1>
          <p className="leading-[20px] w-full md:w-[75%] text-[#373737] text-base m-auto font-open">
            Need a professional Shopify website? Over the last 7 years, we’ve
            managed 500+ of eCommerce design and development projects – helping
            clients drive growth in online sales.
          </p>
        </div>

        {plus ? (
          <div className="w-full flex flex-wrap sxl:flex-nowrap justify-center p-[30px]  md:py-[2%] gap-x-0 min-[1171px]:gap-x-[7%]">
            <img
              src="assets/shopifyplus-diners.webp"
              alt="Website Image One"
              className="cover inline-block md:w-auto py-[10px] md:py-0 w-[90%]"
            ></img>
            <img
              src="assets/shopifyplus-white.webp"
              alt="Website Image Two"
              className="cover inline-block md:w-auto w-[90%] py-[10px] md:py-0"
            ></img>
          </div>
        ) : (
          <div className="w-full flex flex-wrap sxl:flex-nowrap justify-center p-[30px]  md:py-[2%] gap-x-0 min-[1171px]:gap-x-[7%]">
            <img
              src="assets/website-image-shopify.png"
              alt="Website Image One"
              className="cover inline-block md:w-auto py-[10px] md:py-0 w-[90%]"
            ></img>
            <img
              src="assets/website-image-shopify2.png"
              alt="Website Image Two"
              className="cover inline-block md:w-auto w-[90%] py-[10px] md:py-0"
            ></img>
          </div>
        )}

        <div className="text-center btn-container">
          <Link
            to="#contact-us-sect"
            className="inline-flex cursor-pointer items-center bg-[#DA2128] font-bold rounded-[3px] py-[10px] px-[15px] border-none text-white"
          >
            Discuss Project With Mean3
            <svg
              className="ml-[15px]"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="16px"
              width="16px"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
