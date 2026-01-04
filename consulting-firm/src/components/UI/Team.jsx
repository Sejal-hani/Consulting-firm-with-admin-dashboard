import React from "react";
import "../../styles/Team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Johnny Doe",
    position: "Software Engineer",
  },
 
  {
    imgUrl: team03,
    name: "Michael Lee",
    position: "Business Analyst",
  },
  {
    imgUrl: team04,
    name: "Emily Brown",
    position: "Project Manager",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        {/* Section Header */}
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet With <span className="highlight">Our Experts</span>
          </h2>
        </div>

        {/* Team Cards */}
        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt={item.name} />
              </div>

              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-circle-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
