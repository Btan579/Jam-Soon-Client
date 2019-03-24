import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
    <nav role="navigation">
      <Link to="/login"><span>Login</span></Link>
      <Link to="/register"><span>Register</span></Link>
      <Link to="/home"><span>Home</span></Link>
      <Link to="/events"><span>Events</span></Link>
      <Link to="/favorites"><span>Favorites</span></Link>
    </nav>
    );
};
