import React from "react";
import "../../styles/About.css";
import aboutImg from "../../images/about-img01.png";

const chooseData = [
  {
    icon: "ri-wifi-line",
title: "Agile & Transparent Execution",    description:
  "We follow agile workflows with clear communication, fast iterations, and on-time delivery to keep projects moving efficiently.",

  },
  {
    icon: "ri-team-line",
    title: "Experienced Technology Experts",

    description:
  "Our team consists of skilled engineers, designers, and consultants with hands-on experience across modern technologies.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Customer Support",
    description:
  "We provide ongoing support, maintenance, and optimization to ensure your systems remain secure and future-ready.",

  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">

          {/* LEFT CONTENT */}
          <div className="about__content">
            <h6 className="subtitle">Why Choose Infrabyte</h6>
            <h2>We Deliver Scalable, Secure</h2>
<h3>IT Solutions That Drive Growth</h3>
<p className="description">
  We partner with startups, SMEs, and enterprises to design and deliver
  technology solutions that solve real business challenges. Our focus is
  on performance, security, and long-term scalability.
</p>
            <div className="choose__us-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>

                  <div className="choose__text">
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="choose__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about__img">
            <img src={aboutImg} alt="About Us" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
