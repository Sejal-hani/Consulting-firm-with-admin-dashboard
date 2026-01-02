import React from 'react';
import '../../styles/Hero.css';

// 1. You import the image and its path is now stored in the 'heroDarkImg' variable.
import heroDarkImg from '../../images/hero-img.png';

const Hero = () => {
  // 2. The className attribute is now correctly placed INSIDE the opening section tag.
  return (
    <section className='hero__section'>
      <div className="container">
        {/* It's good practice to add a wrapper for flexbox layouts */}
        <div className="hero__wrapper"> 
          <div className="hero__content">
            <h2>We're Creating Perfect</h2>
            <h2>Digital Products</h2>
            <h2 className="highlight">Promote your brand</h2> {/* Corrected "you" to "your" */}
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad
              eos sint tempora ipsam laborum, similique hic, ipsum laboriosam
              blanditiis eum porro itaque quas minus. Laboriosam rerum animi
              perferendis tempore?
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button> {/* Added text to the button */}
            </div>
          </div>

          <div className="hero__img">
            {/* 3. Use the 'heroDarkImg' variable in the src attribute.
               It must be inside curly braces {} because it's a JavaScript variable. */}
            <img src={heroDarkImg} alt="Digital products promotion" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;