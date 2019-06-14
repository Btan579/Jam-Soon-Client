import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Header from "./Header";
import Item from './Item';
import Lead from './Lead';
import { toggleTopMenu } from '../actions/display';
// import logo from "../images/JS-logo-1.svg";
// import { Link } from "react-router-dom";
import '../styles/topMenu.css';

export class TopMenu extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // menu_class: '',
    //     };
    // }
    
    setToggleTopMenuClass() {

       
        console.log(this.props);
        // if (this.props.menu_class === '') {
        //     let toggled = "toggled";
        //     this.props.dipatch(toggleTopMenu(toggled));
        //     // this.setState({
        //     //     menu_class: 'toggled',
        //     // });
        // } else {
        //     let notToggled = "";
        //     this.props.dipatch(toggleTopMenu(notToggled));
        //     // this.setState({
        //     //     menu_class: '',
        //     // });
        // }
    }


    render () {
        
        let top_menu_class = `top-menu ${this.props.menu_class}`;

        return (
            <div>
                <div className={top_menu_class} >
                    <Lead />
                    <div className='left'>
                        <Item text='Left1'/>
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

const mapStateToProps = state => ({
    menu_class: state.displayState.menu_class
});

export default connect(mapStateToProps)(TopMenu);