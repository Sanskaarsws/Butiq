import { Element } from "react-scroll";
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
      <div className="p-16">
        <CustomSlider sliderName="residenceSlider" slidesToShow={6} />
      </div>

      {sections.map(({ id, title, slides }) => (
        <Element key={id} id={id}>
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <article style={{ margin: "2% auto 5%" }}>
            <ImageSlider slides={slides} />
          </article>
        </Element>
      ))}
    </div>
  );
}
