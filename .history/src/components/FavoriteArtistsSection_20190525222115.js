import React from 'react';
import '../styles/FavoriteArtistsSection.css';
import YouTube from 'react-youtube';

export default class FavoriteArtistsSection extends React.Component {
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
   
    render() {
        const opts = {
            height: '100',
            width: '200',
            playerVars: { autoplay: 0 }
        };

        return (
            <div className="favArtists-section">
                <p>{this.props.artistName}</p>
                <YouTube
                    videoId={this.props.video_id}
                    opts={opts}
                />
            </div>
        );
    }

};
