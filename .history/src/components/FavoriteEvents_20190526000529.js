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
        // const favorites = this.props.favoriteEvents.favArtists;
        // const favArtistsArr = favorites.map((artist, index) => (
        //     <FavoriteArtistsSection 
        //         key={index}
        //         artistName={artist.artistName}
        //         artist_id={artist.artist_id}
        //         billIndex={artist.billIndex}
        //         billSlot={artist.billSlot}
        //         video_id={artist.video_id}
        //         event_id={artist.event_id}
        //     />
        // ));
      
        return (
            <div className="favorite-event"
                ref="favevent"
                data-_id={this.props._id}
                data-user={this.props.currentUser_id}
                data-event_id={this.props.event_id}
                data-favartists={this.props.favArtists}
            >
                <h4>{this.props.favEventName}</h4>
                <h4>{this.props.favDate}</h4>
                {/* {favArtistsArr} */}
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
    favoriteEvents: state.fa
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