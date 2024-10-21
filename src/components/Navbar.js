import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import '../styles/Navbar.css'; // Ensure your CSS is imported
import logo from '../assets/images/logo-hz.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu on link click
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <nav className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              exact
              to="/"
              className="navbar__link"
              activeClassName="active-link"
              onClick={closeMenu} // Close menu on click
            >
              Beranda
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/layanan"
              className="navbar__link"
              activeClassName="active-link"
              onClick={closeMenu} // Close menu on click
            >
              Layanan
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/tentang-kami"
              className="navbar__link"
              activeClassName="active-link"
              onClick={closeMenu} // Close menu on click
            >
              Tentang Kami
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/karir"
              className="navbar__link"
              activeClassName="active-link"
              onClick={closeMenu} // Close menu on click
            >
              Karir
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/blog"
              className="navbar__link"
              activeClassName="active-link"
              onClick={closeMenu} // Close menu on click
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </div>
    </header>
  );
};

export default Navbar;
