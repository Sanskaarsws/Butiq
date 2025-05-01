import aboutImage from "@/assets/images/aboutUsImg.jpg";
import team_1 from "@/assets/images/team_1.png";
import team_2 from "@/assets/images/team_2.png";
import team_3 from "@/assets/images/team_3.png";
import team_4 from "@/assets/images/team_4.png";

import ImageSlider from "@/components/common/ResidenceSliderSection/ResidenceSliderSection";
import { Element } from "react-scroll";

const About = () => {
  const slidesData1 = [
    {
      images: [team_1],
      title: "Varun Mehta",
      subtitle: "Product",
    },
    {
      images: [team_2],
      title: "Varun Sehgal",
      subtitle: "BD | Sales",
    },
    {
      images: [team_3],
      title: "Kunal Sehgal",
      subtitle: "Strategy | Finance",
    },
    {
      images: [team_4],
      title: "Avnish Hasija",
      subtitle: "Projects",
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12">
      <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <article className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">WHO WE ARE</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Hospitality management professionals committed to creating
            unforgettable experiences for the ever-evolving traveler through
            unique accommodations and exceptional services that exceed
            expectations.
          </p>
        </article>
        <figure className="lg:w-1/2 w-full h-64 sm:h-96 lg:h-[80vh] overflow-hidden shadow-md">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">THE TEAM</h2>
        <Element id="hills">
          <article className="max-w-6xl mx-auto">
            <ImageSlider slides={slidesData1} page="about" noOfSlides={4} />
          </article>
        </Element>
      </section>
    </div>
  );
};

export default About;
