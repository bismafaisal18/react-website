import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Nav/Navbar.css';
import logo from '../../images/logooo.png';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <h3 className="navbar-logo">
        <img src={logo} alt="Logo" />
      </h3>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <NavLink to="/products-all" className="product">
          Products
        </NavLink>
        <NavLink to="/about-us" className="about">
          About
        </NavLink>
        <NavLink to="/contact-us" className="contact">
          Contact
        </NavLink>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

function NavLink({ to, className, children }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  const linkStyles = {
    color: isActive ? 'yellow' : 'white',
    transform: isActive ? 'translateY(-2px)' : 'none',
    transition: 'color 0.3s, transform 0.3s',
  };

  return (
    <Link to={to} className={className} style={linkStyles}>
      <li className="nav-link-item">{children}</li>
    </Link>
  );
}

export default Navbar;
