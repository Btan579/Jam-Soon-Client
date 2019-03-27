import React from 'react';

import '../styles/CalendarSearchSection.css';

export default class CalendarSearchSection extends React.Component {
    render() {
    
        return (
            <div className="calendar-search-section">
            {/* <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
            <script src="//code.jquery.com/jquery-1.12.4.js"></script>
            <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script> */}
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
            {/* <div className="datepicker"></div> */}
            <form className='calender-search-input'>
                <div>
                    <label htmlFor = "date" > Date </label>
                    <input placeholder='12/31/1999' type="text" name='date' id='date' />
                    <p>[Placeholder for jQuery datepicker calender plugin component]</p>
                </div>
            </form>
            {/* <script>
                $(".datepicker").datepicker(); 
                </script> */}
            </div>
            
        );
    }
}