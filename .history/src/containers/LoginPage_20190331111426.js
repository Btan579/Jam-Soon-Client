import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class LoginPage extends React.Component {

     onSelect(date) {
         console.log(date);
     }
    render() {
        return (
            <section>
                <TopNav />
                <Header />
                <LoginForm />
                <DatePicker 
                dateFormat="yyyy/MM/dd"
                 onSelect={(date) => this.onSelect(date)}
                />
                <Footer />
            </section>
        );
    }
}