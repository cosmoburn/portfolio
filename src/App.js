import React, { Component } from 'react';
import Photo from './assets/self-2.png';
import Thug from './assets/thug.png';
import './App.css';
import { SocialIcons } from 'react-social-icons';
import Main from './components/Main.js';
import Header from './components/header/Header.js'

const socialUrls = [
  'mailto:arthur.saboya@gmail.com',
  'http://www.linkedin.com/in/arthursilveira',
  'http://www.github.com/arthursilveira',
  'http://www.instagram.com/_aartvark_/',
  'https://www.behance.net/arthurdoesart'

];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLoad: 'hide',
      secondLoad: 'hide',
      thirdLoad: 'hide',
      fourthLoad: 'hide',
      fifthLoad: 'hide'

    };



    setTimeout( () => {
      this.setState({firstLoad: 'animated fadeInLeftBig'})
    }, 0);

    setTimeout( () => {
      this.setState({secondLoad: 'animated fadeInLeftBig'})
    }, 200);
    setTimeout( () => {
      this.setState({thirdLoad: 'animated fadeInLeftBig'})
    },450);
    setTimeout( () => {
      this.setState({fourthLoad: 'animated fadeInLeftBig'})
    },600);
    setTimeout( () => {
      this.setState({fifthLoad: 'animated bounceInLeft'})
    }, 1050)
  }

  tick() {
    this.setState( (prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">

        <div className={`brand-side ${this.state.firstLoad}`}>
          <div className={` brand-section brand-photo ${this.state.secondLoad}`}>
            <img src={Photo} alt=""/>
          </div>
          <div className={`brand-section brand-name ${this.state.thirdLoad}`}>
            <span>arthur</span><span className='bold'> saboya</span>
          </div>
          <div className={`brand-section brand-tagline ${this.state.fourthLoad}`}>
            <div>FULLSTACK WEB DEVELOPER</div>
            <div>UI/UX DESIGNER</div>
          </div>
          <div className='brand-section brand-social'>
            <div className={`social-container ${this.state.fifthLoad}`}>
              <SocialIcons urls={socialUrls} color='#c66'/>
            </div>
          </div>
        </div>

        <div className='content-side'>
          <Header/>
          <Main/>
        </div>

      </div>
    );
  }
}

export default App;
