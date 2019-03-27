import React from 'react';

import '../styles/FavoriteArtists.css';

// export default class FavoriteArtists extends React.Component {
//     render(props) {
//          return (
//             <div className="favorite-artist">
//                 <h3>{props.name}</h3>
//                 <p>{props.playlist}</p>
//                 <button>Delete artist</button>
//             </div>
//         );
//     }
// }

export default function FavoriteArtists(props) {
    return (
        <div className="favorite-artist">
                <h3>{props.name}</h3>
                <p>{props.playlist}</p>
                <button>Delete artist</button>
            </div>
    );
};

FavoriteArtists.defaultProps = {
    name: '',
    playlist: ''
};