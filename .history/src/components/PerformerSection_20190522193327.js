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
                list: `PL${props.playlist_id}`
            }
        };
        return (
            <div className="performer-section"
                data-event_id={props.event_id}
            >
                <h5>{props.artistName}</h5>
                <p>{props.artist_id}</p>
                <p>{props.billIndex}</p>
                <p>{props.billSlot}</p>
                <a target='_blank' href={`https://www.youtube.com/playlist?list=${props.playlist_id}`}><img className='vidThumbnail' alt={`${props.artistName} playlist thumbnail`} src={props.thumbnail} /></a>
                <YouTube
                   opts={opts} 
                />
            </div>
        );
    }
    
};

