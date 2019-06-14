import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopMenu from "../components/topMenu";
import "../styles/LoginPage.css";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


export function LoginPage(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }
        return (
            <div className="login-page">
                <TopMenu />
                <LoginForm />
                <Footer />
            </div>
        );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);