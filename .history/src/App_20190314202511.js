import React, { Component } from 'react';
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Events from "./components/Events";
import Favorites from "./components/Favorites";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNav />
      <Home />
      <Register />
      </div>
    );
  }
}

export default App;
