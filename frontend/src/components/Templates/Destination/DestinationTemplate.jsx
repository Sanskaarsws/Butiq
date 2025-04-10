import { useLocation } from "react-router-dom";
import HotelComponent from "@/components/Templates/HotelComponent/HotelComponent";
import Header from "@/components/Templates/Header/Header";
import "./DestinationTemplate.css";

export default function DestinationTemplate() {
  const location = useLocation();
  const destinationData = location.state?.data || {};

  return (
    <div style={{ backgroundColor: "#fcfcfa" }}>
      <Header
        title={`${destinationData?.text.toUpperCase()}, ${
          destinationData?.state
        }`}
        bannerImg={destinationData?.bannerImg}
      />
      <br />
      <br />
      <br />
      <article className="destinationHeader">
        <h2>{`${destinationData?.header?.title.toUpperCase()}, ${
          destinationData?.state
        }`}</h2>
        <p className="destinationDescription">
          {destinationData?.header?.description}
        </p>
      </article>
      {destinationData.resortData.map((resort, index) => {
        return (
          <HotelComponent
            isRight={index % 2 == 0}
            title={resort.title}
            subHeading={resort.subHeading}
            description={resort.description}
            buttonText="Explore More"
            imageUrl={resort.picture}
          />
        );
      })}
    </div>
  );
}

