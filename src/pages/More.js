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
          <h3>Gaming</h3>
          <p>I mainly play rts games like LOL and DOTA now but I used to be a hardcore FIFA player too!</p>
        </div>
        <div id="box">

          <h3>Gaming</h3>
          <p>I mainly play rts games like LOL and DOTA now but I used to be a hardcore FIFA player too!</p>
        </div>
      </div>
    </div>
  )
}
