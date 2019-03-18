import React from 'react';

import './Events.css';

export default class Events extends React.Component {
    

    
    render() {
    
        return (
            <div className="event-section">
                <header>
                <h3>Events for <em>Day</em></h3>
                </header>
                <div className="event-list">
                <div className="single-event">
                    <header>
                        <h2>Event Name</h2>
                    </header>
                    <h3>Artists</h3>
                    <div className="first-artist-cont">
                        <h4>Headlining artist</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="second-artist-cont">
                        <h4>Second artist</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="venue-cont">
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
                    <button>Favorite</button>
                </div>
                </div>
            </div>
        );
    }
}