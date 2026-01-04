import React from 'react';
import '../../styles/Footer.css';

const quickLinks01 = [
  { path: '#services', display: 'AI & Automation Solutions' },
  { path: '#services', display: 'Custom Software & Web Development' },
  { path: '#services', display: 'Digital Marketing Services' },
  { path: '#services', display: 'E-commerce Solutions' },
  { path: '#services', display: 'Mobile App Development' },
];

const quickLinks02 = [
  { path: '#contact', display: 'Contact Support' },
  { path: '#contact', display: 'Request Consultation' },
  { path: '#contact', display: 'Technical Assistance' },
];


const quickLinks03 = [
  { path: '#about', display: 'About Us' },
  { path: '#team', display: 'Our Team' },
  { path: '#blog', display: 'Blog' },
  { path: '#testimonial', display: 'Testimonials' },
  { path: '#contact', display: 'Contact Us' },
];



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          
          {/* Brand Column */}
          <div className="footer__logo">
            <h2 className="logo">Infrabyte</h2>
            <p className="description">
              Building the future of digital infrastructure. We help startups 
              scale faster than ever with optimized cloud solutions.
            </p>
            <div className="social__links">
              <span><i className="ri-facebook-line"></i></span>
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-linkedin-line"></i></span>
              <span><i className="ri-twitter-line"></i></span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="copyright">
            © {year} Made by Sejal Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;