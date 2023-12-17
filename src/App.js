import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './styles/app.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    
  );
}

export default App;
