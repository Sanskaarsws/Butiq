import React from "react";
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
      className={`flex flex-col ${
        isRight ? "md:flex-row-reverse" : "md:flex-row"
      } items-center mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-20 rounded-lg overflow-hidden mb-6 md:mb-8 lg:mb-12 gap-6 md:gap-8`}
    >
      {/* Text Section */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <h2
          className="text-xl sm:text-2xl md:text-3xl mb-1 font-bold"
          style={{ fontFamily: "Raleway" }}
        >
          {title?.toUpperCase()}
        </h2>
        <h4 className="mb-3 md:mb-4 text-sm sm:text-base">{subHeading}</h4>
        <p
          className="text-gray-600 mb-6 text-sm sm:text-base"
          style={{ fontFamily: "Glacial Indifference", lineHeight: "1.6" }}
        >
          {description}
        </p>
        <button
          className="group inline-flex items-center focus:outline-none"
          aria-label={buttonText}
        >
          <span
            className="text-xs sm:text-sm transition-all duration-300 border-b border-black pb-1 group-hover:border-gray-500 group-hover:text-gray-700"
            style={{ fontFamily: "Raleway" }}
          >
            {buttonText?.toUpperCase()}
          </span>
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full">
        <div className="aspect-square md:aspect-auto md:h-96 lg:h-[32rem] xl:h-[40rem] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

HotelComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
};

HotelComponent.defaultProps = {
  subHeading: "",
  isRight: false,
};

export default HotelComponent;
