import React from 'react';

import './CalendarSearch.css';

export default class CalendarSearch extends React.Component {
    render() {
    
        return (
            <div className="favorites-section">
                <header>
                    <h3>My Favorites</h3>
                </header>
                <div className="favorites-cont">
                    <div className="favorite-artists-cont">
                        <header>
                            <h2>Artists</h2>
                        </header>
                        <div className="favorite-artist-cont">
                            <h3>Artist</h3>
                            <button>Delete</button>
                        </div>
                    </div>
                    <div className="favorite-events-cont">
                        <header>
                            <h2>Event Name</h2>
                        </header>
                        <h3>Artists</h3>
                        <div className="favorite-event-cont">
                            <h3>Venue</h3>
                            <h4>Venue name</h4>
                            <h4>Address</h4>
                            <h4>City</h4>
                            <h4>Zip</h4>
                            <h4>State</h4>
                            <h4>Country</h4>
                            <h4>Webite</h4>
                            <h4>Phone</h4>
                            <h4>Description</h4>
                        </div>
                        <button>Delete</button>
                    </div>
                    </div>
            </div>
            
            
        );
    }
}