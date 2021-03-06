import React from 'react';
import {
  Route, withRouter
} from "react-router-dom";
import { connect } from 'react-redux';

import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import FavoritesPage from "./containers/FavoritesPage";
import { refreshAuthToken } from './actions/auth';
import { ToastContainer } from "react-toastify";
import './App.css';


export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }
  render() {
    return (
        <div className="App">
        <ToastContainer autoClose={2000} />
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/home" component={HomePage} />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(App));