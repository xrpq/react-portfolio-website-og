import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import ME from '../../assets/me outline 2.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Axel Boly</h1>
        <h5 className="text-light">Aspiring Software Engineer</h5>
        <HeaderButtons/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alta="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header