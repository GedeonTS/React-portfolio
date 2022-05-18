import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//MY  PROJECTS
const data = [{
  id: 1,
  image: IMG1,
  title: 'Leaderboard',
  github: 'https://github.com/GedeonTS/Leaderboard_App',
  demo: 'https://gedeonts.github.io/Leaderboard_App/',
},
{
  id: 1,
  image: 'https://user-images.githubusercontent.com/97834160/168653143-6f1ffdef-b0fd-46a8-83e5-a9975ec8f071.png',
  title: 'Leaderboard',
  github: 'https://github.com/GedeonTS/Leaderboard_App',
  demo: 'https://gedeonts.github.io/Leaderboard_App/',
  },
  {
    id: 1,
    image: IMG1,
    title: 'Leaderboard',
    github: 'https://github.com/GedeonTS/Leaderboard_App',
    demo: 'https://gedeonts.github.io/Leaderboard_App/',
  },
  {
    id: 1,
    image: 'https://user-images.githubusercontent.com/97834160/168653143-6f1ffdef-b0fd-46a8-83e5-a9975ec8f071.png',
    title: 'Leaderboard',
    github: 'https://github.com/GedeonTS/Leaderboard_App',
    demo: 'https://gedeonts.github.io/Leaderboard_App/',
  },
  {
    id: 1,
    image: IMG1,
    title: 'Leaderboard',
    github: 'https://github.com/GedeonTS/Leaderboard_App',
    demo: 'https://gedeonts.github.io/Leaderboard_App/',
  },
  {
    id: 1,
    image: 'https://user-images.githubusercontent.com/97834160/168653143-6f1ffdef-b0fd-46a8-83e5-a9975ec8f071.png',
    title: 'Leaderboard',
    github: 'https://github.com/GedeonTS/Leaderboard_App',
    demo: 'https://gedeonts.github.io/Leaderboard_App/',
  }


]

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
                <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target="_blank">Source</a>
          <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
        
        
        
      </div>
    </section >
  )
}

export default portfolio