import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='contact animated fadeInRightBig'>
    <div className='contact-inner'>

      <div className='contact-section'>
        <h2 className='section-header'>Get in touch!</h2>


        {/* build in form by Netlify are amazing! - https://www.netlify.com/docs/form-handling/ -*/}
        <form className='contact-form' method='POST' netlify action='http://arthursaboya.com/thanks'>
          {/*<input type='hidden' name='next' value='https://arthursilveira.github.io/portfolio/#/thanks'/>*/}
          <input type='email' name='email' placeholder='Your email'/>
          <input type='subject' name='subject' placeholder='Subject'/>
          <textarea name='message' placeholder='How can I help you today?'/>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>

  </div>
)

export default Contact