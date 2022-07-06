import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I am</h5>
        <h1>Yim Klok</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default header