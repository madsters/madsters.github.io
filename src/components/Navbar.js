import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import '../styles/navbar.css';
import Home from './pages/Home.js';

function Navbar() {

    // Conditionally render the Navbar only on the homepage
    const isHomepage = window.location.pathname === '/';
    if (!isHomepage) {
        return null;
    }


  return (
    <div className='Routes'>
      <nav>
        <Link className='Route' to="/about">PROFILE</Link>
        <Link className='Route' to="/projects">PROJECTS</Link>
        <Link className='Route' to="/contact">CONTACT</Link>
      </nav>
    </div>
  );
}

export default Navbar;
