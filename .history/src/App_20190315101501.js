import React, { Component } from 'react';
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Events from "./components/Events";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Scroll anchor base */}
      <TopNav />
      <Header />
      <Home 
       
      />
      <Register />
      </div>
    );
  }
}

export default App;
