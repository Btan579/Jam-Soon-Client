import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/JS-logo.svg";

export default function Header() {
    return (
    <header id="header" role="banner" className="alt">
        <div className="logo">
        <img src={logo} alt="jamsoon logo" />
        <Link to="/home" id="header-link">JamSoon <span>listen locally</span></Link>
        </div>
        <a href="#menu" className="toggle"><span>Menu</span></a>
    </header>
    );
};
