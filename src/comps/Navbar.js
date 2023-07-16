import React, { useState, useEffect, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMorePage = location.pathname === '/More';

  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const delay = 1200; // 1.2s delay. First load.

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
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

  return (
    <div className={`navbar ${isMorePage ? 'more-page' : 'normal-page'} ${isSticky ? 'sticky' : ''}`}>
      {isLoading ? (
        <div className='top-loader'>
        <SyncLoader color="#ffffff" loading={isLoading} size={60} />
        </div>
      ) : (
        <>
          <div className="leftbar">
            <a>Retro's Remnant</a>
          </div>

          <div className="rightbar">
            <ul>
              <li onClick={navToHome}>
                <a>Home</a>
              </li>
              <li onClick={navToContact}>
                <a>Contact</a>
              </li>
              <li onClick={navToMore}>
                <a>More</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
