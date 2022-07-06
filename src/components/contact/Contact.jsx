import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofyezai', 'template_gupn5zm', form.current, 'KWzrr_eUjpM02CVUx')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">

            <article className="contact-option">
              <MdOutlineEmail className='contact-option-icon'/>
              <h4>Email</h4>
              <h5>mrklokkh@gmail.com</h5>
              <a href="mailto:mrklokkh@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact-option">
              <RiMessengerLine className='contact-option-icon'/>
              <h4>Messenger</h4>
              <h5>yimklok</h5>
              <a href="https://m.me/klok.yim" target='_blank'>Send a message</a>
            </article>

            <article className="contact-option">
              <BsWhatsapp className='contact-option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+855 97777 9688</h5>
              <a href="https://api.whatsapp.com/send?phone=+855977779688" target='_blank'>Send a message</a>
            </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required autoComplete='off'/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact