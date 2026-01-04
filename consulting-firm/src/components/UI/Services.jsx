import React from "react";
import "../../styles/Services.css";

const servicesData = [
  {
    icon: "ri-apps-line",
title: " App Development",
description: "High-performance iOS, Android, and cross-platform apps built for scale.",
  },
  {
    icon: "ri-code-s-slash-line",
title: " Web Development",
description: "Secure, scalable web and software solutions for growing businesses.",
  },
  {
    icon: "ri-computer-line",
title: "AI & IT Consulting",
description: "Secure, scalable web and software solutions for growing businesses.",
  },

    {
    icon: "ri-bar-chart-line",
title: "Digital Marketing",
description: "SEO and performance-driven marketing focused on real growth.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
         <h2>End-to-End IT Services Designed</h2>
<h3 className="services__heading">to Scale Your Business</h3>


        </div>

        <div className="services__item-wrapper">
          {servicesData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="services__item-icon">
                <i className={item.icon}></i>
              </span>

              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
