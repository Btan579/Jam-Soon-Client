import React from "react";
import "./Register.css";

const Register = () => (
    <form class="register-form">
    <h3>Start Listening</h3>
    <label>User name</label>
    <input type="text" placeholder="User123" />
    <input type="password" placeholder="password" />
    <button>Sign up</button>
    </form>
);

export default Register;