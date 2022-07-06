import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar: AVATAR1,
    name: 'Kong Thida',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quibusdam excepturi doloremque voluptatibus, id facere dolor aperiam at natus aliquid quidem temporibus magni rerum quis quasi cum enim fugit possimus.'
  },
  {
    avatar: AVATAR2,
    name: 'Kong Thida',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quibusdam excepturi doloremque voluptatibus, id facere dolor aperiam at natus aliquid quidem temporibus magni rerum quis quasi cum enim fugit possimus.'
  },
  {
    avatar: AVATAR3,
    name: 'Kong Thida',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quibusdam excepturi doloremque voluptatibus, id facere dolor aperiam at natus aliquid quidem temporibus magni rerum quis quasi cum enim fugit possimus.'
  },
  {
    avatar: AVATAR4,
    name: 'Kong Thida',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quibusdam excepturi doloremque voluptatibus, id facere dolor aperiam at natus aliquid quidem temporibus magni rerum quis quasi cum enim fugit possimus.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client-avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default testimonials