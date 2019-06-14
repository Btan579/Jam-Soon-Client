import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Header from "./Header";
import Item from './Item';
import Lead from './Lead';
// import logo from "../images/JS-logo-1.svg";
// import { Link } from "react-router-dom";
import '../styles/topMenu.css';

export class TopMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        };
    }

    setToggleTopMenuClass() {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            });
        } else {
            this.setState({
                menu_class: '',
            });
        }
    }


    render () {
        let top_menu_class = `top-menu ${this.state.menu_class}`;

        return (
            <div>
                <div className={top_menu_class} >
                    <Lead />
                    <div className='left'>
                        <Item text='Left1'/>
                        <FontAwesomeIcon icon="coffee"  />
                        <Item text='Left2'/>
                    </div>
                    <div className='right'>
                        <Item text='Right1' />
                        <Item text='Right2' />
                    </div>
                    <FontAwesomeIcon icon="bars" className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }
}

export default TopMenu;