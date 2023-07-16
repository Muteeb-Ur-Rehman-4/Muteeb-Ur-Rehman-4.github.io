import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faMobilePhone, faMobile } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const location = useLocation();
  const isMorePage = location.pathname === '/More';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 1200; // 1.2s delay

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const footerClass = isMorePage ? 'more-page-footer' : 'normal-page-footer';

  return (
    <div className={`footer ${footerClass}`}>
      {isLoading ? (
        <div className='bot-loader'>
        <BeatLoader color="#ffffff" loading={isLoading} size={60} />
        </div>

      ) : (
        <>
          <div className="footer-left">
            <span className="quote">
              "The only person you should try to be better than is the person you were yesterday!"
            </span>
          </div>

          <div className="footer-right">
            <div className="footer-contact">
              <a className="footer-a" href="mailto:muteeb.0004@gmail.com">
                <FontAwesomeIcon className="footer-icon" icon={faEnvelopeOpenText} bounce />
              </a>
              <div className="hiding-away">
                <h4 className="spacing-away">Email :</h4>
                <span className="spacing-away">muteeb.0004@gmail.com</span>
              </div>
            </div>

            {isMorePage ? (
              <div className="footer-contact">
                <a className="footer-a" href="tel:+923062733695">
                  <FontAwesomeIcon className="footer-icon" icon={faMobile} bounce />
                </a>
                <div className="hiding-away">
                  <h4 className="spacing-away">Phone No :</h4>
                  <span className="spacing-away">+92 (306) 2733695</span>
                </div>
              </div>
            ) : (
              <div className="footer-contact">
                <a className="footer-a" href="tel:+923062733695">
                  <FontAwesomeIcon className="footer-icon" icon={faMobilePhone} bounce />
                </a>
                <div className="hiding-away">
                  <h4 className="spacing-away">Phone No:</h4>
                  <span className="spacing-away">+92 (306) 2733695</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;