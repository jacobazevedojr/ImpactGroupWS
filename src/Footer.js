// src/Header.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"



function Footer() {
  return (
    <div className="Footer">
        <Link to='/'>
        <span className="LogoLink" style={{"display": "block"}}>
          <div className="FooterLogo">
                CSU<strong>LB</strong> | <span>TIG</span>
          </div>
        </span>
        </Link>
      <div className="FooterLinks">
                    <Link to ='/visit' id="NavLink">VISIT</Link> | <Link to='/contact' id="NavLink">CONTACT</Link>
            </div>
    </div>
  )
}

export default Footer