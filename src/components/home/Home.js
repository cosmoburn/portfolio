import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'

const Home = () => (
  <div className='home animated fadeIn'>
    <div className='home-inner'>

      <div className='home-section who'>
        <div className='section-header'>Who.</div>
        <div className='section-content'>
          <p>
            I am a <b>developer</b>/<b>designer</b> born in Rio de Janeiro. <br/>
            I am proficient in development, passionate about design and fascinated by user experience.
          </p>
        </div>
      </div>

      <div className='home-section what'>
        <div className='section-header'>What.</div>
        <div className='section-content'>
          <p>
            From sketching and coding to hosting and maintaining your application, I can design what you want and develop what you need.
          </p>
        </div>
      </div>

      <div className='home-section how'>
        <div className='section-header'>How.</div>
        <div className='section-content'>
          <p>
            I like to focus on simplicity, creating <b>beautiful</b> and <b>functional</b> solutions which are pleasant to the end user.

          </p>
        </div>
      </div>

      <div className='home-section why'>
        <div className='section-header'>Why.</div>
        <div className='section-content'>
          <p>
            Because impressions matter and nowadays your website is an extension of your brand.
            <br/>
            <br/>
            {/*Not sold yet? ... Check out <Link to='/work'>my work</Link>*/}
          </p>

        </div>
      </div>

    </div>
  </div>
)

export default Home