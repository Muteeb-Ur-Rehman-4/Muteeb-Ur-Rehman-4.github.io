import React from 'react'
import '../css/Tech.css'
import HTML_icon from '../misc/HTML.png';
import CSS_icon from '../misc/CSS3.png';
import React_icon from '../misc/Reactjs.png';
import MySQL_icon from '../misc/MySQL.png';
export default function Techused() {
  return (
    <div className='tech-used'>
      <h3>
        Technologies I have hands-on experience with:
      </h3>
      <div id='tech-box'>
      <img className='icons' src={HTML_icon} alt="HTML" />  
      <img className='icons' src={CSS_icon} alt="CSS" />
      <img className='icons' src={React_icon} alt="React" />
      <img className='icons' src={MySQL_icon} alt="MySQL" />
      </div>
    </div>
  )
}