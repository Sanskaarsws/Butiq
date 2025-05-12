import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EmblaDestinationSlider = ({ destinations, backdrop = false }) => {
  // Sample data - replace with your actual data

  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      dragFree: true,
      containScroll: "trimSnaps",
      // Show 3 slides at once
      slidesPerView: 3,
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
    <div className="w-[90vw] mx-auto">
      <div className="relative">
        {/* Arrows */}
        <button
          className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!prevEnabled}
        >
          <ChevronLeft />
        </button>

        <button
          className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!nextEnabled}
        >
          <ChevronRight />
        </button>

        {/* Embla slider */}
        <div className="embla overflow-hidden pb-2" ref={emblaRef}>
          <div className="flex ">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-4 md:px-8"
              >
                <div className="relative h-[550px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.location}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 right-0 z-99">
                    <p className="text-center font-medium text-base text-white uppercase tracking-wider">
                      {item.location}
                    </p>
                  </div>
                  {backdrop && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaDestinationSlider;
