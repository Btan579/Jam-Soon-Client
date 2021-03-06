import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
    return (
    <header id="header" role="banner">
        <div className="logo">
        <Link to="/home" id="header-link">JamSoon <span>listen locally</span></Link>
        </div>
        <a href="#menu" class="toggle"><span>Menu</span></a>
    </header>
    );
};
