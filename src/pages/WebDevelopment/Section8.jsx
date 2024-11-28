export default function Section8() {
    return (
      <div className="w-full Section8 lg:pt-[35px] bg-[#F5F5F5]">
        <div className="w-full section8-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
          <div className="w-full">
            <h1 className="text-[#535353] pt-5 pb-[10px] text-[24px] leading-[30px] md:text-[34px] md:leading-[40px]">
              <strong>Technologies We Use</strong>
            </h1>
          </div>
          <div className="flex w-full flex-col md:flex-row gap-x-[15px]">
            <div className="w-full md:w-[16.66666667%] mb-[30px]">
              <img className="w-[120px] mx-auto block relative animate-float" src="assets/react-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-[16.66666667%] mb-[30px]">
              <img className="w-[110px] mx-auto block relative animate-float" src="assets/python-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-[16.66666667%] mb-[30px]">
              <img className="w-[160px] mx-auto block relative animate-float" src="assets/php-web-development.png" alt="Tech Logo"></img>
            </div>
  
            <div className="w-full md:w-[16.66666667%] mt-[20px] md:mt-[40px] mb-[30px]">
              <img className="w-[140px] mx-auto block relative animate-float" src="assets/laravel-web-development.png" alt="Tech Logo"></img>
            </div>
            
            <div className="w-full md:w-[16.66666667%] mb-[30px]">
              <img className="w-[140px] mx-auto block relative animate-float" src="assets/angular-web-development.png" alt="Tech Logo"></img>
            </div>

            <div className="w-full md:w-[16.66666667%] mb-[30px]">
              <img className="w-[400px] mx-auto block relative animate-float" src="assets/nodejs-web-development.png" alt="Tech Logo"></img>
            </div>
          </div>
        </div>
        <div className="seperator border-t-[4px] border-[#0a0a0a] border-solid"></div>
      </div>
    );
  }
  