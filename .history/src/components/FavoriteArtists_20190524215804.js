import React from 'react';
import '../styles/FavoriteArtists.css';
import { connect } from 'react-redux';
import { deleteFavoriteArtist } from '../actions/favorites';
import YouTube from 'react-youtube';

export class FavoriteArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favArtistName: '',
            video_id: '',
            _id: '',
            artist_id: ''
        };
    }
    
    onDelete(toDelete) {
        this.props.dispatch(deleteFavoriteArtist(toDelete));
        console.log(toDelete);
    }
    
    render() {
        const opts = {
            height: '300',
            width: '400',
            playerVars: { autoplay: 0 }
        };
         return (
            <div className="favorite-artist"
                 
                 ref="favartist"
                 data-user={this.props.currentUser_id}
                 data-artist_id={this.props.artist_id}
                 data_id={this.props._id}

            >
                 <h4>{this.props.favArtistName}</h4>
                 <YouTube
                     videoId={this.props.video_id}
                     opts={opts}
                 />
                <p>{this.props.playlist}</p>
                 <button type="button" 
                     onClick={() => this.onDelete(this.props._id)}>Delete artist</button>
            </div>
        );
    }
}

// export default function FavoriteArtists(props) {
//     return (
//         <div className="favorite-artist">
//                 <h3>{props.name}</h3>
//                 <p>{props.playlist}</p>
//                 <button>Delete artist</button>
//             </div>
//     );
// };

// FavoriteArtists.defaultProps = {
//     name: '',
//     playlist: ''
// };

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});


export default connect(mapStateToProps)(FavoriteArtists);