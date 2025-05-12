import { useState, useEffect } from "react";
import CustomSlider from "../components/common/Slider/CustomSlider";
import ImageSlider from "../components/common/ResidenceSliderSection/ResidenceSliderSection";

// Grouped image imports
import * as hills from "@/assets/images/hills";
import * as beaches from "@/assets/images/beaches";
import * as valleys from "@/assets/images/valleys";
import * as cities from "@/assets/images/cities";
import * as jungles from "@/assets/images/jungles";
import * as farms from "@/assets/images/farms";

import beachesImg from "../assets/images/Beaches.svg";
import hillImg from "../assets/images/Hills.svg";
import jungleImg from "../assets/images/Jungle.svg";
import riverImg from "../assets/images/River.svg";
import cityImg from "../assets/images/cityicon.svg";
import farmImg from "../assets/images/farmicon.svg";
import { Link } from "react-router-dom";
import { EmblaSlider } from "../components/common/Slider/EmblaSlider";
// import arrow from "../assets/images/left-arrow-svgrepo-com.svg";

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

  const sliderData = [
    { id: 1, icon: riverImg, label: "Riverside", linkedSectionId: "riverSide" },
    { id: 2, icon: hillImg, label: "Hills", linkedSectionId: "hills" },
    { id: 3, icon: beachesImg, label: "Beaches", linkedSectionId: "beaches" },
    { id: 4, icon: jungleImg, label: "Jungle", linkedSectionId: "jungle" },
    { id: 5, icon: cityImg, label: "City", linkedSectionId: "city" },
    { id: 6, icon: farmImg, label: "Farm", linkedSectionId: "farm" },
  ];

  const sections = [
    { id: "hills", title: "HILLS", slides: createSlides(hills) },
    { id: "beaches", title: "BEACHES", slides: createSlides(beaches) },
    { id: "riverSide", title: "RIVERSIDE", slides: createSlides(valleys) },
    { id: "city", title: "CITY", slides: createSlides(cities) },
    { id: "jungle", title: "JUNGLE", slides: createSlides(jungles) },
    { id: "farm", title: "FARM", slides: createSlides(farms) },
  ];

  const locationSlide = sliderData.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
    );
  });

  return (
    <div className="bg-[#fcfcfa]">
      <div className="py-16 px-[5%] w-full">
        <EmblaSlider
          navigationArrow={true}
          slides={locationSlide}
          overlay={true}
          no_of_slides={{ xs: 3, sm: 3, md: 4, lg: 5, xl: 6 }}
        />
        {/* <CustomSlider
          sliderName="residenceSlider"
          slidesToShow={customSliderSlidesToShow}
        /> */}
      </div>

      {sections.map(({ id, title, slides }) => (
        <div key={id} id={id}>
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl my-4 font-[Raleway]">
            {title}
          </h1>
          <article className="my-8 md:my-12 lg:my-16">
            <ImageSlider slides={slides} noOfSlides={baseSlidesToShow} />
          </article>
        </div>
      ))}
    </div>
  );
}
