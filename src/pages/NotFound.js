// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! Halaman yang kamu cari tidak ada.</p>
      <Link to="/" className="not-found-home-link">
        Go Back Home
      </Link>
      <div className="not-found-bg-animation">
        <span className="bg-circle"></span>
        <span className="bg-circle"></span>
        <span className="bg-circle"></span>
      </div>
    </div>
  );
};

export default NotFound;
