import React from 'react';
import '../../styles/app.css';
import Navbar from '../Navbar.js';
import '../../styles/constants.css';
import '../../styles/home.css';

function Home () {
    return (
        <div className='Page' id='Home'>
            <header className="App-header">
                <h4>Madeleine Neaves</h4>
            </header>
            <Navbar />
        </div>
    );
};

export default Home;
