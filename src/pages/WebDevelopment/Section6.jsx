export default function Section6() {
    return (
      <div className="w-full Section6 pb-[35px] lg:pt-[35px] bg-[#F5F5F5]">
        <div className="w-full section6-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
          <div className="w-full">
            <h1 className="text-[#535353] pt-5 pb-[10px] text-[24px] leading-[30px] md:text-[34px] md:leading-[40px]">
              <strong>Technologies We Use</strong>
            </h1>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-x-[15px]">
            <div className="w-full md:w-1/4 mb-[25px] md:mb-[40px]">
              <img className="w-[180px] mx-auto block relative animate-float" src="assets/drupal-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-1/4 mb-[25px] md:mb-[40px]">
              <img className="w-[110px] mx-auto block relative animate-float" src="assets/wordpress-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-1/4 mb-[25px] md:mb-[40px]">
              <img className="w-[160px] mx-auto block relative animate-float" src="assets/joomla-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-1/4 my-[40px]">
              <img className="w-[140px] mx-auto block relative animate-float" src="assets/laravel-web-development.png" alt="Tech Logo"></img>
            </div>
          </div>
        </div>
        <div className="seperator border-t-[4px] border-[#0a0a0a] border-solid"></div>
      </div>
    );
  }
  