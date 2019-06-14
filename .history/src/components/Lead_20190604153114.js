import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/JS-logo-1.svg";
import '../styles/Lead.css';

export class Lead extends React.Component {

    constructor(props) {
        super(props);

        this.text = props.text
        // this.state = {
            
        // };
    }

    render() {
        return (
            <div className='top-menu-lead'>
                {this.text}
            </div>

            // <div className='top-menu-lead'>
            //         <Link to="/home" id="header-link">
            //             <img src={logo} alt="jamsoon logo" />
            //         </Link>
            //             JamSoon <span>listen locally</span>
            // </div>
        )
    }
}

export default Lead;