import React from 'react';
import './NavBar.css'; // Assuming you will style the NavBar in a CSS file
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <div className="navbar-links">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="navbar-buttons">
                <button className="btn-signin">Sign In</button>
                <button className="btn-signup">Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;

