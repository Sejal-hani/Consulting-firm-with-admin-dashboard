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
    <div className="slider__item" id = 'Testimonial'>
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
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  swipeToSlide: true,
  adaptiveHeight: false,
};

  const testimonialData = [
    {
      name: "John Doe",
      role: "Sr. Product Designer",
      img: ava01,
      content:
"They helped us move faster without sacrificing quality. The technical guidance and strategic input were critical during our early growth phase.",},

    {
      name: "Sarah Lee",
      role: "Marketing Lead",
      img: ava02,
content:
"From planning to delivery, the process was smooth and transparent. We gained practical insights that directly improved our campaign performance and ROI.",
    },
    {
      name: "Alex Smith",
      role: "Startup Founder",
      img: ava03,
content:
"The team delivered exactly what we needed — a scalable, well-architected solution that aligned with our product vision. Their communication and execution quality exceeded expectations.",
    },
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <div className="slider__content-top">
<h6 className="subtitle">Client Testimonials</h6>
<h2>
  Trusted by Growing Teams & <span className="highlight">Global Businesses</span>
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