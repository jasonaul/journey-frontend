import React from 'react';


class Navbar extends React.Component {
    render(){
        return(
     <nav className="navbarPrime bg-white container">
       <header className='navbar'>
        <div className='navbar_title navbar__item'><a href="/"><img id="headerLogo" src="https://i.imgur.com/5DNJU43.png" alt="Journey"></img></a></div>
        <div className='navbar_item'><a id="noLink" href="/">Home</a></div>
        <div className='navbar_item'><a id="noLink" href="/events">Events</a></div>
        <div className='navbar_item'><a id="noLink" href="/FAQ">FAQ</a></div>
        <div className='navbar_item'>Login</div>
        <div className='navbar_item'>Sign Up</div>        
    </header>
    </nav>
)}}

export default Navbar;