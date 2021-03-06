import React from 'react';

import './CalendarSearch.css';

export default class CalendarSearch extends React.Component {
    render() {
    
        return (
            <div className="calendar-search-section">
            <header>
                <h3>Find some shows</h3>
            </header>
            <form class='metro-search-input'>
                <div>
                    <label for="metro-search">Search</label>
                    <input placeholder='Find concerts for any city' type="text" name='metro-search' id='metro-search' />
                </div>

                <button type='submit'>Submit</button>
            </form>
            <form class='calender-search-input'>
                <div>
                    <label for="date">Date</label>
                    <input placeholder='12/31/1999' type="text" name='date' id='date' />
                    <p>[Placeholder for jQuery datepicker calender plugin component]</p>
                </div>
            </form>
            </div>
            
        );
    }
}