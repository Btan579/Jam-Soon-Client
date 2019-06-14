import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Header from "./Header";
import Item from './Item';
import Lead from './Lead';
import { toggleTopMenu } from '../actions/display';
// import logo from "../images/JS-logo-1.svg";
import { Link } from "react-router-dom";
import '../styles/topMenu.css';

export class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_class_togg: '',
        };
    }

    setToggleTopMenuClass() {
        if (this.props.menu_class_togg === ''){
               console.log("should toggle");
               this.props.dispatch(toggleTopMenu("toggled"));
           } else {
               this.props.dispatch(toggleTopMenu(''));
           }

    }


    render () {
        let top_menu_class = `top-menu ${this.props.menu_class_togg}`;

            return (
                <div>
                    <div className={top_menu_class} >
                        <Lead />
                        <div className='left'>
                        
                        </div>
                        <div className='right'>
                            <Item text='Home' 
                                route='/home'
                            />
                            <Item text='Login'
                                route='/login'
                            />
                            <Item text='Register'
                                route='/register'
                            />
                            <Item text='Favorites'
                                route='/favorites'
                            />
                           
                        </div>
                        <FontAwesomeIcon icon="bars" className='top-menu-icon' onClick={() => this.setToggleTopMenuClass()} />
                        <div className='clear-fix' />
                    </div>
                </div>
            )
       
        
    }
}

// export default TopMenu;

const mapStateToProps = state => ({
    menu_class_togg: state.displayState.menu_class_togg
});
export default connect(mapStateToProps)(TopMenu);