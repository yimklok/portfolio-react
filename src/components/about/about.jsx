import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small> 3 Months Working</small>
            </article>

            <article className="about-card">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small> 100+ Workwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small> 50+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quod iste et accusamus voluptatibus dolorem architecto rem facere magni numquam odit aspernatur, velit expedita unde impedit suscipit, provident beatae. Mollitia.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about