import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"

import Header from './Header'
import Home from './home'
import Footer from './Footer'

class App extends React.Component { 
    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children || <Home />}
                <Footer />
            </div> 
        )
    }
}

export default App;
