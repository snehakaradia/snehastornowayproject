import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
 <nav className="navbar">
        <NavLink to='/' className="logo"><img src="https://assets.zyrosite.com/stornowayj2oil/STORNOWAY-mp8BzrvVN6U1ZJEn.svg" alt=""></img></NavLink>
        <div className="nav-links">
            <ul className="nav-menu">
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Project'>Project</NavLink></li>
                <li><NavLink to='/Service'>Service</NavLink></li>
                <li><NavLink to='/Career'>Career</NavLink></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
                <li><NavLink to='/Signup'>Signup</NavLink></li>
                <li><NavLink to='/Logout'>Logout</NavLink></li>
            </ul>
        </div>
        <i className='bx bx-grid-alt menu-hamburger'></i>
    </nav>
    </div>
  )
}

export default Navbar;