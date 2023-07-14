import React from 'react'
import '../css/Tech.css'
import HTML_icon from '../misc/HTML.png';
import CSS_icon from '../misc/CSS3.png';
import React_icon from '../misc/Reactjs.png';
import MySQL_icon from '../misc/MySQL.png';
import Boot_icon from '../misc/Bootstrap.png';

export default function Techused() {
  return (
  <div className='tech-container'>
    
  
    <div className='tech-used'>
      <div className='carded' id='retro'>
        <h3>My Retro Page!</h3>
        <p>It's the more page! Go check it out!</p>
      </div>
      <div className='carded' id='tech'>
      
      <h3>
        Technologies I have hands-on experience with:
      </h3>
      <div id='tech-box'>
        <div className='grid-container'>

      <img className='icons' src={HTML_icon} alt="HTML" />  
      <img className='icons' src={CSS_icon} alt="CSS" />
      <img className='icons' src={React_icon} alt="React" />
      <img className='icons' src={MySQL_icon} alt="MySQL" />
      <img className='icons' src={Boot_icon} alt="" />
        </div>
      </div>
      </div>
      <div className='carded' id='contact'>
        <h3>Contact links</h3>
        Contact me through the links below!
        <ul class="social">
          {/* Add these plz */}
          <li>

          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
    </div>  
  )
}