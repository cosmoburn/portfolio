import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='contact animated fadeInRight'>
    <div className='contact-inner'>

      <div className='contact-section'>
        <h2 className='section-header'>Get in touch!</h2>

        <form className='contact-form' method="POST" action="https://formspree.io/arthur.saboya@gmail.com">
          <input type='email' name='email' placeholder='Your email'/>
          <textarea
            placeholder='How can I help you?'
          />
          <button type="submit">send</button>
        </form>
      </div>
    </div>

  </div>
)

export default Contact