import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './styles/app.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles/constants.css'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };

  return (
    <div className='App'>
      {location.pathname !== '/' && (
        <button className="back-button" onClick={handleGoBack}>
          <ArrowBackIcon style={{ fontSize: '100px', color: 'var(--apricot)' }} />
        </button>
      )}

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
