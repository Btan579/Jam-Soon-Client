import React from 'react';
import {connect} from 'react-redux';
import './Events.css';

export class Events extends React.Component {
   
    
    render() {
         
        return (
            <div className="event-section">
                <header>
                <h3>Events for <em>{MockEvent.eventDay}</em></h3>
                </header>
                <div className="event-list">
                <div className="single-event">
                    <header>
                        <h2>Event Name: {MockEvent.Event.eventName}</h2>
                    </header>
                    <h3>Artists</h3>
                    <div className="first-artist-cont">
                        <h4>Headlining artist: {MockEvent.Event.artists.firstArtist}</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="second-artist-cont">
                        <h4>Second artist: {MockEvent.Event.artists.secondArtist}</h4>
                        <p>[<em>Playlist of headliner</em>]</p>
                        <button>Favorite</button>
                    </div>
                    <div className="venue-cont">
                        <h3>Venue</h3>
                        <h4>Venue name: {MockEvent.Event.venue.venueName}</h4>
                        <h4>Address: {MockEvent.Event.venue.venueAddress}</h4>
                        <h4>City: {MockEvent.Event.venue.venueCity}</h4>
                        <h4>Zip: {MockEvent.Event.venue.venueZip}</h4>
                        <h4>State: {MockEvent.Event.venue.venueState}</h4>
                        <h4>Country: {MockEvent.Event.venue.venueCountry}</h4>
                        <h4>Website: {MockEvent.Event.venue.venueWesbite}</h4>
                        <h4>Phone: {MockEvent.Event.venue.venuePhone}</h4>
                        <h4>Description: {MockEvent.Event.venue.venueDescription}</h4>
                    </div>
                    <button>Favorite</button>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    MockEvent: state.MockEvent
});

export default connect(mapStateToProps)(Events);