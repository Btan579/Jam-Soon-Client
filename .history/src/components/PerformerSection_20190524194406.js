import React from 'react';
import { connect } from 'react-redux';
// import {landingSections}  from './ComponentData';
import '../styles/PerformerSection.css';
import YouTube from 'react-youtube';
import { addFavoriteArtist, addFavoriteEvent } from '../actions/favorites';

export class PerformerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artist_id: '',
            billIndex: '',
            billSlot: '',
            playlist_id: '',
            thumbnail: '',
            event_id: ''
        };
    }
    saveArtist(performer) {
        const playlistUrl = this.props.playlist_id;
        const favArtistName = this.props.artistName;
        const artist_id = this.props.artist_id;
        const user_id = this.props.currentUser_id;
        console.log(favArtistName, playlistUrl, artist_id, user_id);
        this.props.dispatch(addFavoriteArtist(favArtistName, playlistUrl, artist_id, user_id));

    }
    render() {
        const opts = {
            height: '300',
            width: '400',
            playerVars: {
                autoplay: 0,
                listType: 'playlist',
                list: `${this.props.playlist_id}`
            }
        };
        
        return (
            <div className="performer-section"
                data-event_id={this.props.event_id}
            >
                {/* {console.log(opts.playerVars.list)} */}
                <h5>{this.props.artistName}</h5>
                <p>{this.props.artist_id}</p>
                <p>{this.props.billIndex}</p>
                <p>{this.props.billSlot}</p>

                {/* <a target='_blank' href={`https://www.youtube.com/playlist?list=${this.props.playlist_id}`}><img className='vidThumbnail' alt={`${this.props.artistName} playlist thumbnail`} src={this.props.thumbnail} /></a> */}
                <YouTube
                   opts={opts} 
                />
                <button type="button" onClick={() => this.saveArtist(
                    this.props.artistName,
                    this.props.artist_id,
                    this.props.playlist_id
                )}>Favorite artist</button>
            </div>
        );
    }
    
};

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});


export default connect(mapStateToProps)(PerformerSection);