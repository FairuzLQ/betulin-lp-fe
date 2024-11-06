import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../styles/Navbar.css';
import logo from '../assets/images/logo-hz.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBlogAvailable, setIsBlogAvailable] = useState(false);

  // Toggle the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu on link click
  const closeMenu = () => setMenuOpen(false);

  // Check if Blog API is available and has data
  useEffect(() => {
    const checkBlogAvailability = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels`);
        if (response.ok) {
          const result = await response.json();
          // Check if there are any articles in the response data
          if (result.data && result.data.length > 0) {
            setIsBlogAvailable(true); // API is available and has articles
          } else {
            setIsBlogAvailable(false); // API available but no articles
          }
        } else {
          setIsBlogAvailable(false); // API not available
        }
      } catch (error) {
        console.error('Error checking blog API:', error);
        setIsBlogAvailable(false);
      }
    };

    checkBlogAvailability();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <nav className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink exact to="/" className="navbar__link" activeClassName="active-link" onClick={closeMenu}>
              Beranda
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/layanan" className="navbar__link" activeClassName="active-link" onClick={closeMenu}>
              Layanan
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/tentang-kami" className="navbar__link" activeClassName="active-link" onClick={closeMenu}>
              Tentang Kami
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/karir" className="navbar__link" activeClassName="active-link" onClick={closeMenu}>
              Karir
            </NavLink>
          </li>
          {isBlogAvailable && ( // Conditionally render the Blog link
            <li className="navbar__item">
              <NavLink to="/blog" className="navbar__link" activeClassName="active-link" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </div>
    </header>
  );
};

export default Navbar;
