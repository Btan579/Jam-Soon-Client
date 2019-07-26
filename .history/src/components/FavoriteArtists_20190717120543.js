import React from 'react';
import '../styles/FavoriteArtists.css';
import { connect } from 'react-redux';
// import { deleteFavoriteArtist } from '../actions/favorites';
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
    // deleteArtist(_id) {
    //     this.props.dispatch(deleteFavoriteArtist(_id));
    // }
    onClick(event) {
        event.preventDefault();
        console.log("on clicked");
        const del_id = this.artist_id_delete;
        this.props.onclick(del_id);
    }
    render() {
        const opts = {
            height: '200',
            width: '300',
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
                 <button type="button"  className='fav-artist-delete-btn'
                    // ref={button => this.artist_id_delete = this.props._id}
                     onClick={() => this.props.onclick( this.props._id)}>Delete artist</button>

                
                <hr className="fav-artist-hr"></hr>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser_id: state.auth.currentUser_id,
});

export default connect(mapStateToProps)(FavoriteArtists);