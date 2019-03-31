import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class LoginPage extends React.Component {
    render() {
        return (
            <section>
                <TopNav />
                <Header />
                <LoginForm />
                <DatePicker />
                <Footer />
            </section>
        );
    }
}