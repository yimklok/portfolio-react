import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container container-services">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services