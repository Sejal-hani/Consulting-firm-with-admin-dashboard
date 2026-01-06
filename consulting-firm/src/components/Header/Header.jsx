import React, { useRef } from 'react';
import PropTypes from 'prop-types';


import "./Header.css";

const nav__links = [
  { path: '#home', display: 'Home' },
  { path: '#about', display: 'About' },
  { path: '#services', display: 'Services' },
  { path: '#projects', display: 'Projects' },
  { path: '#contact', display: 'Careers' },
  { path: '#contact', display: 'Contact us' },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('menu__active');
  };

  return (
    <h1 style={{ color: "red" }}>DEPLOY TEST</h1>

    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">

          <div className="logo">
            <h2>Consulting</h2>
          </div>

          {/* Navigation */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu">
  {nav__links.map((item, index) => (
    <li className="menu__item" key={index}>
      <a
        href={item.path}
        className="menu__link"
        onClick={() => menuRef.current.classList.remove('menu__active')}
      >
        {item.display}
      </a>
    </li>
  ))}
</ul>

          </div>

          {/* Theme toggle */}
          <div className="light__mode" onClick={toggleTheme}>
            {theme === 'light' ? (
              <span>
                <i className="ri-moon-line"></i> Dark Mode
              </span>
            ) : (
              <span>
                <i className="ri-sun-line"></i> Light Mode
              </span>
            )}
          </div>

          {/* Mobile menu icon */}
          <div className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>

        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
