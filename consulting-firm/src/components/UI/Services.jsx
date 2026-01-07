import React, { useEffect, useRef } from "react";
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
  const cardsRef = useRef([]);
  // Ref to store the latest intersection ratio for each card, keyed by index
  const ratiosRef = useRef({});

  useEffect(() => {
    // 📱 phone only
    if (!window.matchMedia("(max-width: 576px)").matches) return;

    const cards = cardsRef.current;
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Step 1: Update our record of the current intersection ratios
        entries.forEach(entry => {
          ratiosRef.current[entry.target.dataset.index] = entry.intersectionRatio;
          
          // Also handle the one-time "appear" animation
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });

        // Step 2: Find the index of the card that is MOST visible right now
        let mostVisibleIndex = null;
        let maxRatio = 0;

        Object.entries(ratiosRef.current).forEach(([index, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleIndex = index;
          }
        });
        
        // Step 3: Apply the 'active' (shine) class ONLY to the most visible card
        cards.forEach((card, index) => {
          // Compare index as string since dataset attributes are strings
          if (index.toString() === mostVisibleIndex) {
            card.classList.add("is-active");
          } else {
            card.classList.remove("is-active");
          }
        });
      },
      {
        // A highly granular threshold list gives us constant updates
        // for very smooth transitions between active cards.
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    cards.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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
            <div 
              className="services__item" 
              key={index}
              ref={el => cardsRef.current[index] = el}
              data-index={index} // Add a data-index for identification
            >
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