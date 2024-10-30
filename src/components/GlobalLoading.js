// src/components/GlobalLoading.js
import React from 'react';
import '../styles/GlobalLoading.css'; // Create a CSS file for the global loading styles
import { useLoading } from '../contexts/LoadingContext';

const GlobalLoading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null; // Return null if not loading

  return (
    <div className="global-loading-container">
      <div className="global-loading-spinner">
        <div className="spinner-circle spinner-circle1"></div>
        <div className="spinner-circle spinner-circle2"></div>
        <div className="spinner-circle spinner-circle3"></div>
      </div>
    </div>
  );
};

export default GlobalLoading;
