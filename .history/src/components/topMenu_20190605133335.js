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
    constructor(props) {
        super(props);
        this.state = {
            menu_class_togg: '',
        };
    }

    setToggleTopMenuClass() {
        // const mm = this.props.menu_class_togg;
        // console.log(this.props.menu_class_togg);
        if (this.props.menu_class_togg === true){
            //    console.log(mm);
               this.props.dispatch(toggleTopMenu(false));
           } else {
               this.props.dispatch(toggleTopMenu(true));
           }

    }


    render () {
        let top_menu_class;

        if (this.props.menu_class_togg) {
            top_menu_class = `top-menu toggled`;
        } else {
             top_menu_class = `top-menu `;
        }
         
            return (
                <div>
                    <div className={top_menu_class} >
                        <Lead />
                        <div className='left'>
                            <Item text='Left1' />
                            <Item text='Left2' />
                        </div>
                        <div className='right'>
                            <Item text='Right1' />
                            <Item text='Right2' />
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