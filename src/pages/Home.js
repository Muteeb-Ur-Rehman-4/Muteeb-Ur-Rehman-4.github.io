import React from 'react'
import Navbar from '../comps/Navbar'
import Intro from '../comps/Intro'
import Techused from '../comps/Techused'
import '../css/Home.css'
export default function Home() {
  return (
    <div className='home home-back'>
      <Navbar />
      <Intro />
      <Techused />

    </div>
  )
}
