import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Years studying</small>
            </article>

            <article className='about__card'>
              <HiOutlineAcademicCap className='about__icon' />
              <h5>Academics</h5>
              <small> rising college sohpomore</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 10+ completed projects</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ex exercitationem magni
            esse corporis magnam sint sit adipisci corrupti deleniti quo soluta sunt veritatis id saepe
            dolore, provident ratione nobis?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about