import React from "react";
import TopNav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

export default class RegisterPage extends React.Component {
    render() {
        return (
            <section>
                <TopNav />
                <Header />
                <RegisterForm />
                <Footer />
            </section>
        );
    }
}