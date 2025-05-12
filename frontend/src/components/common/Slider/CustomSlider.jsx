import PropTypes from "prop-types";
import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

// import beachesImg from "@/assets/images/Beaches.svg";
// import hillImg from "@/assets/images/Hills.svg";
// import jungleImg from "@/assets/images/Jungle.svg";
// import riverImg from "@/assets/images/River.svg";
// import cityImg from "@/assets/images/cityicon.svg";
// import farmImg from "@/assets/images/farmicon.svg";
// import arrow from "@/assets/images/left-arrow-svgrepo-com.svg";

export default function CustomSlider({
  slidesToShow = 6,
  sliderName = "",
  slideSpeed = 500,
  breakpointSlidesToShow = {},
}) {
  const emblaRef = useRef(null);
  const [emblaRefCallback, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    speed: slideSpeed / 100, // embla expects lower values (1 = fast)
    dragFree: true,
  });

  const sliderData = [
    { id: 1, icon: riverImg, label: "Riverside", linkedSectionId: "riverSide" },
    { id: 2, icon: hillImg, label: "Hills", linkedSectionId: "hills" },
    { id: 3, icon: beachesImg, label: "Beaches", linkedSectionId: "beaches" },
    { id: 4, icon: jungleImg, label: "Jungle", linkedSectionId: "jungle" },
    { id: 5, icon: cityImg, label: "City", linkedSectionId: "city" },
    { id: 6, icon: farmImg, label: "Farm", linkedSectionId: "farm" },
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 480) return breakpointSlidesToShow?.sm || 2;
    if (width < 600) return breakpointSlidesToShow?.md || 3;
    if (width < 1024) return breakpointSlidesToShow?.lg || slidesToShow;
    return slidesToShow;
  };

  useEffect(() => {
    const handleResize = () => {
      const container = emblaRef.current;
      if (container) {
        const slideCount = getSlidesPerView();
        const slides = container.querySelectorAll(".embla__slide");
        slides.forEach((slide) => {
          slide.style.minWidth = `${100 / slideCount}%`;
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow, breakpointSlidesToShow]);

  return (
    <div className="embla" ref={emblaRef}>
      <div style={{ position: "relative" }}>
        <img
          src={arrow}
          alt="Previous"
          className="embla__prev"
          onClick={scrollPrev}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            width: "25px",
            height: "25px",
            zIndex: 2,
          }}
        />
        <img
          src={arrow}
          alt="Next"
          className="embla__next"
          onClick={scrollNext}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%) rotate(180deg)",
            cursor: "pointer",
            width: "25px",
            height: "25px",
            zIndex: 2,
          }}
        />
        <div className="embla__viewport" ref={emblaRefCallback}>
          <div className="embla__container" style={{ display: "flex" }}>
            {sliderName === "residenceSlider" &&
              sliderData.map((item) => (
                <div
                  key={item.id}
                  className="embla__slide"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Link to={item.linkedSectionId}>
                    <div
                      className="icon"
                      style={{
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
          </div>
        </div>
      </div>
    </div>
  );
}

CustomSlider.propTypes = {
  slidesToShow: PropTypes.number,
  sliderName: PropTypes.string,
  slideSpeed: PropTypes.number,
  breakpointSlidesToShow: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
  }),
};
