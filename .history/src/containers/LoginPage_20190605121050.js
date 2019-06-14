import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// import TopNav from "../components/TopNav";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export function LoginPage(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }
        return (
            <section>
                <TopNav />
                <Header />
                <LoginForm />
                <Footer />
            </section>
        );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);