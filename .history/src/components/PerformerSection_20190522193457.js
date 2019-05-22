import React from 'react';
// import {landingSections}  from './ComponentData';
import '../styles/PerformerSection.css';
import YouTube from 'react-youtube';
export default class PerformerSection extends React.Component {
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
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
                listType: 'playlist',
                list: `PL${this.props.playlist_id}`
            }
        };
        return (
            <div className="performer-section"
                data-event_id={this.props.event_id}
            >
                <h5>{this.props.artistName}</h5>
                <p>{this.props.artist_id}</p>
                <p>{this.props.billIndex}</p>
                <p>{this.props.billSlot}</p>
                <a target='_blank' href={`https://www.youtube.com/playlist?list=${this.props.playlist_id}`}><img className='vidThumbnail' alt={`${this.props.artistName} playlist thumbnail`} src={this.props.thumbnail} /></a>
                <YouTube
                   opts={opts} 
                />
            </div>
        );
    }
    
};

