import React from 'react';
import DatePicker from 'react-date-picker';
import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';
import {setSearchCity} from '../actions';

export class CalendarSearchSection extends React.Component {
      onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
        this.props.dispatch(setSearchCity(text));
        this.textInput.value = '';
    }

    render() {
        return (
            <form className='event-search-input' onSubmit={e => this.onSubmit(e)}>
                <label htmlFor="metro-search">Search</label>
                <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                <button>Set area</button>
                <DatePicker />     
            </form>
        );
    }
}

export default connect()(CalendarSearchSection);