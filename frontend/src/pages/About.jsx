import "@/styles/About.css";
import ImageSlider from "@/components/common/ResidenceSliderSection/ResidenceSliderSection";

import aboutImage from "@/assets/images/aboutUsImg.jpg";

import team_1 from "@/assets/images/team_1.png";
import team_2 from "@/assets/images/team_2.png";
import team_3 from "@/assets/images/team_3.png";
import team_4 from "@/assets/images/team_4.png";

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
      title: "Avnish Hasija",
      subtitle: "Projects",
    },
  ];

  return (
    <div className="about-us-container">
      <section className="aboutSection">
        <article>
          <h1>WHO WE ARE</h1>
          <p>
            Hospitality management professionals committed to creating
            unforgettable experiences for the ever evolving traveler through
            unique accommodations and exceptional services that exceed
            expectations
          </p>
        </article>
        <figure
          style={{
            height: "80vh",
            overflow: "hidden",
            width: "59vw",
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <img src={aboutImage} alt="Abstract" height="100%" width="100%" />
        </figure>
      </section>

      <section className="team-section">
        <h2>THE TEAM</h2>
        <Element id="hills">
          <article style={{ margin: "2% auto 5%" }}>
            <ImageSlider slides={slidesData1} page="about" noOfSlides={4} />
          </article>
        </Element>
        {/* <div className="team-carousel">
          <div className="team-member">
            <img src={hotel1} alt="XYZ JACOBS" />
            <h3>XYZ JACOBS</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="team-member">
            <img src={hotel1} alt="XYZ JACOBS" />
            <h3>XYZ JACOBS</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="team-member">
            <img src={hotel1} alt="XYZ JACOBS" />
            <h3>XYZ JACOBS</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default About;
