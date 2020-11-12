// src/Projects.js

import React from 'react'

function Projects() {
  return (
    <div className='container'>
      <p>WHAT WE DO</p>
      <div className='picRow'>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
      </div>
      <div className='picRow'>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
      </div>
      <div className='picRow'>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
        <div className="pic">
            <img src={process.env.PUBLIC_URL + "/Puffin.jpg"} />
        </div>
      </div>
    </div>
  )
}

export default Projects