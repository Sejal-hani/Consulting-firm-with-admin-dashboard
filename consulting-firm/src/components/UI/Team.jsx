import React, { useEffect, useRef } from "react";
import "../../styles/Team.css";

import team01 from "../../images/team-01.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Sunidhi",
    position: "Senior Software Engineer",
  },
  {
    imgUrl: team03,
    name: "Amit Sharma",
    position: "Business & Technology Analyst",
  },
  {
    imgUrl: team04,
    name: "Pari Hiran",
    position: "Project Manager",
  },
];

const Team = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // 📱 Phone only logic
    if (!window.matchMedia("(max-width: 576px)").matches) return;

    const cards = cardsRef.current;
    if (cards.length === 0) return;

    // --- Part 1: Observer for the one-time "appear" animation ---
    const appearObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => {
      if (card) appearObserver.observe(card);
    });

    // --- Part 2: Scroll listener for the "active" shine effect ---
    const handleScroll = () => {
      const screenCenter = window.innerHeight / 2;
      let closestCard = null;
      let minDistance = Infinity;

      cards.forEach(card => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(screenCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCard = card;
        }
      });

      // Loop through all cards to apply/remove the active class
      cards.forEach(card => {
        if (card === closestCard) {
          card.classList.add("is-active");
        } else {
          card.classList.remove("is-active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on load to set the initial active card

    // --- Cleanup function ---
    return () => {
      appearObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="our__team" id="careers">
      <div className="container">
        {/* Section Header */}
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet the Minds Behind <span className="highlight">Our Solutions</span>
          </h2>
        </div>

        {/* Team Cards */}
        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div 
              className="team__item" 
              key={index}
              ref={el => (cardsRef.current[index] = el)}
            >
              <div className="team__img">
                <img src={item.imgUrl} alt={item.name} />
              </div>

              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span><i className="ri-linkedin-line"></i></span>
                  <span><i className="ri-facebook-circle-line"></i></span>
                  <span><i className="ri-twitter-line"></i></span>
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