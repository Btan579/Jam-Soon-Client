import React from "react";
import "./TopNav.css";


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

const TopNav = () => (
  <nav role="navigation">
    <span>Login</span>
    <span>Register</span>
    <span>Home</span>
    <span>Events</span>
    <span>Favorites</span>
  </nav>
);

export default TopNav;