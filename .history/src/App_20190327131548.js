import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {
  Provider
} from "react-redux";
import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import FavoritesPage from "./containers/FavoritesPage";
import './App.css';
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/home" component={HomePage} />
        </div>
      </Router>
       </Provider>
    );
  }
}

export default App;