// src/Projects.js

import React from 'react'

import pic1 from "./Puffin.jpg"
import pic2 from "./Puffin.jpg"
import pic3 from "./Puffin.jpg"
import pic4 from "./Puffin.jpg"
import pic5 from "./Puffin.jpg"
import pic6 from "./Puffin.jpg"
import pic7 from "./Puffin.jpg"
import pic8 from "./Puffin.jpg"
import pic9 from "./Puffin.jpg"


function Projects() {
  return (
    <div className='container'>
      <p>WHAT WE DO</p>
      <div className='picRow'>
        <div className="pic">
            <img src={pic1} />
        </div>
        <div className="pic">
            <img src={pic2} />
        </div>
        <div className="pic">
            <img src={pic3} />
        </div>
      </div>
      <div className='picRow'>
        <div className="pic">
            <img src={pic4} />
        </div>
        <div className="pic">
            <img src={pic5} />
        </div>
        <div className="pic">
            <img src={pic6} />
        </div>
      </div>
      <div className='picRow'>
        <div className="pic">
            <img src={pic7} />
        </div>
        <div className="pic">
            <img src={pic8} />
        </div>
        <div className="pic">
            <img src={pic9} />
        </div>
      </div>
    </div>
  )
}

export default Projects