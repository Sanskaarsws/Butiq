import aboutImage from "@/assets/images/aboutUsImg.jpg";
import team_1 from "@/assets/images/team_1.png";
import team_2 from "@/assets/images/team_2.png";
import team_3 from "@/assets/images/team_3.png";
import team_4 from "@/assets/images/team_4.png";

import ImageSlider from "@/components/common/ResidenceSliderSection/ResidenceSliderSection";

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
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <article className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl mb-4 font-[Raleway]">
            Who We Are
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 font-[Glacial Indifference]">
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
        <h2 className="text-2xl md:text-3xl mb-6 font-[Raleway]">THE TEAM</h2>
        <div>
          <article className="w-[80%] mx-auto">
            <ImageSlider slides={slidesData1} page="about" noOfSlides={4} />
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
