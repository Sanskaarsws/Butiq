import React from "react";
import PropTypes from "prop-types";

export default function Header({ title, bannerImg }) {
  return (
    <header className="w-full">
      <div className="relative h-[85vh]">
        <img
          src={bannerImg}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            style={{ background: "rgba(0, 0, 0, 0.801)" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium relative px-8 py-4"
          >
            <span className="absolute inset-0 bg-black bg-opacity-80 -z-10 w-[150%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bannerImg: PropTypes.string.isRequired,
};
