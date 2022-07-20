import './App.css';
import React from 'react';
import { Link } from "react-router-dom"
function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <Link style={navStyle} to = "/">
        <h3>Tenzies</h3>
        </Link>
        <ul className='nav-links'>
            <Link style = {navStyle} to='/about'>
            <li>How To Play</li>
            </Link>
            <Link style = {navStyle} to="/tenzies">
            <li>Play Game</li>
            </Link>
            <Link style = {navStyle} to="/shop">
            <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
