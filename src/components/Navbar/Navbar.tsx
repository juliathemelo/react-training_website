import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const menuClick = () => setClick(!click)

    return (
      <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo"> LOGO_HERE </NavLink>   
            </div>
            <ul id="nav-routes" className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink to="/home" className="nav-links"> Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-links"> About </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-links"> Contact </NavLink>
                </li>
            </ul>
            <div className="nav-icon" onClick={menuClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  