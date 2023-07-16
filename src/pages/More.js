import React from 'react';
import '../css/More.css';
import Footer from '../comps/footer';
import LazyNavbar from '../comps/Navbar';

const More = () => {
  return (
    <div className='More-back'>
      <LazyNavbar />
      <div className='interests'>
        <h2 id='top-heading'>P.S I love Retro!</h2>
        <h3>Here are some of my areas of interest.</h3>
      </div>
      <div id="page-grid">
        <div id="box">
          <h3>Braving the world of RTS and Open-World games!</h3>
          <p>I mainly play real-time strategy games like LOL and DOTA now, but I used to be a hardcore FIFA player too! I have also played open-world games like Dark Souls and Elden Ring and beat them, which should show my dedication to completing near-impossible tasks at hand.</p>
        </div>
        <div id="box">
          <h3>Embracing Innovation and Technology!</h3>
          <p>I am passionate about emerging technologies and their innovative potential. I actively seek opportunities to learn new things each day and try to explore their applications to enhance business processes, optimize efficiency, and foster growth.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default More;
