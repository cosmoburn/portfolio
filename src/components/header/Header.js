import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'
import backArrow from '../../assets/backarrow.svg'

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
        backArrowClass: 'hide'
      })
      setTimeout( () => {
        this.setState({backArrowClass: 'hide'})
      }, 300)
    }
    else {
      this.setState({backArrowClass: 'back-arrow'})
    }

  }

  componentDidMount() {
    this.decideArrowClass(this.props.location.pathname)

    this.unlisten = this.props.history.listen((location) => {
      this.decideArrowClass(location.pathname)
    })
    if (this.props.location.pathname === '/') {this.setState({backArrowClass: 'hide'})}
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <header className='header'>
        <div className='header-inner'>
          <Link to='/' className={`back-arrow ${this.state.backArrowClass}`}>
            <img src={backArrow} alt=""/>
          </Link>
          {/*<Link to='work'>work</Link>*/}
          <Link to='contact'>contact</Link>
        </div>
      </header>
    )
  }

}


export default withRouter(Header)