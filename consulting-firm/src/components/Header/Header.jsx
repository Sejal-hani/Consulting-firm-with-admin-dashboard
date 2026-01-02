import React from 'react';
import PropTypes from 'prop-types';

import "./Header.css";

const nav__links =[ 
    {
        path: '#home',
        display: 'Home'
    },

    {
        path: '#about',
        display: 'About'
    },

    {
        path: '#services',
        display: 'Services'
    },

    {
        path: '#projects',
        display: 'Projects'
    },

    {
        path: '#careers',
        display: 'Careers'
    },

    {
        path: '#contact',
        display: 'Contact us'
    },
]

const Header = props => {
  return (
    <header className="header">
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>IT Consulting</h2>
                </div>



                {/*============== {navigation} =========== */}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav__links.map((item,index)=>(
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">
                                        {item.display}
                                    </a>
                                </li> 

                            ))
                        }
                    </ul>
                </div>

                {/* ------------------{light mode}------------------ */}
                <div className="light__mode">
                     <span><i class="ri-sun-line"></i> Light Mode</span>
                </div>
            </div>
        </div>
    </header>
  )
}

Header.propTypes = {}

export default Header