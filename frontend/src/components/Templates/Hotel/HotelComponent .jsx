// import React from "react";
import PropTypes from "prop-types";

const HotelComponent = ({
  title,
  description,
  buttonText,
  imageUrl,
  isRight,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center h-[30rem] mx-[5rem] bg-white rounded-lg overflow-hidden mb-8 ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href="#"
          className="text-blue-500 underline hover:text-blue-700 transition"
        >
          {buttonText}
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover md:h-auto"
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
