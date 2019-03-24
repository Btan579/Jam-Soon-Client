import React from "react";
import TopNav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default class Login extends React.Component {
    render() {
    
        return (
            <section>
                <TopNav />
                <Header />
                <LoginForm />
                <Footer />
            </section>
        );
    }
}