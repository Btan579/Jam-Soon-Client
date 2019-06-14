import React from 'react';
import { connect } from 'react-redux';
import '../styles/PerformerSection.css';
import YouTube from 'react-youtube';
import { addFavoriteArtist } from '../actions/favorites';

export class PerformerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistName: '',
            artist_id: '',
            billIndex: '',
            billSlot: '',
            video_id: '',
            event_id: ''
        };
    }
    saveArtist(performer) {
        const videoUrl = this.props.video_id;
        const favArtistName = this.props.artistName;
        const artist_id = this.props.artist_id;
        const user_id = this.props.currentUser_id;
        this.props.dispatch(addFavoriteArtist(favArtistName, videoUrl, artist_id, user_id));
    }
    render() {
        const opts = {
            height: '200',
            width: '300',
            playerVars: { autoplay: 0 }
        };
        
        return (
            <div className="performer-section"
                data-event_id={this.props.event_id}
                data-artist_id={this.props.artist_id}
                data-billindex={this.props.billIndex}
                data-billslot={this.props.billSlot}
            >
                <h5>{this.props.artistName}</h5>
                <YouTube
                    videoId={this.props.video_id}
                   opts={opts} 
                />
                <button className="favorite-artist-btn" type="button" onClick={() => this.saveArtist(
                    this.props.artistName,
                    this.props.artist_id,
                    this.props.video_id,
                    this.props.event_id
                )}>Favorite artist</button>
                <hr className="hr-artist"></hr>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});

export default connect(mapStateToProps)(PerformerSection);