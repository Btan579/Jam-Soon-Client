import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/JS-logo-1.svg";
import '../styles/Lead.css';

export class Lead extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header id="header" role="banner">
            <div className='top-menu-lead'>
                    <div className="logo"><img src={logo} alt="jamsoon logo" />
                        <Link to="/home" id="header-link">JamSoon <span>listen locally</span></Link>
                    </div>
               
            </div>
            </header>
        )
    }
}

export default Lead;