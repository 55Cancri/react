import React, { Component } from 'react'
import './App.sass'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from '../components/Home/home.jsx'
import Stuff from '../components/Stuff/stuff.jsx'
import Contact from '../components/Contact/contact.jsx'

class App extends Component {
  render() {
    return (
      // foundation for navigation and browser history
      <HashRouter>
        <div className="App">
          <h1>React Web Application</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
