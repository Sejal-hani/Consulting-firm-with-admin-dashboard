import React from "react";
import "../../styles/About.css";
import aboutImg from "../../images/about-img.png";

// The data for the items you want to display
const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Fast working process",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis labore placeat vel possimus.",
  },
  {
    icon: "ri-team-line",
    title: "Expert Team Members",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis labore placeat vel possimus.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Customer Support",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis labore placeat vel possimus.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        {/* A wrapper for the two-column layout */}
        <div className="about__wrapper">
        
          {/*============ LEFT CONTENT ============*/}
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>We are committed to delivering the best consulting services</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="choose__us-wrapper">
              {/* 
                FIX 1: Use curly braces {} to run JavaScript in JSX.
                FIX 2: map() over the chooseData array.
              */}
              {chooseData.map((item, index) => (
                // FIX 3: Add a unique 'key' prop for React's list rendering.
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    {/* FIX 4: Use the dynamic icon from the item object. */}
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    {/* FIX 5: Use the dynamic title and description. */}
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*============ RIGHT IMAGE ============*/}
          <div className="about__img">
            <img src={aboutImg} alt="About Us" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;