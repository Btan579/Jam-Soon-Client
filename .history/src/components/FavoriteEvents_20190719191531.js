import React from 'react';
import { connect } from 'react-redux';
import '../styles/FavoriteEvents.css';
import { deleteFavoriteEvent } from '../actions/favorites';
import FavoriteArtistsSection from './FavoriteArtistsSection';

export class FavoriteEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favEventName: "",
            favDate: "",
            favArtists: [""],
            favVenue: "",
            favVenueLocation: "",
            event_id: "",
            _id: ''
        };
    }
    onDelete(toDelete) {
        this.props.dispatch(deleteFavoriteEvent(toDelete));
    }
    
    render() {
        return (
            <div className="-fav-event-cont">  
                {this.props.favoriteEvents.map((event, index) => (
                    <div className="favorite-event"
                        key={index}
                        ref="favevent"
                        data-_id={event._id}
                        data-user={this.props.currentUser_id}
                    >
                        <h4>{event.favEventName}</h4>
                        <h3>{event.favDate}</h3>
                        <h3>{event.favVenue}</h3>
                        <h3>{event.favVenueLocation}</h3>
                        {event.favArtists.sort((a, b) => a.billIndex > b.billIndex ? 1 : -1)
                        .map((favEvntArtist, k) => (
                            <FavoriteArtistsSection
                                key={k}
                                artistName={favEvntArtist.artistName}
                                artist_id={favEvntArtist.artist_id}
                                billIndex={favEvntArtist.billIndex}
                                billSlot={favEvntArtist.billSlot}
                                video_id={favEvntArtist.video_id}
                                event_id={favEvntArtist.event_id}
                            />
                        ))}
                        <button type="button" className="fav-event-delete-btn"
                            onClick={() => this.onDelete(event._id)}>Delete event</button>
                            <hr className="fav-event-hr"></hr>                
                    </div>
                ))}
            </div>
        );
    };
}
    
const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
    favoriteEvents: state.favorites.favoriteEvents
});

export default connect(mapStateToProps)(FavoriteEvents);