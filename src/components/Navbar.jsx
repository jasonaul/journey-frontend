import React from 'react';
import {Link} from "react-router-dom"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return(
     <nav className="navbarPrime bg-white container">
       <header className='navbar'>
        <div className='navbar__title navbar__item'><a href="/"><img id="headerLogo" src="https://i.imgur.com/5DNJU43.png" alt="Journey"></img></a></div>
        <div className='navbar__item'><a id="noLink" href="/">Home</a></div>
        <div className='navbar__item'><a id="noLink" href="/events">Events</a></div>
        <div className='navbar__item'><a id="noLink" href="/FAQ">FAQ</a></div>
        <div className='navbar__item'>Login</div>
        <div className='navbar__item'>Sign Up</div>        
    </header>
    </nav>
)}}

export default Navbar;