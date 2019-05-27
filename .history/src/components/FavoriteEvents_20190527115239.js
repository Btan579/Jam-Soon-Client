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
        // // let fArray = [];
        // let evntId;
        let fEvents = this.props.favoriteEvents;

        // const fId = fEvents.map(event => {
        //     return event.event_id === fId;
        // });

        // const evnts = this.props.videosData.filter(performer => {
        //     return performer.event_id === eventId;
        // });
        // const mEvents = fEvents.map((item, index) => {
        //     item.favArtists.filter((vid) => {
        //         return vid.event_id === evntId;
        //     });
        // });
        // const mEvents = fEvents.map((item, index) => {
        //     item.favArtists.map((vid, i) => {
        //         console.log(vid);
        //     });
        // });

        // console.log(mEvents);

        // const favorites = fEvents
        // for (let j = 0; j < fEvents.length; j++){
        //        let fEvent = fEvents[j];
        //         console.log(fEvent.favArtists);
        //     fArray.push(fEvent.favArtists);
        // }


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
            // <FavoriteArtistsSection
            //     key={index}
            //     artistName={evnt.artistName}
            //     artist_id={evnt.artist_id}
            //     billIndex={evnt.billIndex}
            //     billSlot={evnt.billSlot}
            //     video_id={evnt.video_id}
            //     event_id={evnt.event_id}
            // />

        // ))); 


        return (
            <div>
                {fEvents.map((event, index) => (
                    <div className="favorite-event"
                        key={index}
                        ref="favevent"
                        data-_id={event._id}
                        data-user={event.currentUser_id}
                    >
                        <h1>{event.favEventName}</h1>
                        {event.favArtists.sort((a, b) => a.favEvntArtist.billIndex - b.favEvntArtist.billIndex).map((favEvntArtist, k) => (
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

                        {/* {event.favArtists.sort((a, b) => a.).map((favEvntArtist, k) => (
                            <FavoriteArtistsSection
                                key={k}
                                artistName={favEvntArtist.artistName}
                                artist_id={favEvntArtist.artist_id}
                                billIndex={favEvntArtist.billIndex}
                                billSlot={favEvntArtist.billSlot}
                                video_id={favEvntArtist.video_id}
                                event_id={favEvntArtist.event_id}
                            />
                        ))} */}
                        <h4>{event.favDate}</h4>
                        <h4>{event.favVenue}</h4>
                        <h4>{event.favVenueLocation}</h4>
                        <button type="button"
                            onClick={() => this.onDelete(this.props._id)}>Delete event</button>
                    </div>
                ))
                }
            </div>
            
            // <div className="favorite-event"
            //     ref="favevent"
            //     data-_id={this.props._id}
            //     data-user={this.props.currentUser_id}
            // >
            //    {/* {favArtistsArr} */}
            //     <h4>{this.props.favEventName}</h4>
            //     <h4>{this.props.favDate}</h4>
            //     <h4>{this.props.favVenue}</h4>
            //     <h4>{this.props.favVenueLocation}</h4>
            //     <button type="button"
            //         onClick={() => this.onDelete(this.props._id)}>Delete event</button>
            // </div>
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