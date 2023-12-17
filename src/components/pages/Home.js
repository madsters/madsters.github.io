import React from 'react';
import '../../styles/app.css';
import Navbar from '../Navbar.js';

function Home () {
    return (
        <div className='Page' id='Home'>
            <header className="App-header">
                <p>Madeleine Neaves</p>
            </header>
            <Navbar />
        </div>
    );
};

export default Home;
