import React from "react";
import "./Register.css";


export default function Register() {
    return (
        <div className="register-section">
            <h3>Start Listening</h3>
            < form className= "register-form" >
                <h4>Register</h4>
                    <label>User name</label>
                    <input type="text" placeholder="User123" />
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                    <button>Sign up</button>
            </form>
        </div>
         
    );
};
