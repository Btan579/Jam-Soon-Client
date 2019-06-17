import React from "react";
import "../styles/LargeLogo.css";
import logoLarge from "../images/JS-logo-2.svg";

export default function LargeLogo() {
    return (
        <div className="large-logo">
            <img src={logoLarge} alt="jamsoon logolarge" id="large-logo"/>
            <h1>Jam Soon</h1>
            <h2>listen locally</h2>
            <hr></hr>
        </div>
    );
}


