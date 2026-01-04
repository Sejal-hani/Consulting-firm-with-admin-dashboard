import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Footer from './components/UI/Footer';
import Contact from './components/UI/Contact';


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme ={theme}/>
      
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
