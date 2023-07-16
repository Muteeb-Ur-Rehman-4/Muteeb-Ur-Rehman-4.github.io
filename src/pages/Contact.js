import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Footer from '../comps/footer';
import LazyNavbar from '../comps/Navbar';

const Contact = () => {
  return (
    <div className='contact-body'>
      <LazyNavbar />
      <div className='margin-adder'>
        <div className='margin-adder'>
          <div className='font-sizer'>
          <h2>This background kind of reminds me of my room in GIKI....</h2>
          <h2>
            Anyways, feel free to check out my code and contact me through the links below!
          </h2>
          </div>
          <div className='contact-flex'></div>
          <div className='icons-flexing'>
            <a className="contact-a" href='https://github.com/Muteeb-Ur-Rehman-4/MyPortfolio'>
              <FontAwesomeIcon className='icons-contact' icon={faCode} bounce />
            </a>
            <a className="contact-a" href="mailto:muteeb.0004@gmail.com">
              <FontAwesomeIcon className='icons-contact' icon={faEnvelope} bounce />
            </a>
            <a className="contact-a" href="tel:+923062733695">
              <FontAwesomeIcon className='icons-contact' icon={faPhone} bounce />
            </a>
            <a className="contact-a" href="https://www.linkedin.com/in/muteeb-ur-rehman-b87a201a5/">
            <FontAwesomeIcon className='icons-contact' icon={faGlobe} bounce />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
