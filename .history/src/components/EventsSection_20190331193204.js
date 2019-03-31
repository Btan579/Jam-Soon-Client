import React from 'react';
import { connect } from 'react-redux';
import '../styles/EventsSection.css';
import {addFavoriteArtist} from '../actions';

default class EventsSection extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
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
                venueDescription: ""
            }
    }
      saveArtist(headliner) {
        event.preventDefault();
        const name = this.props.headliner;
        const playlist= this.props.headlinerPlaylist;
        this.props.dispatch(addFavoriteArtist(name, playlist));
        console.log(name);
        console.log(playlist);
      }
    render() {
        return (
            <div className="event-section">
                    <h4>{this.props.eventName}</h4>
                    <h4>{this.props.headliner}</h4>
                    <p>{this.props.headlinerPlaylist}</p>
                    <button type="button" onClick={() => this.saveArtist(this.props.headliner, this.props.headlinerPlaylist)}>Favorite artist</button>
                    <h4>{this.props.secondArtist}</h4>
                    <p>{this.props.secondArtistPlaylist}</p>
                    <button>Favorite artist</button>
                    <div className="venue-cont">
                        <h4>Venue</h4>
                        <h5>Venue name: {this.props.venueName}</h5>
                        <h5>Address: {this.props.venueAddress}</h5>
                        <h5>City: {this.props.venueCity}</h5>
                        <h5>Zip: {this.props.venueZip}</h5>
                        <h5>State: {this.props.venueState}</h5>
                        <h5>Country: {this.props.venueCountry}</h5>
                        <h5>Website: {this.props.venueWesbite}</h5>
                        <h5>Phone: {this.props.venuePhone}</h5>
                        <h5>Description: {this.props.venueDescription}</h5>
                    </div>
                    <button>Favorite event</button>
                    
                </div>
        );
    }
        
}

export default connect()(EventsSection);