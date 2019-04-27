import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
// import CurrentUserInfo from './CurrentUserInfo';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class TopNav extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }
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
          // userInfo = (
          //   <div className="user-info">
          //     <div className="current-username">
          //       Welcome!: {this.props.username}
          //     </div>
          //   </div>
          // );
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
  username: state.auth.currentUser.username,
  protectedData: state.protectedData.data,
  loggedIn: state.auth.currentUser !== null
});
export default requiresLogin()(connect(mapStateToProps)(TopNav));
// export default connect(mapStateToProps)(TopNav);