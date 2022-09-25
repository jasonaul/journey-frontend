import React from 'react';
// import {} from 'react-router-dom';

function Navbar() {
    return <nav className="navbarPrime bg-white container">
       <header className='navbar'>
        <div className='navbar__title navbar__item'><a href="/"><img id="headerLogo" src="https://i.imgur.com/5DNJU43.png" alt="Journey"></img></a></div>
        <div className='navbar__item'>Events</div>
        <div className='navbar__item'>Login</div>
        <div className='navbar__item'>Sign Up</div>        
    </header>
    </nav>
}

export default Navbar;