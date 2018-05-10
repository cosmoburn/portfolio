import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='contact animated fadeIn'>
    <div className='contact-inner'>

      <div className='contact-section'>
        <h2 className='section-header'>Get in touch!</h2>

        <form className='contact-form'>
          <input
            placeholder='Email'
          />
          <input
            placeholder='Subject'
          />
          <textarea></textarea>
          <button>send</button>
        </form>
      </div>
    </div>

  </div>
)

export default Contact