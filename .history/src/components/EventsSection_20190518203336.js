import React from 'react';
import { connect } from 'react-redux';
// import PerformerSection from './PerformerSection';
// import PerformerSection from '../components/PerformerSection';
import '../styles/EventsSection.css';
import {addFavoriteArtist, addFavoriteEvent} from '../actions/favorites';

export class EventsSection extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                eventDay: "",
                eventName: "",
                headliner: "",
                headlinerPlaylist: "",
                performingArtists: [],
                headliner_id: '',
                secondArtist: "",
                secondArtist_id: "",
                secondArtistPlaylist: "",
                venueName: "",
                venueLocation: "",
                event_id: "",
                artistName: '',
                artist_id: '',
                billIndex: '',
                billSlot: ''
            };
    }
    
       saveEvent(event) {
           const artists = this.props.performingArtists;
           console.log(artists);
           const favEventName = artists[0].artistName;
          let supportArtists = [];
          for (let i = 1;  i < artists.length; i++){
              let sArtist = artists[i].artistName;

              return supportArtists.push(sArtist);
          }
          console.log(supportArtists);
        //   const favDate = this.props.eventDay;
        //   const favHeadliner = this.props.headliner;
        //   const favSupportingArtists = this.props.secondArtist;
        //   const favVenue = this.props.venueName;
        //   const favVenueLocation = this.props.favVenueLocation;
        
        //    this.props.dispatch(addFavoriteEvent(favEventName, favDate, favHeadliner, favSupportingArtists, favVenue, favVenueLocation));
       }
    saveArtist(performer) {
        console.log(performer);
        const playlistUrl = "ham ham ham";
        const favArtistName = performer.artistName;
        const artist_id = performer.artist_id;
        const user_id = this.props.currentUser_id;
        
        this.props.dispatch(addFavoriteArtist(favArtistName, playlistUrl, artist_id, user_id));
        
    }
    render() {

        return (
            <div className="event-section"
                data-headliner_id={this.props.headliner_id}
                data-second-artist_id={this.props.secondArtist_id}
                data-event_id={this.props.event_id}
            >
                <h4>{this.props.eventName}</h4>
                    <div className="performers-section">
                        {this.props.performingArtists.map((performer, index) => (
                            <div key={`performer${index}`} data-bill-index={performer.billIndex}>
                                <h5>{performer.artistName}</h5>
                                <p>{performer.artist_id}</p>
                                <p>{performer.billIndex}</p>
                                <p>{performer.billSlot}</p>
                                <button type="button" onClick={() => this.saveArtist(performer)}>Favorite artist</button>
                            </div>
                        ))}
                       
                    </div>
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
                        this.props.performingArtists,
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
//     events: state.eventsState.events
});


export default connect(mapStateToProps)(EventsSection);