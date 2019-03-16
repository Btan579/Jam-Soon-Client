import React from "react";
import "./Register.css";


export default function Register() {
    return (
        <form class="register-form">
            <h3>Start Listening</h3>
            <label>User name</label>
                <input type="text" placeholder="User123" />
            <label>Password</label>
                <input type="password" placeholder="password" />
            <button>Sign up</button>
        </form>
    );
};
