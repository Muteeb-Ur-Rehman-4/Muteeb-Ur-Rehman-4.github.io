import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMorePage = location.pathname === '/More'; // Checks if it's the "More" page

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className={`navbar ${isMorePage ? 'more-page' : 'normal-page'} ${isSticky ? 'sticky' : ''}`}>
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
