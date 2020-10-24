import React from 'react';
import './App.css';
import Header from './Header.js'
import MainBody1 from './MainBody1.js'
import PhotoSS from './PhotoSS.js'
import TestPeople from './TestPeople.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-mainSS">
        <PhotoSS />
      </div>
      <div className="App-mainbody1">
        <MainBody1 />
      </div>
      <div className='App-testpeople'>
        <TestPeople />
      </div>
    </div>
  );
}

export default App;
