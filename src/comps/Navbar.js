import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMorePage = location.pathname === '/More'; // Checks if it's the "More" page

  // Navigation functions for navbar
  const navToHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const navToContact = (e) => {
    e.preventDefault();
    navigate('/Contact');
  };

  const navToMore = (e) => {
    e.preventDefault();
    navigate('/More');
  };

  const navToSkills = (e) => {
    e.preventDefault();
    navigate('/Skills');
  };

  return (
    <div className={`navbar ${isMorePage ? 'more-page' : 'normal-page'}`}>
      <div className="leftbar">
        <a>Muteeb's Portfolio</a>
      </div>

      <div className="rightbar">
        <ul>
          <li onClick={navToHome}>
            <a>Home</a>
          </li>
          <li onClick={navToSkills}>
            <a>Skills</a>
          </li>
          <li onClick={navToMore}>
            <a>More</a>
          </li>
          <li onClick={navToContact}>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
