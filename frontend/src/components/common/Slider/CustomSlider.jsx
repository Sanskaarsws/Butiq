import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "react-scroll";

import beachesImg from "@/assets/images/Beaches.svg";
import hillImg from "@/assets/images/Hills.svg";
import jungleImg from "@/assets/images/Jungle.svg";
import riverImg from "@/assets/images/River.svg";
import cityImg from "@/assets/images/cityicon.svg";
import farmImg from "@/assets/images/farmicon.svg";
import arrow from "@/assets/images/left-arrow-svgrepo-com.svg";

// Custom Left Arrow
const LeftArrow = ({ className, style, onClick }) => (
  <img
    src={arrow}
    alt="Previous"
    className={`${className} leftArrowClass`}
    style={{
      ...style,
      cursor: "pointer",
      width: "25px",
      height: "25px",
      zIndex: 2,
    }}
    onClick={onClick}
    loading="lazy"
  />
);

// Custom Right Arrow
const RightArrow = ({ className, style, onClick }) => (
  <img
    src={arrow}
    alt="Next"
    className={className}
    style={{
      ...style,
      transform: "rotate(180deg)",
      cursor: "pointer",
      width: "25px",
      height: "25px",
      zIndex: 2,
    }}
    onClick={onClick}
    loading="lazy"
  />
);

export default function CustomSlider({
  slidesToShow = 6,
  sliderName = "",
  swipeToSlide = true,
  slideSpeed = 500,
  pauseOnHover = true,
  breakpointSlidesToShow = {},
}) {
  const sliderData = [
    { id: 1, icon: riverImg, label: "Riverside", linkedSectionId: "riverSide" },
    { id: 2, icon: hillImg, label: "Hills", linkedSectionId: "hills" },
    { id: 3, icon: beachesImg, label: "Beaches", linkedSectionId: "beaches" },
    { id: 4, icon: jungleImg, label: "Jungle", linkedSectionId: "jungle" },
    { id: 5, icon: cityImg, label: "City", linkedSectionId: "city" },
    { id: 6, icon: farmImg, label: "Farm", linkedSectionId: "farm" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: slideSpeed,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow,
    swipeToSlide,
    pauseOnHover,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: breakpointSlidesToShow?.lg || slidesToShow,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: breakpointSlidesToShow?.md || 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: breakpointSlidesToShow?.sm || 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderName === "residenceSlider" &&
          sliderData.map((item) => (
            <div
              key={item.id}
              className="slide-item"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to={item.linkedSectionId}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div
                  className="icon"
                  style={{
                    fontSize: "40px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    style={{ width: "50px", height: "50px" }}
                    loading="lazy"
                  />
                </div>
                <div
                  className="label"
                  style={{ fontSize: "16px", textAlign: "center" }}
                >
                  {item.label}
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}

CustomSlider.propTypes = {
  slidesToShow: PropTypes.number,
  sliderName: PropTypes.string,
  swipeToSlide: PropTypes.bool,
  slideSpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  breakpointSlidesToShow: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
  }),
};
