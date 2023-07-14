import React from 'react'
import { ReactDOM } from 'react-dom/client'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import More from './pages/More'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  


  return (
    
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/More' element={<More /> }/>
      </Routes>
      </>
      
      {/* <header className="App-header">
               
      </header> */}
      
      {/* <Contact/>
      <Skills/>
      <More/> */}
    </div>
   
  );
}

export default App;
