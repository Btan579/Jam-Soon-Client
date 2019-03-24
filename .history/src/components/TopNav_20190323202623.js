import React from "react";
import "../styles/TopNav.css";
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
    <nav role="navigation">
      <span>Login</span>
      <span>Register</span>
      <span>Home</span>
      <span>Events</span>
      <span>Favorites</span>
    </nav>
    );
};
