// src/Header.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"

import StyledLink from './linkStyles'

function Header() {
  return (
    <div className="Header">
        <StyledLink to='/'>
        <span className="LogoLink" style={{"display": "block"}}>
          <div className="HeaderLogo">
            <div id="CSULB">
                <div id="CSU">CALIFORNIA STATE UNIVERSITY</div> 
                <strong>LONG BEACH</strong>
            </div>
            <div id="TIGLogo">THE IMPACT GROUP</div>
          </div>
        </span>
        </StyledLink>
      <div className="WPLinks">
                <div className="topLinks">
                    <StyledLink to ='/visit' id="NavLink">VISIT</StyledLink> | <StyledLink to='/contact' id="NavLink">CONTACT</StyledLink>
                </div>
                <div className="bottomLinks">
                    <StyledLink to='/aboutTIG' id="NavLink">ABOUT TIG</StyledLink> | <StyledLink to='/people' id="NavLink">PEOPLE</StyledLink> | <StyledLink to='/research' id="NavLink">RESEARCH</StyledLink> | <StyledLink to='/news' id="NavLink">NEWS</StyledLink>
                </div>
            </div>
    </div>
  )
}

export default Header