import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../css/Contactbody.css';
import { PropagateLoader } from 'react-spinners';

export default function Contactbody() {
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

  if (isLoading) {
    return (
      <div className='loader'>
        <PropagateLoader color='#ffffff' loading={isLoading} size={12} />
      </div>
    );
  }

  return (
    <div className='height-setter'>
      <div className='margin-adder'>
        <div className='margin-adder'>
          <div className='font-sizer'>
            <h2>This background kind of reminds me of my room in GIKI....</h2>
            <h2>Anyways, feel free to check out my code and contact me through the links below!</h2>
          </div>
          <div className='contact-flex'></div>
          <div className='icons-flexing'>
            <a className='contact-a' href='https://github.com/Muteeb-Ur-Rehman-4/MyPortfolio'>
              <FontAwesomeIcon className='icons-contact' icon={faCode} bounce/>
            </a>
            <a className='contact-a' href='mailto:muteeb.0004@gmail.com'>
              <FontAwesomeIcon className='icons-contact' icon={faEnvelope} bounce/>
            </a>
            <a className='contact-a' href='tel:+923062733695'>
              <FontAwesomeIcon className='icons-contact' icon={faPhone} bounce/>
            </a>
            <a className='contact-a' href='https://www.linkedin.com/in/muteeb-ur-rehman-b87a201a5/'>
              <FontAwesomeIcon className='icons-contact' icon={faGlobe} bounce/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
