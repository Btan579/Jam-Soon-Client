import React from 'react';

import './Login.css';

export default class Login extends React.Component {
    render() {
    
        return (
            <div className="login-section">
                <header>
                    <h3>Login</h3>
                </header>
                <form className='login-form'>
                    <div>
                        <label for="user-name">Username</label>
                        <input placeholder='User123' type="text" name='user-name' id='user-name' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                        <button type='submit'>Submit</button>
                </form>
            </div>
            
        );
    }
}