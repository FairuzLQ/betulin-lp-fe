import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/Footer.css'; // Create and import CSS file for styling
import logo from '../assets/images/logo-hz.png'; // Make sure your image path is correct
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Example social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1: Logo and Motto */}
        <div className="footer__column">
          <div className="footer__logo">
            <img src={logo} alt="Logo" /> {/* Replace with actual logo if needed */}
          </div>
          <p className="footer__motto">Apapun kerusakan, betulin aja!</p>
        </div>

        {/* Column 2: Menu 1 */}
        <div className="footer__column">
          <ul className="footer__list">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/layanan">Layanan</Link>
            </li>
            <li>
              <Link to="/tentang-kami">Tentang Kami</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Menu 2 */}
        <div className="footer__column">
          <ul className="footer__list">
            <li>
              <Link to="/karir">Karir</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Terms and Privacy */}
        <div className="footer__column">
          <ul className="footer__list">
            <li>
              <Link to="/syarat-ketentuan">Syarat & Ketentuan</Link>
            </li>
            <li>
              <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Add a horizontal break line */}
      <hr className="footer__divider" />

      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <p>© 2024 PT Rumah Masa Kini. All rights reserved.</p>
        </div>
        <div className="footer__bottom-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer__social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer__social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
