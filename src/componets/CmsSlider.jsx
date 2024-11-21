import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCmsSlider } from "../context/CmsSliderContext";

export default function CmsSlider({ settings, slides }) {
  const { setIsOpenSlider } = useCmsSlider();
  return (
    <Slider {...settings}>
      {slides.length > 0 ? (
        slides.map((item, index) => (
          <div
            key={item.imgUrl}
            className="px-[10px] min-[625px]:px-5 w-auto cursor-pointer"
            onClick={() => setIsOpenSlider({ show: true, index })}
          >
            <img
              className="inline-block object-cover w-auto"
              src={item.imgUrl}
              alt="Brand Logo"
            />
          </div>
        ))
      ) : (
        <p>No brands available.</p> // Optional fallback if there are no brands
      )}
    </Slider>
  );
}
