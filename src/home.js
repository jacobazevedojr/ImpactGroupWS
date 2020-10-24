import React from 'react';
import './App.css';
import MainBody1 from './MainBody1.js'
import PhotoSS from './PhotoSS.js'

function Home() {
  return (
    <div className="Home">
      <div className="App-mainSS">
        <PhotoSS />
      </div>
      <div className="App-mainbody1">
        <MainBody1 />
      </div>
    </div>
  );
}

export default Home;
