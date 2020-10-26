// src/Header.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"




function Header() {
  return (
    <div className="Header">
        <Link to='/'>
        <span className="LogoLink" style={{"display": "block"}}>
          <div className="HeaderLogo">
            <div id="CSULB">
                <div id="CSU">CALIFORNIA STATE UNIVERSITY</div> 
                <strong>LONG BEACH</strong>
            </div>
            <div id="TIGLogo">THE IMPACT GROUP</div>
          </div>
        </span>
        </Link>
      <div className="WPLinks">
                <div className="topLinks">
                    <Link to ='/visit' id="NavLink">VISIT</Link> | <Link to='/contact' id="NavLink">CONTACT</Link>
                </div>
                <div className="bottomLinks">
                    <Link to='/aboutTIG' id="NavLink">ABOUT TIG</Link> | <Link to='/people' id="NavLink">PEOPLE</Link> | <Link to='/research' id="NavLink">RESEARCH</Link> | <Link to='/news' id="NavLink">NEWS</Link>
                </div>
            </div>
    </div>
  )
}

export default Header