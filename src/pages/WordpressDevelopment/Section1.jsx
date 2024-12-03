export default function Section1() {
  const bgImage = {
    backgroundImage: "url('assets/about-bg-img.webp')",
  };
  return (
    <div
      className="Section1 w-full h-[290px] md:h-[550px] bg-cover bg-no-repeat"
      style={bgImage}
    >
      <div className="flex items-center justify-center w-full h-full px-5 text-center section1-container">
        <div className="flex flex-col items-center text-white">
          <h1 className="leading-[32px] md:leading-[85px] text-[32px] md:text-[45px] xl:text-[70px] font-bold">
            WordPress Development
          </h1>
          <hr className="w-1/4 my-5"></hr>
          <p className="text-sm font-bold md:text-lg text-[#E2E2E2]">
            Fueling Growth through Customized WordPress Development
          </p>
        </div>
      </div>
    </div>
  );
}
