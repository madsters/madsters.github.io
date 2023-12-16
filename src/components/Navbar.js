import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='Routes'>
      <nav>
        <Link className='Route' to="/about">ABOUT</Link>
        <Link className='Route' to="/projects">PROJECTS</Link>
        <Link className='Route' to="/contact">CONTACT</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navbar;
