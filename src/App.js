import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Photo from './assets/self-2.png';
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
      windowWidth: window.innerWidth,
      firstLoad: 'hide',
      secondLoad: 'hide',
      thirdLoad: 'hide',
      fourthLoad: 'hide',
      fifthLoad: 'hide'
    };

    this.ifWindowWidthChanged = this.ifWindowWidthChanged.bind(this)

  }

  componentDidMount() {
    
    this.startLoadingAnimations()
    
    //setup listener for window location
    this.unlisten = this.props.history.listen((location) => {
      this.updateLayoutForMobile(location.pathname)
    })

    //setup listener for window resizing
    window.addEventListener('resize', this.ifWindowWidthChanged)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.ifWindowWidthChanged)
    this.unlisten()
  }

  ifWindowWidthChanged() {
    this.setState({ windowWidth: window.innerWidth })
    this.updateLayoutForMobile(this.props.location.pathname)
  }

  updateLayoutForMobile(pathname) {
    if (pathname === '/') {
      this.setState({ firstLoad: 'animated fadeInLeftBig' })
    } else {
      this.setState({ firstLoad: this.state.windowWidth <= 723 ? 'hide' : 'animated fadeInLeftBig' })
    }
  }

  // adds staggered animation classes
  startLoadingAnimations() {

    this.updateLayoutForMobile(this.props.location.pathname)

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

export default withRouter(App);
