import user1 from "@/assets/images/portrait.jpg";
import butiqForYouLogo from "@/assets/images/ButiQ Black SVG.svg";

import Hotel1 from "@/assets/images/hotel1.jpg";

import agra from "@/assets/images/agra_2.jpg";
import agra_1 from "@/assets/images/agra_1.jpg";

import bhopalImg from "@/assets/images/bhopalImg.jpg";
import bhopal_1 from "@/assets/images/theTen.jpg";
import bhopal_2 from "@/assets/images/masseria.jpg";
import bhopal_3 from "@/assets/images/zyna.jpg";
import bhopal_4 from "@/assets/images/Solghar(Residences).jpg";

import saje from "@/assets/images/saje.jpg";
import saje1 from "@/assets/images/farms/LittleKonkanFarmhouse.jpg";
import saje2 from "@/assets/images/CasaPortuga-Saje.jpg";

import varanasi from "@/assets/images/varanasi.jpg";
import varanasi_1 from "@/assets/images/baheriHouse.jpg";

import satpuraTigerReserve from "@/assets/images/satpuraReserve.jpg";
import satpuraTigerReserve_1 from "@/assets/images/KamtiKula.jpg";

import goa from "@/assets/images/goa.jpg";
import goa_1 from "@/assets/images/goa_1.jpg";
import goa_2 from "@/assets/images/goa_2.jpg";
import goa_3 from "@/assets/images/goa_3.jpg";

import karjat from "@/assets/images/karjat.jpg";
import karjat_1 from "@/assets/images/karjat_1.jpg";

const testimonials = [
  {
    title: "Travel Blogger",
    description: `The attention to detail in every corner of the property reflects true luxury. I particularly enjoyed the wellness spa treatments—they were divine!`,
    fullName: "Emily",
    designation: `Travel Blogger`,
    picture: user1,
  },

  {
    title: "Cultural Journalist",
    description: `The architectural design pays homage to traditional aesthetics while ensuring guest comfort.`,
    fullName: "Maya Singh",
    designation: `Cultural Journalist`,
    picture: user1,
  },

  {
    title: "Lifestyle Influencer",
    description: `I must say, it is a spectacular retreat! The design is modern yet inviting, and I could not enough of the stunning views of the Taj Mahal from my room.`,
    fullName: "Sofia Patel",
    designation: `Lifestyle Influencer`,
    picture: user1,
  },
  {
    title: "Luxury Travel Expert",
    description: `With an emphasis on holistic wellness and natural beauty, this retreat is for those looking for a tranquil escape.`,
    fullName: "Suresh Reddy",
    designation: `Luxury Travel Expert`,
    picture: user1,
  },

  {
    title: "Nature Enthusiast",
    description: `Its commitment to sustainability and eco-friendly practices sets it apart from other retreats.`,
    fullName: "Nisha Verma",
    designation: `Nature Enthusiast`,
    picture: user1,
  },

  {
    title: "Wellness Advocate",
    description: `It seems poised to offer guests a unique experience that nurtures both body and soul`,
    fullName: "Meera Choudhary",
    designation: `Wellness Advocate`,
    picture: user1,
  },

  {
    title: "Travel Consultant",
    description: `The location is perfect for those seeking peace and spirituality amidst nature.`,
    fullName: "Vikram Desai",
    designation: `Travel Consultant`,
    picture: user1,
  },
];

const navbarData = {
  brandLogo: butiqForYouLogo,
  links: [
    { text: "HOTELS & RESORTS", link: "/living" },
    { text: "RESIDENCES", link: "/residences" },
    { text: "Brand", link: "" },
    { text: "DESTINATIONS", link: "/destinations" },
    { text: "EXPERIENCES", link: "#" },

    // { text: "DESTINATIONS", link: "/destinations" },
    // { text: "EXPERIENCE", link: "/experiences" },
  ],
};

const hotelsAndResortsDropdown = [
  {
    heading: "NOW HOSTING AT",
    items: [{ text: "The Ten Bhopal", link: "/destinations" }],
  },
  {
    heading: "OPENING SOON",
    items: [
      { text: "The Ten Agra", link: "/destinations" },
      { text: "Baheri Benaras", link: "/destinations" },
      { text: "Kamti Kula Satpura Tiger Reserve", link: "/destinations" },
      { text: "Amrai Sheikhpura", link: "/destinations" },
      { text: "Masseria Bhopal", link: "/destinations" },
      { text: "The Edge, Malwan", link: "/destinations" },
      {
        text: "The Element Earth, Jaipur",
        link: "/destinations",
      },
      { text: "The Bosque, Siolim, Goa", link: "/destinations" },
    ],
  },
];

// Define the dropdown data for "Destinations"
const destinationsDropdown = [
  {
    // heading: "OPENING ",
    items: [
      {
        text: "Agra",
        link: "/agra",
        state: "UP",
        bannerImg: agra,

        header: {
          title: "Agra",
          description: `A city that breathes history and romance, home to the iconic Taj Mahal. Once the capital of the Mughal Empire, it boasts architectural wonders like Agra Fort and Fatehpur Sikri, showcasing the grandeur of a bygone era. The charm of Agra extends beyond its monuments, with vibrant markets and delicious Mughlai cuisine adding to its allure. Whether it's marveling at the Taj Mahal at sunrise or indulging in the city's rich heritage, Agra promises an unforgettable journey.`,
        },

        resortData: [
          {
            title: "The Ten",
            subHeading: "Hotels & Resorts",
            picture: agra_1,
            description: `A city that breathes history and romance, home to the iconic Taj Mahal. Once the capital of the Mughal Empire, it boasts architectural wonders like Agra Fort and Fatehpur Sikri, showcasing the grandeur of a bygone era. The charm of Agra extends beyond its monuments, with vibrant markets and delicious Mughlai cuisine adding to its allure. Whether it's marveling at the Taj Mahal at sunrise or indulging in the city's rich heritage, Agra promises an unforgettable journey.`,
          },
        ],
      },

      {
        text: "Bhopal",
        link: "/bhopal",
        state: "MP",
        bannerImg: bhopalImg,

        header: {
          title: "Bhopal",
          description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
        },

        resortData: [
          {
            title: "The Ten",
            subHeading: "Hotels & Resorts",
            picture: bhopal_1,
            description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
          },
          {
            title: "Masseria",
            subHeading: "Hotels & Resorts",
            picture: bhopal_2,
            description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
          },
          {
            title: "Zyna",
            subHeading: "Hotels & Resorts",
            picture: bhopal_3,
            description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
          },
          {
            title: "Solghar",
            subHeading: "Residences",
            picture: bhopal_4,
            description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
          },
        ],
      },

      {
        text: "Goa",
        link: "/goa",
        state: "GOA",
        bannerImg: goa,

        header: {
          title: "SIOLIM",
          description: `India’s ultimate beach paradise is a vibrant mix of sun, sand, and culture. Whether you crave the lively nightlife of Baga, the serenity of Palolem, or the Portuguese charm of Old Goa, there’s something for everyone. Adventure seekers can enjoy water sports, while food lovers can indulge in Goan seafood and feni. From golden beaches to stunning churches and spice plantations, an experience like no other.`,
        },

        resortData: [
          {
            title: "Bosque Apartment 01",
            subHeading: "Residences",
            picture: goa_1,
            description: `India’s ultimate beach paradise is a vibrant mix of sun, sand, and culture. Whether you crave the lively nightlife of Baga, the serenity of Palolem, or the Portuguese charm of Old Goa, there’s something for everyone. Adventure seekers can enjoy water sports, while food lovers can indulge in Goan seafood and feni. From golden beaches to stunning churches and spice plantations, an experience like no other.`,
          },
          {
            title: "Bosque Apartment 02",
            subHeading: "Residences",
            picture: goa_2,
            description: `India’s ultimate beach paradise is a vibrant mix of sun, sand, and culture. Whether you crave the lively nightlife of Baga, the serenity of Palolem, or the Portuguese charm of Old Goa, there’s something for everyone. Adventure seekers can enjoy water sports, while food lovers can indulge in Goan seafood and feni. From golden beaches to stunning churches and spice plantations, an experience like no other.`,
          },
          {
            title: "Bosque Apartment 03",
            subHeading: "Residences",
            picture: goa_3,
            description: `India’s ultimate beach paradise is a vibrant mix of sun, sand, and culture. Whether you crave the lively nightlife of Baga, the serenity of Palolem, or the Portuguese charm of Old Goa, there’s something for everyone. Adventure seekers can enjoy water sports, while food lovers can indulge in Goan seafood and feni. From golden beaches to stunning churches and spice plantations, an experience like no other.`,
          },
        ],
      },

      {
        text: "Karjat",
        link: "/karjat",
        state: "MH",
        bannerImg: karjat,

        header: {
          title: "Karjat",
          description: `A scenic getaway known for its lush green valleys, waterfalls, and adventure activities. Just a short drive from Mumbai and Pune, it’s the perfect spot for trekking, river rafting, and exploring ancient caves like Kondana. Whether you seek thrill or tranquility, Karjat offers the best of both worlds. Escape the city’s chaos and immerse yourself in nature.`,
        },
        resortData: [
          {
            title: "Botanica House 01 to 65",
            subHeading: "Residences",
            picture: karjat_1,
            description: `A scenic getaway known for its lush green valleys, waterfalls, and adventure activities. Just a short drive from Mumbai and Pune, it’s the perfect spot for trekking, river rafting, and exploring ancient caves like Kondana. Whether you seek thrill or tranquility, Karjat offers the best of both worlds. Escape the city’s chaos and immerse yourself in nature.`,
          },
        ],
      },

      {
        text: "Saje",
        link: "/saje",
        state: "MH",
        bannerImg: saje,

        header: {
          title: "Saje",
          description: `A hidden paradise waiting to be explored, Sajé is an offbeat destination that promises peace and natural beauty. With its untouched landscapes, dense forests, and stunning viewpoints, it is perfect for those looking to unwind away from the crowds. Whether it’s trekking, birdwatching, or simply soaking in the serene surroundings, Sajé offers a refreshing break from everyday life.`,
        },
        resortData: [
          {
            title: "Little Konkan Farmhouse 01 to 32",
            subHeading: "Residences",
            picture: saje1,
            description: `A hidden paradise waiting to be explored, Sajé is an offbeat destination that promises peace and natural beauty. With its untouched landscapes, dense forests, and stunning viewpoints, it is perfect for those looking to unwind away from the crowds. Whether it’s trekking, birdwatching, or simply soaking in the serene surroundings, Sajé offers a refreshing break from everyday life.`,
          },
          {
            title: "Casa Portuga 01 to 48",
            subHeading: "Residences",
            picture: saje2,
            description: `A hidden paradise waiting to be explored, Sajé is an offbeat destination that promises peace and natural beauty. With its untouched landscapes, dense forests, and stunning viewpoints, it is perfect for those looking to unwind away from the crowds. Whether it’s trekking, birdwatching, or simply soaking in the serene surroundings, Sajé offers a refreshing break from everyday life.`,
          },
        ],
      },

      {
        text: "Satpura Tiger Reserve",
        link: "/satpuraTigerReserve",
        state: "MP",
        bannerImg: satpuraTigerReserve,

        header: {
          title: "Satpura Tiger Reserve",
          description: `Nestled in the heart of Madhya Pradesh, Satpura Tiger Reserve is a gem for wildlife lovers and adventure seekers. Unlike other crowded reserves, Satpura offers a unique, immersive experience with walking safaris, canoeing, and jeep rides through dense forests teeming with wildlife. Home to majestic tigers, leopards, sloth bears, and over 300 bird species, it’s a paradise for nature enthusiasts. The rugged terrain, scenic landscapes, and tranquil Denwa River make it a perfect escape into the wild.`,
        },
        resortData: [
          {
            title: "Kamti Kula",
            subHeading: "Hotels & Resorts",
            picture: satpuraTigerReserve_1,
            description: `Nestled in the heart of Madhya Pradesh, Satpura Tiger Reserve is a gem for wildlife lovers and adventure seekers. Unlike other crowded reserves, Satpura offers a unique, immersive experience with walking safaris, canoeing, and jeep rides through dense forests teeming with wildlife. Home to majestic tigers, leopards, sloth bears, and over 300 bird species, it’s a paradise for nature enthusiasts. The rugged terrain, scenic landscapes, and tranquil Denwa River make it a perfect escape into the wild.`,
          },
        ],
      },
      {
        text: "Varanasi",
        link: "/varanasi",
        state: "UP",
        bannerImg: varanasi,

        header: {
          title: "Varanasi",
          description: `The spiritual heart of India is one of the oldest living cities in the world. Situated on the banks of the sacred Ganges, it is a mesmerizing blend of ancient temples, bustling ghats, and deep-rooted traditions. From the enchanting Ganga Aarti at Dashashwamedh Ghat to the narrow alleys filled with history, every corner of Varanasi tells a timeless story. Whether you seek spiritual enlightenment or cultural exploration, Varanasi offers an experience like no other.`,
        },
        resortData: [
          {
            title: "Baheri House",
            subHeading: "Residences",
            picture: varanasi_1,
            description: `The spiritual heart of India is one of the oldest living cities in the world. Situated on the banks of the sacred Ganges, it is a mesmerizing blend of ancient temples, bustling ghats, and deep-rooted traditions. From the enchanting Ganga Aarti at Dashashwamedh Ghat to the narrow alleys filled with history, every corner of Varanasi tells a timeless story. Whether you seek spiritual enlightenment or cultural exploration, Varanasi offers an experience like no other.`,
          },
        ],
      },
    ],
  },
];

export {
  testimonials,
  navbarData,
  destinationsDropdown,
  hotelsAndResortsDropdown,
};
