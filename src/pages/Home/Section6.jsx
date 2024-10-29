// import { useState } from "react";
// import Slider from "react-slick";
// import SliderBtn from "../../componets/SliderBtn";
// import sliderVideoJson from "../../data/sliderVideo.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Section6() {
//   const [sliderData, setSliderData] = useState(sliderVideoJson);
//   var settings = {
//     dots: false,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     cssEase: "linear",
//     nextArrow: <SliderBtn direction={"next"} />,
//     prevArrow: <SliderBtn direction={"prev"} />,
//   };

//   return (
//     <div className="Section6 w-full text-white pt-28 pb-[35px]">
//       <div className="section6-container w-full">
//         <h3 className="text-4xl font-bold mb-10 text-red-800 text-center">
//           CLIENT TESTIMONIALS
//         </h3>
//         <Slider {...settings}>
//           {sliderData.map((item) => {
//             return (
//               <div className="w-[1200px]">
//                 <video
//                   src={item.url}
//                   controls
//                   autoPlay
//                   muted
//                 ></video>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Slider from "react-slick";
import SliderBtn from "../../componets/SliderBtn"; // Ensure correct path
import sliderVideoJson from "../../data/sliderVideo.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section6() {
  const [sliderData] = useState(sliderVideoJson);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    nextArrow: <SliderBtn direction="next" position={{ right: "5%", opacity: "0.2" }} />,
    prevArrow: <SliderBtn direction="prev" position={{ left: "5%", opacity: "0.2" }} />,
  };

  return (
    <div className="Section6 w-full text-white pt-28 pb-[45px]">
      <div className="section6-container w-full">
        <h3 className="text-4xl font-bold mb-10 text-[#da2128] text-center">
          CLIENT TESTIMONIALS
        </h3>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <div className="w-[1200px] mx-auto">
                <video
                  className="w-full h-auto"
                  src={item.url}
                  controls
                  autoPlay
                  muted
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
