// src/Header.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"

import StyledLink from './linkStyles'

function Footer() {
  return (
    <div className="Footer">
        <StyledLink to='/'>
        <span className="LogoLink" style={{"display": "block"}}>
          <div className="FooterLogo">
                CSU<strong>LB</strong> | <span>TIG</span>
          </div>
        </span>
        </StyledLink>
        <div className="FooterLinks">
            <StyledLink to ='/visit' id="NavLink">VISIT</StyledLink> | <StyledLink to='/contact' id="NavLink">CONTACT</StyledLink>
        </div>
    </div>
  )
}

export default Footer