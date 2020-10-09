// src/Header.js

import React from 'react'

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
            <a id="NavLink">VISIT</a> | <a id="NavLink">CONTACT</a>
        </div>
        <div className="bottomLinks">
            <a id="NavLink">ABOUT TIG</a> | <a id="NavLink">PEOPLE</a> | <a id="NavLink">RESEARCH</a> | <a id="NavLink">NEWS</a>
        </div>
      </div>
    </div>
  )
}

export default Header