import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const TestimonialSlider = ({
  testimonials,
  autoplaySpeed = 4000,
  showArrows = true,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    arrows: false, // Removed left and right buttons
    customPaging: () => (
      <div
        className="w-2 h-2 rounded-full bg-gray-500 mx-1"
        style={{ display: "none" }}
      ></div>
    ), // Custom dot style
    dotsClass: "slick-dots flex justify-center space-x-2", // Tailwind styling for dots
  };

  return (
    <div className="w-[85%] p-10  text-center">
      <img
        src="https://d245xcy5u3wmzt.cloudfront.net/assets/images/banners/home/plane_c.png"
        alt="Airplane Icon"
        className="w-20 mx-auto mb-6"
      />
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 testimonialSliderCard">
            <p className="  ">“{testimonial.quote}”</p>
            <hr className="divider min-w-16 border-black" />
            <p className="mt-4 text-sm ">{testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
