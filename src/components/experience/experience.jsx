import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5> 
      <h2>My Experience</h2> 

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>HTML</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>CSS</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>JavaScript</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>React</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>Python</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>C</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>HTML</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>CSS</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>JavaScript</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>React</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>Python</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div><h4>C</h4>
              <small className=' text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
        </div>  
    </section>
  )
}

export default experience