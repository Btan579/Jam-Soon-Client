import React from 'react';
import '../styles/FavoriteArtists.css';
import { connect } from 'react-redux';
// import { fetchFavoriteArtists } from '../actions/favorites';

export class FavoriteArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            playlist: ''
        };
    }
    
    onDelete(e) {
        e.preventDefault()
        console.log(data);
    }
    
    render() {
        
         return (
            <div className="favorite-artist"
                 
                 ref="favartist"
                 data-user={this.props.currentUser_id}
            >
                <h4>{this.props.name}</h4>
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