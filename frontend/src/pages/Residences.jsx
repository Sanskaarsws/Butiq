import { Element } from "react-scroll";
import { useState, useEffect } from "react";
import CustomSlider from "@/components/common/Slider/CustomSlider";
import ImageSlider from "@/components/common/ResidenceSliderSection/ResidenceSliderSection";

// Grouped image imports
import * as hills from "@/assets/images/hills";
import * as beaches from "@/assets/images/beaches";
import * as valleys from "@/assets/images/valleys";
import * as cities from "@/assets/images/cities";
import * as jungles from "@/assets/images/jungles";
import * as farms from "@/assets/images/farms";

// Utility to group slides in sets of 3
const createSlides = (images, groupSize = 3) => {
  const entries = Object.values(images);
  const slides = [];

  for (let i = 0; i < entries.length; i += groupSize) {
    slides.push({
      images: entries.slice(i, i + groupSize),
      title: "THE BUTIQ HOTEL",
      subtitle: i % 2 === 0 ? "Bhopal" : "Jaipur",
    });
  }

  return slides;
};

export default function Residences() {
  // State to track current window width and base slidesToShow
  const [baseSlidesToShow, setBaseSlidesToShow] = useState(3);

  // Update base slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        // Mobile - 1 slide in CustomSlider
        setBaseSlidesToShow(1);
      } else if (windowWidth < 1024) {
        // Tablet - 3 slides in CustomSlider
        setBaseSlidesToShow(2);
      } else {
        // Desktop - 6 slides in CustomSlider
        setBaseSlidesToShow(3);
      }
    };

    // Initialize on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate CustomSlider slidesToShow (double the base for nav slider)
  const customSliderSlidesToShow = Math.min(6, baseSlidesToShow * 2);

  const sections = [
    { id: "hills", title: "HILLS", slides: createSlides(hills) },
    { id: "beaches", title: "BEACHES", slides: createSlides(beaches) },
    { id: "riverSide", title: "RIVERSIDE", slides: createSlides(valleys) },
    { id: "city", title: "CITY", slides: createSlides(cities) },
    { id: "jungle", title: "JUNGLE", slides: createSlides(jungles) },
    { id: "farm", title: "FARM", slides: createSlides(farms) },
  ];

  return (
    <div className="bg-[#fcfcfa]">
      <div className="p-4 md:p-8 lg:p-16">
        <CustomSlider
          sliderName="residenceSlider"
          slidesToShow={customSliderSlidesToShow}
        />
      </div>

      {sections.map(({ id, title, slides }) => (
        <Element key={id} id={id}>
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl my-4">
            {title}
          </h1>
          <article className="my-8 md:my-12 lg:my-16">
            <ImageSlider slides={slides} noOfSlides={baseSlidesToShow} />
          </article>
        </Element>
      ))}
    </div>
  );
}
