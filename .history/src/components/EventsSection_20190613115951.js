import React from 'react';
import { connect } from 'react-redux';
import PerformerSection from './PerformerSection';
import '../styles/EventsSection.css';
import {addFavoriteEvent} from '../actions/favorites';

export class EventsSection extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                eventDay: "",
                eventName: "",
                performingArtists: [],
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
        let eventId = this.props.event_id;
        const performers = this.props.videosData.filter(performer => {
           return performer.event_id === eventId;
        });

        const favDate = this.props.eventDay;
        const favEventName = this.props.eventName;
        const favArtists = performers;
        const favVenue = this.props.venueName;
        const favVenueLocation = this.props.venueLocation;
        const user_id = this.props.currentUser_id;
        console.log(this.props.currentUser_id);
        const event_id = this.props.event_id;
        this.props.dispatch(addFavoriteEvent(favEventName, favDate, favArtists, favVenue, favVenueLocation, event_id, user_id ));
    }
    render() {
    
            let eventId = this.props.event_id;
            const performers = this.props.videosData.filter(performer => {
                return performer.event_id === eventId;
            });

            const sortArtists = performers.sort((a, b) => {
                return a.billIndex > b.billIndex ? 1 : -1;
            });

            const perfs = sortArtists.map((performer, index) => (
                <PerformerSection
                    key={index}
                    artistName={performer.artistName}
                    artist_id={performer.artist_id}
                    billIndex={performer.billIndex}
                    billSlot={performer.billSlot}
                    video_id={performer.video_id}
                    event_id={performer.event_id}
                />
            ));

            return (
                <div className="event-section"
                    data-event_id={this.props.event_id}
                >
                    <div className="event-filter">
                        <h4>{this.props.eventName}</h4>
                        <div className="performers-section">
                            {perfs}
                        </div>
                        <div className="venue-cont">
                            <h4>Venue</h4>
                            <h5>Venue name: {this.props.venueName}</h5>
                            <h5>{this.props.eventDay}</h5>
                            <h5>Location: {this.props.venueLocation}</h5>
                        </div>
                        <button type="button" onClick={() => this.saveEvent(
                            this.props.eventName,
                            this.props.eventDay,
                            this.perfs,
                            this.props.venueName,
                            this.props.venueLocation,
                        )}>Favorite event</button>
                    </div>
                    
                </div>
            );
        
        
    }     
}

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
    events: state.eventsState.events,
    videosData: state.eventsState.videosData,
    metroError: state.eventsState.metroError
});

export default connect(mapStateToProps)(EventsSection);