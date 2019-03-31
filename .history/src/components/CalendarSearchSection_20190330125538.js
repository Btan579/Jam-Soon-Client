import React from 'react';
import DatePicker from 'react-date-picker';
// import {connect} from 'react-redux';
import '../styles/CalendarSearchSection.css';

export default class CalendarSearchSection extends React.Component {
      onSetArea(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
      
        this.textInput.value = '';
    }

    
    render() {
    
        return (
            <form className='metro-search-input' onSetArea={(e) => this.onSetArea(e)}>
                <div>
                    <label htmlFor="metro-search">Search</label>
                    <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' 
                            ref={input => this.textInput = input}/>
                </div>

                <button type='submit'>Set area</button>
                <DatePicker />     
            </form>
        );
    }
}