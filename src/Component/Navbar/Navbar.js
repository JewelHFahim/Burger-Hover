import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='snip1226 navanim'>
                <li><a href="#!" data-hover="Home">Home</a></li>
                <li><a href="#!" data-hover="Ingredients">Ingredients</a></li>
                <li><a href="#!" data-hover="About Us">About Us</a></li>
                <li><a href="#!" data-hover="Contact Us">Contact Us</a></li>
            </ul>
        </div>
    );
};

export default Navbar;