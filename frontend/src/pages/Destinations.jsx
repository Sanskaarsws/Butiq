import "../styles/Destinations.css";
import "../styles/Experiences.css";

import HotelComponent from "@/components/Templates/HotelComponent/HotelComponent";
import expBanner from "@/assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import Header from "@/components/Templates/Header/Header";

import Hotel1 from "@/assets/images/hotel1.jpg";
import Hotel2 from "@/assets/images/hotel2.jpg";
import Hotel3 from "@/assets/images/hotel3.jpg";
import Hotel4 from "@/assets/images/hotel4.jpg";
import Hotel5 from "@/assets/images/hotel5.avif";
import Hotel6 from "@/assets/images/hotel6.jpg";

export default function Destinations() {


  const hotels = [
    {
      id: 1,
      title: "Bhopal",
      subTitle: "A luxurious serving Modern India",
      description: `Known as the "City of Lakes," Bhopal is home to both natural and artificial lakes, offering breathtaking views and a peaceful retreat from the city's hustle. It is often seen as a city with two faces—one side reflects its old-world charm with bustling bazaars, narrow alleys, and historic mosques. At the same time, the other boasts modern infrastructure, shopping malls, and upscale restaurants. Whether you stroll through the heritage sites of Old Bhopal or relax by the serene Upper Lake, every corner tells a different story. Come explore the beauty of Bhopal and make your stay unforgettable.`,
      buttonText: "Explore",
      imageUrl: Hotel1,
    },
    {
      id: 2,
      title: "Amrai Sheikhpura",
      subTitle: "A Sanctuary for Art, Nature, and Wellness",
      description:
        "Each villa is your personal retreat amidst nature. You can relax and rejuvenate at the wellness center, or indulge in local and royal cuisines at the restaurant, where everything is made using house-grown ingredients. The 12-acre estate, filled with over 10,000 Mango and Guava trees, offers a perfect backdrop for farming activities, village dining, and immersing yourself in creativity at the Art House.",
      buttonText: "Explore",
      imageUrl: Hotel2,
    },
    {
      id: 3,
      title: "Kamti Kula Satpura Tiger Reserve",
      subTitle: "A Serene Promise of Nature",
      description:
        "Set on a vast 42-acre land in the heart of a biosphere reserve, this place promises a unique and peaceful retreat. The property features luxurious suites designed for relaxation and comfort, surrounded by lush greenscapes that offer a calm, natural atmosphere. Enjoy a community-driven dining experience and unwind at the pool bar. The resort is also home to several natural water bodies, providing an environment for various activities and experiences, all combined to enhance your stay.",
      buttonText: "Explore",
      imageUrl: Hotel3,
    },
    {
      id: 4,
      title: "Baheri Benaras",
      subTitle: "A Heritage Stay, Handcrafted",
      description:
        "Reflecting the rich history of Agra and the deeply rooted family heritage of the property owners. The suites are distinctly designed, blending tradition with modern comforts. The property also features an alfresco global cuisine cafe, offering a limited, handcrafted menu exclusive to in-house guests. With lush outdoors, the setting invites relaxation and a deep connection to the cultural essence of the city.",
      buttonText: "Explore",
      imageUrl: Hotel4,
    },
    {
      id: 5,
      title: "The Ten Bhopal",
      subTitle: "A Contemporary Luxury in Bhopal",
      description:
        "Once home to a designer couple, located in the heart of Bhopal, India. This charming property captures the essence of both tradition and modern design. The highlight of the property is the award-winning alfresco restaurant. With lush outdoor spaces, it’s the perfect place to relax, dine, and enjoy the vibrant atmosphere of Bhopal.",
      buttonText: "Explore",
      imageUrl: Hotel5,
    },
    {
      id: 6,
      title: "The Ten Agra",
      subTitle: "An Exceptional Experience of Artistic Comfort",
      description:
        "You can enjoy a variety of dining options, including an alfresco café and a rooftop lounge, perfect for relaxing. The property also provides thoughtful services like complimentary breakfast & Wi-Fi, room service, and 24-hour concierge to enhance your stay, making it a great choice for those looking to experience the charm of Agra.",
      buttonText: "Explore",
      imageUrl: Hotel6,
    },
  ];

  return (
   
    <div style={{ backgroundColor: "#fcfcfa" }}>
      <Header title="EXPERIENCES" bannerImg={expBanner} />
      <br />
      <br />
      <br />
      {hotels.map((hotel, index) => (
        <HotelComponent
          isRight={index % 2 === 0}
          key={hotel.id}
          title={hotel.title}
          description={hotel.description}
          buttonText={hotel.buttonText}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </div>
  );
}
