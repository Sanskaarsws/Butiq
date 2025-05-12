import "./Home.css";

// Images
import heroImage_1 from "../../assets/images/heroBanner_1.jpg";
import heroImage_2 from "../../assets/images/heroBanner_2.jpg";
import heroImage_3 from "../../assets/images/heroBanner_3.jpg";
import aboutImage from "../../assets/images/coffeeIMg2.jpg";
import leftArrow from "../../assets/images/Vecto4.svg";

import butlerOnCallImg from "../../assets/images/BUTLERONCALL.svg";
import regionalCuisineImg from "../../assets/images/AUTHENTICREGIONALCUISINE.svg";
import PetsWelcomedImg from "../../assets/images/PETSWELCOMEEVERYWHERE.svg";

// Hotel Images
import hotel_1 from "../../assets/images/WhatsApp13.09.17_f8b7c8f2.jpg";
import hotel_2 from "../../assets/images/WhatsApp Image 2025-02-03 at 13.02.01_b674490agra.jpg";
import hotel_3 from "../../assets/images/WhatsAppImage2025-02-0313.02.54_a1328233Benaras.jpg";
import hotel_4 from "../../assets/images/WhatsAppImage2025-02-0313.08.39_c8c839Satpura.jpg";
import hotel_5 from "../../assets/images/WhatsAppImage2025-02-03at13.15.42_8cd8c509Sheikhpura.jpg";

import aboutVideo from "../../assets/video/Amanjena.mp4";
import TestimonialSlider from "../../components/Testimonials/Testimonials";
import EmblaHeroSlider from "../../components/common/Slider/HeroSlider";
import EmblaDestinationSlider from "../../components/common/Slider/EmblaHotelSlider";
import { EmblaSlider } from "../../components/common/Slider/EmblaSlider";

// Reusable Arrow Components
const Arrow = ({ onClick, direction }) => (
  <div className={`arrow ${direction}`} onClick={onClick}>
    <img src={leftArrow} alt={`${direction} arrow`} />
  </div>
);

const hotels = [
  { image: hotel_1, location: "The Ten", branch: "Bhopal" },
  { image: hotel_2, location: "The Ten", branch: "Agra" },
  { image: hotel_3, location: "Baheri Benaras", branch: "Benaras" },
  { image: hotel_4, location: "Kamti Kula", branch: "Satpura Tiger Reserve" },
  { image: hotel_5, location: "Amrai", branch: "Sheikhpura" },
];

const testimonials = [
  {
    quote:
      "The Postcard Hotel has reset some of the default settings of the standard hotel experience.",
    author: "Condé Nast Traveller",
  },
  {
    quote:
      "A stylish luxury hotel in Thimphu’s northern outskirts is where illustrious Bhutanese and travellers alike are finding their happy place.",
    author: "Nat Geo Traveller India",
  },
  {
    quote:
      "As a hotelier, Kapil Chopra has spent two decades at the frontline of hospitality. Now he’s juicing all that experience to launch his own brand of luxury hotels.",
    author: "Condé Nast Traveller",
  },
  {
    quote:
      "We believe guests want to stay in a place where the hotel does the thinking for them, where they get the simple things right, yet offer fantastic spaces for them to relax, meet like-minded people and experience local culture.",
    author: "The Economic Times",
  },
  {
    quote:
      "The Postcard, as a brand, is more than just a chain of small hotels. It is a movement to bring back the old way to holiday, where you awaken to a new way of seeing with gimmick-free holidays that are effortlessly merged with local authentic experiences and regional vernacular design.",
    author: "Sunday Financial Express",
  },
];

const HeroBanner_array = [heroImage_1, heroImage_2, heroImage_3].map(
  (e, index) => (
    <figure style={{ width: "100%" }} key={index}>
      <img src={e} alt="Banner" />
    </figure>
  )
);

export default function Home() {
  return (
    <main className="mainContainer">
      {/* Hero Section */}
      <section className="heroSection">
        <EmblaSlider
          slides={HeroBanner_array}
          no_of_slides={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          delay={3000}
          autoScroll={true}
          navigationDots={true}
          backdrop={true}
        />
      </section>

      {/* Welcome Section */}
      <section className="welcomeSection">
        <h2>Butiq Stays</h2>
        <p>
          Handpicked spaces that curate unique and personalised experiences
          across India. Each stay brings a different flavor yet follows the same
          principle—combining art, nature, and wellness. Crafted for evolved
          travelers, our Butiq Stays offer serene indulgence, cultural
          exploration, and transformative wellness experiences.
        </p>
        <article className="[@media(max-width:425px)]:flex-col items-center">
          {[butlerOnCallImg, regionalCuisineImg, PetsWelcomedImg].map(
            (img, index) => (
              <div key={index} className="w-auto md:w-[25%] text-center">
                <figure className="w-[4rem]">
                  <img src={img} alt="Feature Icon" />
                </figure>
                <p className="text-[12px] md:text-sm font-raleway font-bold uppercase ">
                  {
                    [
                      "BUTLER ON CALL",
                      "AUTHENTIC REGIONAL CUISINE",
                      "PETS WELCOME EVERYWHERE",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </article>
      </section>

      {/* Video Section */}
      <section className="video_container">
        <video autoPlay muted loop>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </section>

      {/* Testimonials */}
      <div className="bg-gray-100 flex items-center justify-center my-[5rem]">
        <TestimonialSlider
          testimonials={testimonials}
          autoplaySpeed={3000}
          showArrows={true}
        />
      </div>

      {/* Destinations */}
      <section>
        <h2 className="text-center mt-12 text-[22px] font-[Raleway]">
          DESTINATIONS
        </h2>
        <article className="locations_container">
          <EmblaDestinationSlider destinations={hotels} backdrop={true} />
        </article>
      </section>

      {/* Experiences */}
      <section className="experienceSection">
        <article>
          <h1>EXPERIENCES</h1>
          <p>
            Customize your vacation with activities that match your interests.
            Whether exploring art, food, history, or leisure, we offer
            tailor-made experiences to make your journey uniquely yours.
          </p>
          <div>
            <span className="underline text-sm cursor-pointer">EXPLORE</span>
          </div>
        </article>
        <figure className="experience-image">
          <img src={aboutImage} alt="Experience" loading="lazy" />
        </figure>
      </section>
    </main>
  );
}
