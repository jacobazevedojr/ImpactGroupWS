import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom"
import Header from './Header.js'
import Home from './home.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Header />
        </Router>
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
