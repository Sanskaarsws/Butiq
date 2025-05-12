import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback, useRef } from "react";
import "./Testimonial.css"; // Keep your custom styles if needed

const EmblaTestimonialSlider = ({ testimonials, autoplaySpeed = 4000 }) => {
  const autoplay = useRef(
    Autoplay({ delay: autoplaySpeed, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="w-full md:w-[85%] mx-auto p-10 text-center overflow-hidden">
      <img
        src="https://d245xcy5u3wmzt.cloudfront.net/assets/images/banners/home/plane_c.png"
        alt="Airplane Icon"
        className="w-20 mx-auto my-2 md:my-4"
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full p-0 md:p-6 testimonialSliderCard"
            >
              <p className="mb-4">“{testimonial.quote}”</p>
              <hr className="divider min-w-16 border-black mx-auto" />
              <p className="mt-4 text-sm">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaTestimonialSlider;
