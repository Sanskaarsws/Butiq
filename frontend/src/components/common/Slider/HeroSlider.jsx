import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useCallback } from "react";
import leftArrow from "../../../assets/images/left-arrow-svgrepo-com.svg"; // Replace with your actual path

const Arrow = ({ direction, onClick }) => (
  <div className={`arrow ${direction}`} onClick={onClick}>
    <img
      src={leftArrow}
      alt={`${direction} arrow`}
      className={direction === "next" ? "rotate-180" : "rotate-180"}
    />
  </div>
);

const EmblaHeroSlider = ({ images = [], autoplaySpeed = 5000 }) => {
  const autoplay = useRef(
    Autoplay({ delay: autoplaySpeed, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="heroSection relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-none w-full" key={index}>
              <figure>
                <img
                  src={image}
                  alt={`Hero banner ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <Arrow direction="prev" onClick={scrollPrev} />
      <Arrow direction="next" onClick={scrollNext} />
    </section>
  );
};

export default EmblaHeroSlider;
