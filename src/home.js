import React from 'react';
import './App.css';
import MainBody1 from './MainBody1.js'
import PhotoSS from './PhotoSS.js'
import Projects from './Projects.js'

function Home() {
  return (
    <div className="Home">
      <div className="App-mainSS">
        <PhotoSS />
      </div>
      <div className="App-mainbody1">
        <MainBody1 />
      </div>
      <div className="App-mainbody2">
        <MainBody1 />
      </div>
      <div className="App-projects">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
