import React from 'react';
import { connect } from 'react-redux';
import '../styles/FavoriteEvents.css';
import { deleteFavoriteEvent } from '../actions/favorites';
// import YouTube from 'react-youtube';
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
        const favorites = this.props.favoriteEvents.map(event => {
            return event.favArtists;
        });
        const favArtistsArr = favorites.map((event, index) => (
            console.log(event)
            // <FavoriteArtistsSection
            //     key={index}
            //     artistName={event.artistName}
            //     artist_id={event.artist_id}
            //     billIndex={event.billIndex}
            //     billSlot={event.billSlot}
            //     video_id={event.video_id}
            //     event_id={event.event_id}
            // />
        )); 

        console.log(favorites);
        return (
            <div className="favorite-event"
                ref="favevent"
                data-_id={this.props._id}
                data-user={this.props.currentUser_id}
                data-event_id={this.props.event_id}
            >
                {console.log(favorites)}
                <h4>{this.props.favEventName}</h4>
                <h4>{this.props.favDate}</h4>
                {favArtistsArr}
                <h4>{this.props.favVenue}</h4>
                <h4>{this.props.favVenueLocation}</h4>
                <button type="button"
                    onClick={() => this.onDelete(this.props._id)}>Delete event</button>
            </div>
        );
    };
}
    

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
    favoriteEvents: state.favorites.favoriteEvents
});


export default connect(mapStateToProps)(FavoriteEvents);

// FavoriteEvents.defaultProps = {
//     favEventName: "",
//     favDate: "",
//     favHeadliner: "",
//     favSupportingArtists: [""],
//     favVenue: "",
//     favCity: "",
//     favState: "",
//     favZip: "",
// };