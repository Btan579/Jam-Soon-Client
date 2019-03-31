import React from 'react';
// import { connect } from 'react-redux';
import '../styles/EventsSection.css';


export default class EventsSection(props) {
    // saveArtist(artist) {
    //     const artistToSave = this.props.headliner;
    //     // this.props.dispatch
    //     console.log(artistToSave);
    // }

    return (
         <div className="event-section">
                <h4>{props.eventName}</h4>
                <h4>{props.headliner}</h4>
                <p>{props.headlinerPlaylist}</p>
                <button>Favorite artist</button>
                <h4>{props.secondArtist}</h4>
                <p>{props.secondArtistPlaylist}</p>
                <button type="button" onClick={() => this.saveArtist(this.props.headliner)}>Favorite artist</button>
                <div className="venue-cont">
                    <h4>Venue</h4>
                    <h5>Venue name: {props.venueName}</h5>
                    <h5>Address: {props.venueAddress}</h5>
                    <h5>City: {props.venueCity}</h5>
                    <h5>Zip: {props.venueZip}</h5>
                    <h5>State: {props.venueState}</h5>
                    <h5>Country: {props.venueCountry}</h5>
                    <h5>Website: {props.venueWesbite}</h5>
                    <h5>Phone: {props.venuePhone}</h5>
                    <h5>Description: {props.venueDescription}</h5>
                </div>
                <button>Favorite event</button>
                
            </div>
    );
};

EventsSection.defaultProps = {
    eventDay: "",
    eventName: "",
    headliner: "",
    headlinerPlaylist: "",
    secondArtist: "",
    secondArtistPlaylist: "",
    venueName: "",
    venueAddress: "",
    venueCity: "",
    venueZip: "",
    venueState: "",
    venueCountry: "",
    venueWesbite: "",
    venuePhone: "",
    venueDescription: "",
};
