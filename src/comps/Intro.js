import React, { useState, useEffect } from 'react';
import '../css/Intro.css';
import resume from '../misc/Muteeb_Resume.pdf';
import Techused from './Techused';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { PropagateLoader } from 'react-spinners';
export default function Intro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 1500; // 1.5s delay

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='intro'>
      {isLoading ? (
        <div className='loader'>
          <PropagateLoader color='#ffffff' loading={isLoading} size={12} />
        </div>
      ) : (
        <div>
          <div className='intro-top'>
            <h1>Hi there!</h1>
            <h3>
              My name is Muteeb ur Rehman, a recent Computer Science graduate and an aspiring web developer! You can
              download my resume and connect with me on LinkedIn below!
            </h3>
          </div>

          <div className='intro-btns'>
            <a className='fancy btn' id='no-decor' href={resume} role='button'>
              <span>Download my CV!</span>
              <div className='icon'>
                <FontAwesomeIcon className='icon-size' icon={faCloudArrowDown} bounce />
              </div>
            </a>

            <a className='fancy btn' id='no-decor' href='https://www.linkedin.com/in/muteeb-ur-rehman-b87a201a5/' role='button'>
              <span>Connect with me!</span>
              <div class='icon'>
                <FontAwesomeIcon className='icon-size' icon={faGlobe} bounce />
              </div>
            </a>
          </div>

          <div className='bottom'>
            <h1>A little about myself and what I do:</h1>
            <p>
              I am a versatile web developer with a strong command of React.js and a passion for continuous learning. Currently, I am actively expanding my skill set by diving into Node.js. This will allow me to not only create robust front-end experiences but also build scalable and efficient server-side applications. 
            </p>
            <p>
              In my spare time, I like to watch and play football. I used to be a hardcore gamer too, but that feels like a lifetime ago!
            </p>
            <div className='flexing'>
              <Techused />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
