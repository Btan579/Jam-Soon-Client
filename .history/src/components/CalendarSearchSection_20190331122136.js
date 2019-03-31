import React from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import "react-datepicker/dist/react-datepicker.css";
import {setSearchCity, setSearchDate, setApiDate} from '../actions';
import moment from 'moment';
export class CalendarSearchSection extends React.Component {
      onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        this.props.dispatch(setSearchCity(text));
        this.textInput.value = '';
    }
  
    onSelect(date) {
        const apiDate = moment(date).format('YYYY-MM-DD');
        this.props.dispatch(setApiDate(apiDate.toString()));

        const clientDate = moment(date).format('MMMM Do YYYY');
        this.props.dispatch(setSearchDate(clientDate.toString()));
    }
    render() {
        return (
            <div>
                 <form className='event-search-input' onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
            </form>
              <DatePicker 
                dateFormat="MM/DD/YYYY"
                todayButton={"Vandaag"}
                selected={this.props.date}
                // onChange={(date) => this.onChange(date)}
                onSelect={(date) => this.onSelect(date)}

                    // value={this.props.date}
                />     
            </div>
           
        );
    }
}

export default connect()(CalendarSearchSection);