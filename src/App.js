import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Router from './Router';


const NavigationBar = () =>  (

<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <label className="navbar-brand" >ShopIT </label>
    </div>
    <ul className="nav navbar-nav">
      <li ><NavLink  to='/'>Home</NavLink></li>
      <li><NavLink  to='/cart'>cart</NavLink></li>
    </ul>
  </div>
</nav>

);

class App extends Component {
  render() {
    return (
      <div  className="container-fluid">
        <NavigationBar/>
        <div className="jumbotron">
          <Router/>
        </div>  
      </div>
    )
  }
}

export default App;
