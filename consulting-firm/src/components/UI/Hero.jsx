import React from 'react';
import '../../styles/Hero.css';

import heroDarkImg from '../../images/hero-img.png';
import lightHeroBg from '../../images/light-hero-bg.jpg';

const Hero = ({ theme }) => {
  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">

          <div className="hero__content">
            <h2>Future-Ready IT Solutions</h2>
<h2>That Power Business Growth</h2>
<h2 className="highlight">Built for Scale & Performance</h2>



            <div className="hero__btns">
              {/* Linked to services section */}
              <button 
                className="primary__btn" 
                onClick={() => window.location.href = '#services'}
              >
                Get Started Now
              </button>

              {/* Fixed: Changed 'blog' to '#about' to scroll correctly */}
              <button 
                className="secondary__btn"
                onClick={() => window.location.href = '#about'}
              >
                Discover More
              </button>
            </div>
          </div> {/* Added missing closing tag for hero__content */}

          <div className="hero__img">
            <img
              src={theme === 'light' ? lightHeroBg : heroDarkImg}
              alt="Digital products promotion"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;