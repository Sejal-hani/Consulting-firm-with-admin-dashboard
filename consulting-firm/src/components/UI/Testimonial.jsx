import React, { useState } from "react";
import "../../styles/Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

// Sub-component to manage individual expansion states
const TestimonialItem = ({ content, name, role, img }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="slider__item">
      <div className="slider__item-content">
        <p
          className={`description ${isExpanded ? "expanded" : ""}`}
          // Prevents the slider from swiping when you are trying to scroll the text
          onMouseDown={(e) => isExpanded && e.stopPropagation()}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          “{content}”
        </p>

        <div className="customer__details-group">
          <div className="customer__details">
            <div className="customer__img">
              <img src={img} alt={name} />
            </div>
          </div>
          <h5 className="customer__name">{name}</h5>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true, // Smoothly adjusts slider height
  };

  const testimonialData = [
    {
      name: "John Doe",
      role: "Sr. Product Designer",
      img: ava01,
      content:
        "The consulting services provided were exceptional.  dolorum incidunt explicabo, perferendis nemo, itaque repellat consectetur quia sequi beatae! Unde dolor quidem voluptatum iste!",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Lead",
      img: ava02,
      content: "Professional, reliable, and result-oriented service. Their team was always available to answer our questions and provided valuable insights throughout the project.",
    },
    {
      name: "Alex Smith",
      role: "Startup Founder",
      img: ava03,
      content: "They helped us scale faster than expected. The technical support and strategic advice were game-changers for our early-stage growth.",
    },
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than <span className="highlight">5000 customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <TestimonialItem key={index} {...item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;