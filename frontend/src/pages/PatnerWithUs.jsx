import React from "react";
import "@/styles/PartnerWithUs.css";

import service_1 from "@/assets/images/conceptualizeImg.svg";
import service_2 from "@/assets/images/mobilizeImg.svg";
import service_3 from "@/assets/images/operateAndManage.svg";
import service_4 from "@/assets/images/marketAndSell.svg";

const PartnerWithUs = () => {
  return (
    <div className="partner-services-container">
      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-content">
          <h2>PARTNER WITH US</h2>
          <p>Does this sound interesting? Plan your Butiq property today.</p>
          <button className="partner-btn">Connect</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>SERVICES WE OFFER</h2>

        <div className="services-list flex flex-wrap justify-center gap-5 mt-0">
          <div className="service-item w-auto md:w-[30%]">
            <div className="service-image">
              <img src={service_1} alt="Service 1" />
            </div>
            <h3>CONCEPTUALIZE</h3>

            <p>
              <span className="text-black">
                Crafting boutique hospitality :{" "}
              </span>
              Top architect collaborations Empanelled bespoke designers Broad
              network of hoteliers
            </p>
          </div>
          <div className="service-item w-auto md:w-[30%]">
            <div className="service-image">
              <img src={service_2} alt="Service 2" />
            </div>

            <h3>MOBILIZE</h3>
            <p>
              <span className="text-black">Executing timeless spaces : </span>
              In house project experts Strong MEP & civil consultants Strategic
              supplier partnerships
            </p>
          </div>
          <div className="service-item w-auto md:w-[30%]">
            <div className="service-image">
              <img src={service_3} alt="Service 3" />
            </div>
            <h3>OPERATE & MANAGE</h3>
            <p>
              <span className="text-black">Running the show : </span>
              Brand operating standards Innovation through tech play Strong
              vendorship & staff management
            </p>
          </div>
          <div className="service-item w-auto md:w-[30%]">
            <div className="service-image">
              <img src={service_4} alt="Service 4" />
            </div>
            <h3>MARKET & SELL</h3>
            <p>
              <span className="text-black">Driving revenues & profits : </span>
              Industry partnerships & alliances Marketing & sales
              Expansion & growth
            </p>
          </div>
        </div>
        {/* <button className="learn-more-btn">Learn more</button> */}
      </section>
    </div>
  );
};

export default PartnerWithUs;
