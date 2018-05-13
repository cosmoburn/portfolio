import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home.js'
import Contact from './contact/Contact.js'
import Work from './work/Work.js'
import Thanks from './thanks/Thanks'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/work' component={Work}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/thanks' component={Thanks}/>
    </Switch>
  </main>
)

export default Main