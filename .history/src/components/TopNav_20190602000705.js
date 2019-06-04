import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';


export class TopNav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        } 
      let userInfo;
      if (this.props.username !== ""){
        userInfo = (
          <div className="current-username">
            Welcome!: {this.props.username}
          </div>
        );
      }
        return (
          <nav role="navigation" id="menu">
            <ul classname="links">
              <li><Link to="/home"><span>Home</span></Link></li>
              <li><Link to="/login"><span>Login</span></Link></li>
              <li><Link to="/register"><span>Register</span></Link></li>
              <li><Link to="/favorites"><span>Favorites</span></Link></li>
            </ul>            
            {logOutButton}
            {userInfo}
          </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUserName
});

export default connect(mapStateToProps)(TopNav);