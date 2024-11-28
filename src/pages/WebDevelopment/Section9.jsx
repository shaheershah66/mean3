import Slider from "react-slick";

export default function Section9() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  };

  return (
    <div
      className="w-full section9 bg-[#db4437]"
      style={{
        backgroundColor: "linear-gradient(180deg,transparent 0,rgba(0,0,0,.5))",
      }}
    >
      <div className="w-full h-full section9-container">
        <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
          <h1 className="text-[34px] font-bold text-white leading-[40px] text-center py-[0.67em]">
            Our Portfolio
          </h1>
        </div>
        <div className="relative w-full h-full overflow-hidden pt-[25px]">
          <Slider {...settings}>
          <div className="w-full">
            <div className="right-img absolute right-1/2 left-auto z-[3] bottom-0 w-[430px] h-[330px] -mr-[590px]">
              <img
                src="assets/white-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
            <div className="left-img absolute -ml-[590px] left-1/2 bottom-0 w-[430px] h-[330px]">
              <img
                src="assets/diners-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
            <div className="middle-img relative left-1/2 -bottom-[10] z-[4] -ml-[250px] w-[500px] h-[390px]">
              <img
                src="assets/adamjee-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
          </div>

          <div className="w-full">
            <div className="right-img absolute right-1/2 left-auto z-[3] bottom-0 w-[430px] h-[330px] -mr-[590px] translate-y-0 opacity-100">
              <img
                src="assets/mtj-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
            <div className="left-img absolute -ml-[590px] left-1/2 bottom-0 w-[430px] h-[330px] translate-y-0 opacity-100">
              <img
                src="assets/telemall-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
            <div className="middle-img relative left-1/2 -bottom-[10] z-[4] -ml-[250px] w-[500px] h-[390px] translate-y-0 opacity-100">
              <img
                src="assets/interior-web-development.jpg"
                className="block absolute w-full top-[24] h-full object-cover"
              ></img>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
