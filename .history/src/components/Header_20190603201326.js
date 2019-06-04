import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/JS-logo-1.svg";

export default function Header() {
    return (
    <header id="header" role="banner" className="reveal alt">
        <div className="logo">
        <img src={logo} alt="jamsoon logo" />
        <Link to="/home" id="header-link">JamSoon <span>listen locally</span></Link>
        </div>
        <a href="#menu" className="toggle"><span>Menu</span></a>
    </header>
    );
};
