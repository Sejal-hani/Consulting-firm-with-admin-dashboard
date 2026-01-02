import React from "react";
import "../../styles/Services.css";

const servicesData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: "ri-computer-line",
    title: "IT Consultancy",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },

    {
    icon: "ri-bar-chart-line",
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2>Our best Services</h2>
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
