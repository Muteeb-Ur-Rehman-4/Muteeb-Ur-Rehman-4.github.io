import React from 'react'
import '../css/Intro.css'
import resume from '../misc/Muteeb-Resume.pdf'
import Techused from './Techused'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
export default function Intro() {
  

  return (
    <div className='intro'>
      
      <div className='intro-top'>
        <h1>
        Hi there!
        </h1>
        <h3>
        My name is Muteeb ur Rehman, a recent Computer Science graduate and an aspiring web developer! You can download my resume and connect with me on LinkedIn below!
        </h3>
      </div>
        
        

        
        <div className='intro-btns'>
        <a className="fancy btn" id='no-decor' href={resume} role="button">
          <span>Download CV</span>
        <div className="icon">
        <FontAwesomeIcon className='icon-size' icon={faCloudArrowDown} />
        </div>
        </a>
        
        <a className='fancy btn' id='no-decor' href='https://www.linkedin.com/in/muteeb-ur-rehman-b87a201a5/' role='button'>
          <span>
          Connect with me!
          </span>
        <div class='icon' >
        <FontAwesomeIcon className='icon-size' icon={faGlobe} />
        </div>
          </a>
        </div>
        <div className='bottom'>
        <h1>A little about myself and what I do:</h1>
        
        <div className='flexing'>
          
          <Techused />
          
        </div>
        
        </div>

       
    </div>
  )
}
