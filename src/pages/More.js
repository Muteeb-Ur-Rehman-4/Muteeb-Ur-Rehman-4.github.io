import React from 'react';
import '../css/More.css';
import Footer from '../comps/footer';
import LazyNavbar from '../comps/Navbar';
import Morebody from '../comps/Morebody';

const More = () => {
  return (
    <div className='More-back'>
      <LazyNavbar />
      <Morebody />
      <Footer />
    </div>
  );
};

export default More;
