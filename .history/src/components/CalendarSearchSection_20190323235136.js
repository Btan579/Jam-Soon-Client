import React from 'react';

import '../styles/CalendarSearch.css';

export default class CalendarSearch extends React.Component {
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
            <form className='calender-search-input'>
                <div>
                    <label htmlFor = "date" > Date </label>
                    <input placeholder='12/31/1999' type="text" name='date' id='date' />
                    <p>[Placeholder for jQuery datepicker calender plugin component]</p>
                </div>
            </form>
            </div>
            
        );
    }
}