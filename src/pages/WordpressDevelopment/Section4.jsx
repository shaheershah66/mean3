export default function Section4() {
  return (
    <div className="w-full Section4">
      <div className="w-full section4-container">
        <div className="w-[90%] md:w-[61%] text-center mx-auto">
          <h1 className="md:text-[34px] text-[24px] leading-[32px] font-bold text-[#151515] md:leading-[41px] my-[0.67em]">
            Our Latest <span className="text-[#DA2128]">Wordpress</span> Web
            Design Projects
          </h1>
        </div>
        <div className="flex justify-center w-full flex-wrap min-[1081px]:flex-nowrap min-[1171px]:gap-x-[7%] p-[30px] md:p-0 md:py-[2%] overflow-x-hidden">
          <img
            className="object-cover w-[90%] py-[10px] md:py-0 md:w-auto"
            src="assets/website-image1-wordpress-development.png"
          ></img>
          <img
            className="object-cover w-[90%] py-[10px] md:py-0 md:w-auto"
            src="assets/website-image2-wordpress-development.png"
          ></img>
          <img
            className="object-cover w-[90%] py-[10px] md:py-0 md:w-auto"
            src="assets/website-image3-wordpress-development.png"
          ></img>
        </div>
        <div class="text-center btn-container">
          <a
            class="inline-flex cursor-pointer items-center leading-[1.15] bg-[#DA2128] font-bold rounded-[3px] py-[10px] px-[15px] border-none text-white"
            href="#/shopify-plus#contact-us-sect"
          >
            Lets get started
            <svg
              class="ml-[15px]"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="16px"
              width="16px"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="line my-[55px] md:my-[4%] mx-auto w-[70%] md:w-[61%] shadow-line h-2 rounded-[100%]"></div>
    </div>
  );
}
