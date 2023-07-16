import React from 'react';
import Intro from '../comps/Intro';
import '../css/Home.css';
import Footer from '../comps/footer';
import LazyNavbar from '../comps/Navbar';
import Particle from '../comps/Particle';
const Home = () => {
  return (
    <div className='home-back'>
      {/* Was using tsparticles for the background here but then shifted to other things! */}
      {/* To still use the tsparticles, uncomment the line below */}
      {/* <Particle/> */}
      <LazyNavbar />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
