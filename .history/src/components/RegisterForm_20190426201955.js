import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import '../styles/RegisterForm.css';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export default class RegisterForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form className= "register-form" >
                <h3>Start Listening</h3>
                <label>User name</label>
                <input type="text" placeholder="User123" />
                <label>Password</label>
                <input type="password" placeholder="password" />
                <button>Sign up</button>
                <p>Already signed up? <Link to="/login">Login!</Link></p>
            </form>
        );
    }
}