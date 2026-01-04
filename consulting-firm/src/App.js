// App.jsx

import logo from './logo.svg';
import './App.css';

// Your existing imports are perfect
import Header from './components/Header/Header';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from './components/UI/Services';
import Testimonial from './components/UI/Testimonial';


// FIX: Add the missing import statement for the About component
import About from './components/UI/About'; // Make sure this path is correct!
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
       <About /> 
      <Team />
      <Blog/>
      <Testimonial />
     
    </>
  );
}

export default App;