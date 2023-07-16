import React from 'react';
import '../css/Contact.css';
import Footer from '../comps/footer';
import LazyNavbar from '../comps/Navbar';
import Contactbody from '../comps/Contactbody';
const Contact = () => {
  return (
    <div className='contact-body'>
      <LazyNavbar />
      <Contactbody />
      <div className='contact-foot'>
      <Footer />
      </div>
    </div>
  );
};

export default Contact;
