import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='contact animated fadeInRightBig'>
    <div className='contact-inner'>

      <div className='contact-section'>
        <h2 className='section-header'>Get in touch!</h2>

        <form className='contact-form' method='POST' action='https://formspree.io/arthur.saboya@gmail.com'>
          <input type='hidden' name='_next' value='https://arthursilveira.github.io/portfolio'/>
          <input type='email' name='_replyto' placeholder='Your email'/>
          <input type='subject' name='_subject' placeholder='Subject'/>
          <textarea name='message' placeholder='How can I help you today?'/>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>

  </div>
)

export default Contact