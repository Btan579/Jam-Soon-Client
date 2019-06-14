import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Item from './Item';
import Lead from './Lead';
import { toggleTopMenu } from '../actions/display';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/topMenu.css';

export class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_class_togg: '',
        };
    }
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    onClick(e) {
        e.preventDefault();
    }
    setToggleTopMenuClass() {
        
        if (this.props.menu_class_togg === ''){
               this.props.dispatch(toggleTopMenu("toggled"));
           } else {
               this.props.dispatch(toggleTopMenu(''));
           }

    }


    render () {
        
        let logOutButton;
        let userInfo; let top_menu_class = `top-menu ${this.props.menu_class_togg}`;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
            userInfo = (
                <div className="current-username">
                    Welcome! {this.props.username}
                </div>
            );

            return (
                <div>
                    <div className={top_menu_class} >
                        <Lead />
                        <div className='left'>
                            {userInfo}
                            {logOutButton}
                        </div>
                        <div className='right'>
                            <Item text='Home'
                                to='/home'
                            />
                            <Item text='Favorites'
                                to='/favorites'
                            />
                        </div>
                        <FontAwesomeIcon icon="bars" className='top-menu-icon' onClick={(e) => this.setToggleTopMenuClass()} />
                        <div className='clear-fix' />
                    </div>
                </div>
            )
            
        } else {
            return (
                <div>
                    <div className={top_menu_class} >
                        <Lead />
                        <div className='left'>
                            {userInfo}
                            {logOutButton}
                        </div>
                        <div className='right'>
                            <Item text='Events'
                                to='/home'
                            />
                            <Item text='Login'
                                to='/login'
                            />
                            <Item text='Register'
                                to='/register'
                            />
                            <Item text='Favorites'
                                to='/favorites'
                            />
                        </div>
                        <FontAwesomeIcon icon="bars" className='top-menu-icon' onClick={() => this.setToggleTopMenuClass()} />
                        <div className='clear-fix' />
                    </div>
                </div>
            )
        } 
    }
}

// export default TopMenu;

const mapStateToProps = state => ({
    menu_class_togg: state.displayState.menu_class_togg,
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUserName
});
export default connect(mapStateToProps)(TopMenu);