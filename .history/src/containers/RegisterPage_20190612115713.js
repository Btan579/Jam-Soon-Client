import React from "react";
// import TopNav from "../components/TopNav";
// import Header from "../components/Header";
import TopMenu from "../components/topMenu";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function RegisterPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="register-page">
            <TopMenu />
            <RegisterForm />
            <Footer />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);