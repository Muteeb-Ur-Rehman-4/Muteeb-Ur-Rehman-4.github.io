import React, { useState, useEffect, lazy } from 'react';
import { PropagateLoader } from 'react-spinners';
import '../css/Tech.css';
import HTML_icon from '../misc/HTML.png';
import CSS_icon from '../misc/CSS3.png';
import React_icon from '../misc/Reactjs.png';
import MySQL_icon from '../misc/MySQL.png';
import Boot_icon from '../misc/Bootstrap.png';

export default function Techused() {
  const [isLoading, setIsLoading] = useState(true);
  // Essential to add lazyLoading as has gifs.
  useEffect(() => {
    const delay = 2500; // 2.5s delay

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='tech-container'>
      {isLoading ? (
        <div className='loader'>
          <PropagateLoader color='#ffffff' loading={isLoading} size={50} />
        </div>
      ) : (
        <div className='tech-used'>
          <div className='carded' id='retro'>
            <h3>My Fully Retro Page!</h3>
            <p>It's the more page! Go check it out!</p>
          </div>
          <div className='carded' id='tech'>
            <h3>Technologies I have hands-on experience with:</h3>
            <div id='tech-box'>
              <div className='grid-container'>
                <img className='icons' src={HTML_icon} alt='HTML' />
                <img className='icons' src={CSS_icon} alt='CSS' />
                <img className='icons' src={React_icon} alt='React' />
                <img className='icons' src={MySQL_icon} alt='MySQL' />
                <img className='icons' src={Boot_icon} alt='' />
              </div>
            </div>
          </div>
          <div className='carded' id='contact'>
            <h3>Contact Page!</h3>
            <p>Contact me through the links on this page!</p>
          </div>
        </div>
      )}
    </div>
  );
}
