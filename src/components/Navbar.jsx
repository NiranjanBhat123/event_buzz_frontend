import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" style={{ fontSize: "2rem" }}>
          Event Buzz
        </NavLink>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav__link active" : "nav__link"} 
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
              >
                About Us
              </NavLink>
            </li>
            <li>
            <NavLink 
                to="/host" 
                className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
              >
                Host an event
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
