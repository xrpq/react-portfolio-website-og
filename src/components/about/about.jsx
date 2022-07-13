import React from 'react'
import './about.css'
import ME from '../../assets/IMG-8854.PNG'
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
              <small> 1+ Years Studying</small>
            </article>

            <article className='about__card'>
              <HiOutlineAcademicCap className='about__icon' />
              <h5>Academics</h5>
              <small> Rising College Sophomore</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 10+ Completed Projects</small>
            </article>

          </div>
          <p>
              Hey! Im Axel Boly, a sophomore at Northeastern University studying computer science. 
            I was born and raised in Harlem, New York &#128509;. I love reading, anime, and basketball. 
            I created this page so that you could get to know me and see my projects. 
            I am activley looking for internship and co-op oppurtunities so feel free to reach out if you think I would be interested!
          </p>
          <p>
            Note: Not all my projects are on my website at the moment, I am actively working on making github repositories for them!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about