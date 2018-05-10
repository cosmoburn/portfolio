import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      backArrowClass: null
    }
  }

  decideArrowClass(pathname) {
    if (pathname === '/') {
      this.setState({
        backArrowClass: 'animated bounceOut'
      })
      setTimeout( () => {
        this.setState({backArrowClass: 'hide'})
      }, 500)
    }
    else {
      this.setState({backArrowClass: 'animated rubberBand'})
    }

  }

  componentDidMount() {
    this.decideArrowClass(this.props.location.pathname)
    console.log(' deciding on mount with location:', this.props.location.pathname)

    this.unlisten = this.props.history.listen((location) => {
      this.decideArrowClass(location.pathname)
    })
    if (this.props.location.pathname === '/') {this.setState({backArrowClass: 'hide'})}
    console.log(' fixing on mount with location:', this.props.location.pathname)
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <header className='header'>
        <div className='header-inner'>
          <Link to='/' className={`back-arrow ${this.state.backArrowClass}`}>
            home
          </Link>
          {/*<Link to='work'>work</Link>*/}
          <Link to='contact'>contact</Link>
        </div>
      </header>
    )
  }

}


export default withRouter(Header)