// App.jsx

import logo from './logo.svg';
import './App.css';

// Your existing imports are perfect
import Header from './components/Header/Header';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from './components/UI/Services';

// FIX: Add the missing import statement for the About component
import About from './components/UI/About'; // Make sure this path is correct!

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      {/* Now this line will work because 'About' has been imported */}
      <About /> 
    </>
  );
}

export default App;