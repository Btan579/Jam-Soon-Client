import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class LoginPage extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
             startDate: new Date()
         };
         this.handleChange = this.handleChange.bind(this);
     }

    //  handleChange(date) {
    //      this.setState({
    //          startDate: date
    //      });
    //      console.log(date);

         
    //  }
handleChange(date) {

   const beginDate = moment(dateFormat.BeginDate_1).format('YYYY-MM-DD')
   console.log(beginDate);
   //other things
}
    //  onSelect(date) {
    //      console.log(date);
    //  }
    render() {
        return (
            <section>
                <TopNav />
                <Header />
                <LoginForm />
                <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
                <Footer />
            </section>
        );
    }
}