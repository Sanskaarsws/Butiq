// import React from "react";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const HotelComponent = ({
  title,
  description,
  subHeading,
  buttonText,
  imageUrl,
  isRight,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center h-[50rem] mx-[5rem]  rounded-lg overflow-hidden mb-[2rem] ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className=" flex-1">
        <h2
          className="text-2xl  mb-1 font-Raleway"
          style={{ fontFamily: "Raleway" }}
        >
          {title?.toUpperCase()}
        </h2>
        <h4 className="mb-6 text-[0.9rem]">{subHeading}</h4>
        <p
          className="text-gray-600 mb-6"
          style={{ fontFamily: "Glacial Indifference", lineHeight: "normal" }}
        >
          {description}
        </p>
        <span
          className="  transition "
          style={{
            borderBottom: "1px solid black",
            fontSize: "14px",
            fontFamily: "Raleway",
          }}
        >
          {buttonText?.toUpperCase()}
        </span>
      </div>

      {/* Image Section */}
      <div className="flex-1 p-6 h-[700px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover md:h-[100%]"
        />
      </div>
    </div>
  );
};

HotelComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HotelComponent.defaultProps = {
  className: "",
};

export default HotelComponent;
