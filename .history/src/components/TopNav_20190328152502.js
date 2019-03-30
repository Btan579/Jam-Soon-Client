import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default function TopNav() {
    return (
    <nav role="navigation">
      <Link to="/home"><span>Home</span></Link>
      <Link to="/login"><span>Login</span></Link>
      <Link to="/register"><span>Register</span></Link>
      <Link to="/favorites"><span>Favorites</span></Link>
    </nav>
    );
};


const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Nav);