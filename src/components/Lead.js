import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/JS-logo-2.svg";
import '../styles/Lead.css';

export class Lead extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className='top-menu-lead'>
                    <div className="lead-link-cont">
                    <Link to="/home" id="header-link">
                        <img src={logo} alt="jamsoon logo" />
                    </Link>

                    </div>
                    
            </div>
        )
    }
}

export default Lead;