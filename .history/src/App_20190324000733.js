import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import FavoritesPage from "./containers/FavoritesPage";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/home" component={HomePage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
