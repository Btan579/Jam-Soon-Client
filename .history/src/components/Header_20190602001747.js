import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/Header.css";
export default function Header() {
    return (
    <header id="header" role="banner">
        <div className="logo">
        <a href="index.html">Transitive <span>by TEMPLATED</span></a>
        </div>
        <h1>JamSoon</h1>
        <h2>listen locally</h2>
        <a href="#menu" class="toggle"><span>Menu</span></a>
    </header>
    );
};
