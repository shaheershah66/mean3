import Slider from "react-slick";
import "./index.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arr next-arr" onClick={onClick}>
      <svg viewBox="0 0 256 256">
        <polyline
          fill="none"
          stroke="black"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          points="72,16 184,128 72,240"
        ></polyline>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arr prev-arr" onClick={onClick}>
      <svg viewBox="0 0 256 256">
        <polyline
          fill="none"
          stroke="black"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="round"
          points="184,16 72,128 184,240"
        ></polyline>
      </svg>
    </div>
  );
}

export default function CustomSlider({slides}) {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {slides.map((item) => {
        return (
          <div className="relative w-full psl-carousel__item">
            <div className="right-img psl__img psl-img--right absolute right-1/2 left-auto z-[3] bottom-0 w-[430px] h-[330px] -mr-[590px]">
              <img
                src={item.rightImgUrl}
                className="block absolute w-full top-[24] h-full object-cover"
                alt="Right Image"
              ></img>
            </div>
            <div className="left-img psl__img psl-img--left absolute -ml-[590px] left-1/2 bottom-0 w-[430px] h-[330px]">
              <img
                src={item.leftImgUrl}
                className="block absolute w-full top-[24] h-full object-cover"
                alt="Left Image"
              ></img>
            </div>
            <div className="middle-img psl__img psl-img--front relative left-0 mx-auto  xs:left-1/2 -bottom-[10] z-[4] xs:mr-0 xs:-ml-[250px] w-[420px] xs:w-[500px] h-[390px]">
              <img
                src={item.middleImgUrl}
                className="block absolute w-full top-[24] h-full object-cover"
                alt="Middle Image"
              ></img>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
