import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Docs from './components/Docs';

function App() {
  return (
    <body>
      <Navbar />
      <div className="image">
        <img src="./headset.svg" alt="hero-img" />
      </div>
      <Hero />
      <About />
      <Docs />
    </body>
  )
}

export default App;

