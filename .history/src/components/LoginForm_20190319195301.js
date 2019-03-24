import React from 'react';

import './LoginForm.css';

export default class Login extends React.Component {
    render() {
    
        return (
            <form className='login-form'>
                <h3>Login</h3>
                <label htmlFor="user-name">Username</label>
                <input placeholder='User123' type="text" name='user-name' id='user-name' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
                <button type='submit'>Log in</button>
            </form>   
        );
    }
}