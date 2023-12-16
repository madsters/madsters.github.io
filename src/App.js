import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './styles/app.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="Home">
        <header className="App-header">
          <p>Madeleine Neaves</p>
        </header>
        <Navbar />
    </div>
    
  );
}

export default App;
