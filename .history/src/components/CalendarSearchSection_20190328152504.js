import React from 'react';
import DatePicker from 'react-date-picker';
import '../styles/CalendarSearchSection.css';

export default class CalendarSearchSection extends React.Component {

    
    render() {
    
        return (
            <div className="calendar-search-section">
           
            <header>
                <h3>Find some shows</h3>
            </header>
            <form className='metro-search-input'>
                <div>
                    <label htmlFor="metro-search">Search</label>
                    <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' />
                </div>

                <button type='submit'>Submit</button>
            </form>
            <DatePicker />     
            </div>
            
        );
    }
}