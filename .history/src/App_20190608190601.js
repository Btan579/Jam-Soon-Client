import React from 'react';

import {
  Router, Route, withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import history from "./history";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LandingPage from "./containers/LandingPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import FavoritesPage from "./containers/FavoritesPage";
import { refreshAuthToken } from './actions/auth';
import { ToastContainer } from "react-toastify";
import ScrollToTop from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import './styles//App.css';

library.add(fab, faBars);

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
      <Router history={history}>
        <ScrollToTop>
          <div className="App">
            <ToastContainer
              autoClose={2000}
              position="top-center"
              hideProgressBar
              pauseOnFocusLoss={false}
              pauseOnHover={false}

            />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/home" component={HomePage} />
          </div>
        </ScrollToTop>
      </Router>

    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(App));