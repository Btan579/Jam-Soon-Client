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
        // let fArray = [];
        let evntId = this.props.favoriteEvents.event_id;
        let fEvents = this.props.favoriteEvents;
        // for (let j = 0; j < fEvents.length; j++){
        //        let fEvent = fEvents[j];
        //         console.log(fEvent.favArtists);
        //     fArray.push(fEvent.favArtists);
        // }

        console.log(evntId);

        // const favorites = this.props.favoriteEvents.map(event =>  {
        //     // for(let j = 0; j < event.favArtists.length; j++){
        //     //     // map event.favartists
        //     //     return event.favArtists[j];
        //     // }
        //     return event.favArtists;
        // });

        // const favoritesfilter = favorites.filter(favorite => {
        //     return favorite.event_id === evntId;
        // });

     
        // console.log(favoritesfilter);
        // const favArtistsArr = fEvents.map((event, index) => (
        //     <div key={index}>
        //         {event.favArtists.map((art, k) => (
        //             <div key={k}>

        //             </div>
        //         ))}
        //     </div>
            
        // )); 

        // const favArtistsArr = favorites.map(event => event.map((evnt, index) => (
        //     <FavoriteArtistsSection
        //         key={index}
        //         artistName={evnt.artistName}
        //         artist_id={evnt.artist_id}
        //         billIndex={evnt.billIndex}
        //         billSlot={evnt.billSlot}
        //         video_id={evnt.video_id}
        //         event_id={evnt.event_id}
        //     />

        // ))); 


        return (
            <div className="favorite-event"
                ref="favevent"
                data-_id={this.props._id}
                data-user={this.props.currentUser_id}
                data-event_id={this.props.event_id}
            >
               {/* {favArtistsArr} */}
                <h4>{this.props.favEventName}</h4>
                <h4>{this.props.favDate}</h4>
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