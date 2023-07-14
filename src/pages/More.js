import React from 'react'
import Navbar from '../comps/Navbar'
import '../css/More.css'
export default function More() {
  return (
   
    <div className='More-back'>
      <Navbar />
      <h2 id='top-heading'>P.S I love Retro!</h2>
      <div className='interests'>
        <p>Here are some of my areas of interest.</p>
        
      </div>
      <div id="page-grid">
        <div id="box">
          <h3>Mastering the Art of Real-Time Strategy</h3>
          <p>I mainly play rts games like LOL and DOTA now but I used to be a hardcore FIFA player too!</p>
        </div>
        <div id="box">

          <h3>Embracing the Journey of Exploration!</h3>
          <p>I constantly want to learn new things, whether it is for work or my own personal development.</p>
        </div>
      </div>
    </div>
  )
}
