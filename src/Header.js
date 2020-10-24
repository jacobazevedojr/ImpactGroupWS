// src/Header.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"
import Home from './home'
import About from './aboutTIG'
import People from './people'
import Research from './research'
import News from './news'


function Header() {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <div id="CSULB">
            <div id="CSU">CALIFORNIA STATE UNIVERSITY</div> 
            <strong>LONG BEACH</strong>
        </div>
        <div id="TIGLogo">THE IMPACT GROUP</div>
      </div>
      
      <div className="WPLinks">
        <div className="topLinks">
            <Link to ='/visit' id="NavLink">VISIT</Link> | <Link to='/contact' id="NavLink">CONTACT</Link>
        </div>
        <div className="bottomLinks">
            <Router>
                <Switch>
                    <nav>
                        <Link to='/aboutTIG' id="NavLink">ABOUT TIG</Link> | <Link to='/people' id="NavLink">PEOPLE</Link> | <Link to='/research' id="NavLink">RESEARCH</Link> | <Link to='/news' id="NavLink">NEWS</Link>
                    </nav>
                    <Route path='/' component={Home} />
                    <Route path='/aboutTIG' component={About} />
                    <Route path='/people' component={People} />
                    <Route path='/research' component={Research} />
                    <Route path='/news' component={News} />                    
                </Switch>
            </Router>
        </div>
      </div>
    </div>
  )
}

export default Header