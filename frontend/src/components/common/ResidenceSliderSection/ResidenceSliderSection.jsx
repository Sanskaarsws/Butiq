import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import "./embla.css"; // create this for styling (see below)

const CustomArrow = ({
  onClick,
  direction,
  top = "50%",
  side = "-40px",
  fill = "#000",
}) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top,
      [direction === "right" ? "right" : "left"]: side,
      transform: "translateY(-50%)",
      zIndex: 10,
      cursor: "pointer",
      backgroundColor: "transparent",
      borderRadius: "50%",
      padding: "8px",
      // boxShadow: "0 0 5px rgba(0,0,0,0.15)",
    }}
  >
    <svg
      fill={fill}
      width="24px"
      height="24px"
      viewBox="0 0 100 100"
      style={{
        transform: direction === "right" ? "rotate(180deg)" : "none",
        width: "25px",
      }}
    >
      <path
        d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519
          c0.545,0,1.087-0.222,1.482-0.657
          c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921
          c0.742-0.818,0.68-2.083-0.139-2.824
          c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059
          c-0.439,0.485-0.59,1.126-0.475,1.723
          C33.234,53.39,33.446,54.017,33.934,54.458z"
      />
    </svg>
  </div>
);

const CardSlider = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div
      className="embla-card"
      style={{
        position: "relative",
        width: "100%", // Changed to be responsive
        maxWidth: "378px", // Set a max width for larger screens
        height: "auto", // Changed for better responsiveness
        maxHeight: "608px",
        margin: "0 auto",
      }}
    >
      <CustomArrow
        onClick={scrollPrev}
        direction="left"
        top="90%"
        side="25%"
        fill="white"
      />
      <CustomArrow
        onClick={scrollNext}
        direction="right"
        top="90%"
        side="25%"
        fill="white"
      />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, idx) => (
            <div className="embla__slide" key={idx}>
              <img
                src={img}
                alt={`slide-${idx}`}
                style={{
                  width: "100%",
                  height: "auto", // Changed for better responsiveness
                  maxHeight: "608px",
                  objectFit: "cover",
                  aspectRatio: "3/5", // Maintain aspect ratio
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageSlider = ({ slides, page, noOfSlides = 3 }) => {
  // State to track current window width and slides to show
  const [slidesToShow, setSlidesToShow] = useState(noOfSlides);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        // Mobile
        setSlidesToShow(1);
      } else if (windowWidth < 1024) {
        // Tablet
        setSlidesToShow(2);
      } else {
        // Desktop
        setSlidesToShow(noOfSlides);
      }
    };

    // Initialize on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [noOfSlides]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: page !== "about",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const arrowSidePosition = slidesToShow === 1 ? "-8%" : "-3%";

  return (
    <div
      style={{
        margin: "0 auto",
        width: "90%",
        maxWidth: "1200px",
        position: "relative",
      }}
    >
      {page !== "about" && (
        <>
          <CustomArrow
            onClick={scrollPrev}
            direction="left"
            top="50%"
            side={arrowSidePosition}
          />
          <CustomArrow
            onClick={scrollNext}
            direction="right"
            top="50%"
            side={arrowSidePosition}
          />
        </>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container"
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                flex: `0 0 ${100 / slidesToShow}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 8px",
              }}
            >
              <div
                style={{
                  margin: page === "about" ? "0 40px" : undefined,
                  borderRadius: page === "about" ? "0" : "8px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {page === "about" ? (
                  <img
                    src={slide.images}
                    alt="slide"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                ) : (
                  <CardSlider images={slide.images} />
                )}
              </div>
              <h3 style={{ fontSize: "14px", margin: "10px 0 5px" }}>
                {slide.title}
              </h3>
              <p style={{ color: "#757575", fontSize: "14px" }}>
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
      ]).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  page: PropTypes.string,
  noOfSlides: PropTypes.number,
};

export default ImageSlider;
