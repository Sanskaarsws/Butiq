import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: use any icon lib

const EmblaDestinationSlider = ({ destinations }) => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const updateButtons = () => {
      setPrevEnabled(emblaApi.canScrollPrev());
      setNextEnabled(emblaApi.canScrollNext());
    };
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi]);

  return (
    <section className="my-12">
      <div className="relative">
        {/* Arrows */}
        <button
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!prevEnabled}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!nextEnabled}
        >
          <ChevronRight />
        </button>

        {/* Embla slider */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[320px] xl:w-[360px]"
              >
                <figure>
                  <img
                    src={item.image}
                    alt={item.location}
                    className="w-full h-[480px] object-cover rounded"
                  />
                  <figcaption className="text-center mt-2 text-sm text-gray-700">
                    {item.location.toUpperCase()}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaDestinationSlider;
