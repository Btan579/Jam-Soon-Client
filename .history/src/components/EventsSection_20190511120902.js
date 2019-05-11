import React from 'react';
import { connect } from 'react-redux';
import '../styles/EventsSection.css';
import {addFavoriteArtist, addFavoriteEvent} from '../actions';

export class EventsSection extends React.Component {
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
                venueLocation: ""
            };
    }
      saveArtist(event) {
        const name = this.props.headliner;
        const playlist= this.props.headlinerPlaylist;
        console.log(this.props.currentUser_id);
        this.props.dispatch(addFavoriteArtist(name, playlist));
      }
       saveEvent(event) {
          const favEventName = this.props.eventName;
          const favDate = this.props.eventDay;
          const favHeadliner = this.props.headliner;
          const favSupportingArtists = this.props.secondArtist;
          const favVenue = this.props.venueName;
          const favVenueLocation = this.props.favVenueLocation;
        
           this.props.dispatch(addFavoriteEvent(favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation));
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
                        <h5>{this.props.eventDay}</h5>
                        <h5>Venue name: {this.props.venueName}</h5>
                        <h5>Location: {this.props.venueLocation}</h5>
                        {this.props.eventDay}
                    </div>
                    <button type="button" onClick={() => this.saveEvent(
                        this.props.eventName,
                        this.props.eventDay,
                        this.props.headliner,
                        this.props.secondArtist,
                        this.props.venueName,
                        this.props.venueLocation,
                        )}>Favorite event</button>
                    
                </div>
        );
    }
        
}



const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});


export default connect(mapStateToProps)(EventsSection);