import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
// import CurrentUserInfo from './CurrentUserInfo';

export class TopNav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let userInfo;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
            userInfo = ( 
               <div className="current-username">
                Welcome!: {this.props.currentUser}
                </div>
            );
        }
        return (
          <nav role="navigation">
            <Link to="/home"><span>Home</span></Link>
            <Link to="/login"><span>Login</span></Link>
            <Link to="/register"><span>Register</span></Link>
            <Link to="/favorites"><span>Favorites</span></Link>
            {logOutButton}
            {userInfo}
          </nav>
        );
    }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  userInfoData: state.auth.currentUser.username
});

export default connect(mapStateToProps)(TopNav);