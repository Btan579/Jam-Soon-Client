import React from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import {setSearchCity, setSearchDate} from '../actions';

export class CalendarSearchSection extends React.Component {
      onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
        this.props.dispatch(setSearchCity(text));
        this.textInput.value = '';
    }
    onChange(date) {
       
        this.props.dispatch(setSearchDate(date.toString()));
        console.log(date);
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
                // // dateFormat="YYYY-MM-DD"
                // selected={this.props.date}
                // onChange={(date) => this.onChange(date)}

                    // value={this.props.date}
                />     
            </div>
           
        );
    }
}

export default connect()(CalendarSearchSection);