import React, { Component } from 'react';
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Events from "./components/Events";
// import Favorites from "./components/Favorites";
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
      <section className="landing-register">
        <Home />
        <Register />
      </section>
      <section className="logged-out">
        <Login />
      </section>
      <section className="logged-in">
          <Events />
          {/* <Favorites /> */}
      </section>
      <Footer />
      </div>
    );
  }
}

export default App;
