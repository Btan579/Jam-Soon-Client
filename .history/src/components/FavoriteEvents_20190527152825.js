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
        console.log(toDelete);
    }
    
    render() {
        return (
            <div className="-fav-event-cont">  
                {this.props.favoriteEvents.map((event, index) => (
                    <div className="favorite-event"
                        key={index}
                        ref="favevent"
                        data-_id={event._id}
                        data-user={event.currentUser_id}
                    >
                        <h3>{event.favEventName}</h3>
                        <h4>{event.favDate}</h4>
                        <h4>{event.favVenue}</h4>
                        <h4>{event.favVenueLocation}</h4>
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
                        <button type="button"
                            onClick={() => this.onDelete(this.props._id)}>Delete event</button>
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