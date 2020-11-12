import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'

import Home from './home'
import About from './aboutTIG'
import People from './people'
import Research from './research'
import News from './news'
import Contact from './contact'
import Visit from './visit'

class App extends React.Component { 
    render() {
        return (
            <div className="App">
                <Router basename="~dwhisler">
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/aboutTIG" component={About}/>
                            <Route path="/people" component={People}/>
                            <Route path="/research" component={Research}/>
                            <Route path="/news" component={News}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/visit" component={Visit}/>
                            <Route path="/people" component={People}/>
                        </Switch>
                    <Footer />
                </Router>

            </div> 
        )
    }
}

export default App;
