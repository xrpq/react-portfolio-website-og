import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/website desktop.png'
import IMG2 from '../../assets/loading.gif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/xrpq/react-portfolio-website-og',
    demo: '',
    hasDemo: false
  },
  {
    id: 2,
    image: IMG2,
    title: 'More to come!',
    github: 'https://github.com/xrpq',
    demo: 'https://dribbble.com/shots/3633228-Avanti-e-indietro-loader',
    hasDemo: true
  },


]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, hasDemo }) => {

            
            if (hasDemo) {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'> Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' id="live-demo">gif credit</a>
                    

                  </div>
                </article>
                
              ) 
              
            }

            return (
              
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'> Github</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default portfolio