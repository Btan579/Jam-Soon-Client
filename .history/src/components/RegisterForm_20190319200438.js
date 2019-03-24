import React from "react";
import '../styles/RegisterForm.css';

export default class RegisterForm extends React.Component {
    render() {
        return (
            <form className= "register-form" >
                <h3>Start Listening</h3>
                <label>User name</label>
                <input type="text" placeholder="User123" />
                <label>Password</label>
                <input type="password" placeholder="password" />
                <button>Sign up</button>
            </form>
        );
    }
}