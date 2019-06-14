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

    setToggleTopMenuClass() {
        if (this.props.menu_class_togg === ''){
               console.log("should toggle");
               this.props.dispatch(toggleTopMenu("toggled"));
           } else {
               this.props.dispatch(toggleTopMenu(''));
           }

    }


    render () {
        let hideLogin = document.getElementById("menu-link-login");
        let hideRegister = document.getElementById("menu-link-register");
        let logOutButton;
        console.log(hideLogin);
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
            
            // hideLogin.style.display = "none";
            // hideRegister.style.display = "none";
        }
        let userInfo;
        if (this.props.username !== "") {
            userInfo = (
                <div className="current-username">
                    Welcome!: {this.props.username}
                </div>
            );
        }
        let top_menu_class = `top-menu ${this.props.menu_class_togg}`;

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
                                route='/home'
                             
                            />
                            <Item text='Login'
                                route='/login'
                              
                            />
                            <Item text='Register'
                                route='/register'
                                id="menu-link-register"
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
    menu_class_togg: state.displayState.menu_class_togg,
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUserName
});
export default connect(mapStateToProps)(TopMenu);