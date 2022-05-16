import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ushindi Gedeon</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <a href="#contact" className='scroll_down'>scroll down</a>
        <div className="me">
          <img src={ME} alt="me" />
         
          
        </div>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default header