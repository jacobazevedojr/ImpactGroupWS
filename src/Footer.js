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
      <div className="FooterLogo">
            CSU<strong>LB</strong> | <span>TIG</span>
      </div>
    <Router>
        <Switch>
      <div className="FooterLinks">
                    <Link to ='/visit' id="NavLink">VISIT</Link> | <Link to='/contact' id="NavLink">CONTACT</Link>
            </div>
        </Switch>
    </Router>
    </div>
  )
}

export default Footer