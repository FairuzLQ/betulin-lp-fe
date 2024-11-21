import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/images/logo-betulin-hd.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaDiscord,
  FaSpotify,
} from 'react-icons/fa';

const Footer = () => {
  const [isBlogAvailable, setIsBlogAvailable] = useState(false);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  // Check if Blog API is available
  useEffect(() => {
    const checkBlogAvailability = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels`);
        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.length > 0) {
            setIsBlogAvailable(true);
          } else {
            setIsBlogAvailable(false);
          }
        } else {
          setIsBlogAvailable(false);
        }
      } catch (error) {
        console.error('Error checking blog API:', error);
        setIsBlogAvailable(false);
      }
    };

    checkBlogAvailability();
  }, []);

  // Fetch Social Media Links
  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/social-media-footers`);
        const data = await response.json();
        setSocialMediaLinks(data.data);
      } catch (error) {
        console.error('Error fetching social media links:', error);
      }
    };

    fetchSocialMediaLinks();
  }, []);

  // Mapping Social Media API response to appropriate FontAwesome Icons
  const getSocialMediaIcon = (socialMedia) => {
    switch (socialMedia) {
      case 'threads':
        return <FaFacebook className="footer__social-icon" />;
      case 'twitter':
        return <FaTwitter className="footer__social-icon" />;
      case 'instagram':
        return <FaInstagram className="footer__social-icon" />;
      case 'youtube':
        return <FaYoutube className="footer__social-icon" />;
      case 'tiktok':
        return <FaTiktok className="footer__social-icon" />;
      case 'whatsapp':
        return <FaWhatsapp className="footer__social-icon" />;
      case 'discord':
        return <FaDiscord className="footer__social-icon" />;
      case 'spotify':
        return <FaSpotify className="footer__social-icon" />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1: Logo and Motto */}
        <div className="footer__column">
          <div className="footer__logo-container">
            <img src={logo} alt="Logo" className="footer__logo" />
            <p className="footer__motto">Apapun masalahnya, Betulin aja!</p>
          </div>
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
            {isBlogAvailable && (
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            )}
            <li>
              <Link to="/kontak-kami">Kontak</Link>
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
            <li>
              <Link to="/faq">Bantuan</Link>
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
          {socialMediaLinks.map((link) => (
            <a key={link.id} href={`https://${link.SocialMediaLink}`} target="_blank" rel="noopener noreferrer">
              {getSocialMediaIcon(link.SocialMedia)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
