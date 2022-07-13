import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Axel Boly</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.instagram.com/axel.otf/" target="_blank"> <FiInstagram /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Axel Boly All rights reserved</small>
        <h5>Many thanks to EGATOR Tutorials.</h5>
      </div>
    </footer>
  )
}

export default footer