import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './assets/css/App.css';

import Welcome from './components/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Welcome name="React App" />

        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link> </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      
      
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
